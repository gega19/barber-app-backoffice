'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { authService } from '@/lib/auth';
import api from '@/lib/api';
import { format } from 'date-fns';
import { Calendar, Clock, User, Phone, Plus, X, Search } from 'lucide-react';

interface Appointment {
    id: string;
    date: string;
    time: string;
    status: string;
    client: {
        name: string;
        phone?: string;
        email?: string;
    };
    service?: {
        name: string;
        price: number;
    };
}

interface CreateAppointmentFormData {
    date: string;
    time: string;
    clientName: string;
    clientPhone?: string;
    notes?: string;
    serviceId?: string; // Optional if we don't have services loaded
}

export default function AppointmentsPage() {
    const router = useRouter();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'past'

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<CreateAppointmentFormData>();

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            router.push('/login');
            return;
        }
        loadAppointments();
    }, [router]);

    const loadAppointments = async () => {
        try {
            setLoading(true);
            const response = await api.get<{ success: boolean; data: Appointment[] }>('/appointments');
            if (response.data.success) {
                setAppointments(response.data.data);
            }
        } catch (error) {
            console.error('Error loading appointments:', error);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data: CreateAppointmentFormData) => {
        try {
            // Get current user to get barberId (assuming user is barber)
            // Actually createAppointment requires barberId in body
            const user = await authService.getCurrentUser();
            // Wait, we need the Barber ID to pass in body.
            // IF the backend Controller requires 'barberId' in body, we need it.
            // My backend check: `if (!barberId ...)` in controller.
            // So I need my own barberId.
            // I can get it from /barbers/me

            const meResponse = await api.get('/barbers/me');
            if (!meResponse.data.success) throw new Error('Could not fetch barber profile');
            const barberId = meResponse.data.data.id;

            const payload = {
                ...data,
                barberId,
                paymentMethod: 'CASH', // Default for manual
                paymentProof: 'MANUAL_BOOKING',
            };

            const response = await api.post('/appointments', payload);

            if (response.status === 201) {
                setIsModalOpen(false);
                reset();
                loadAppointments();
                // Show success message
                alert('Cita creada exitosamente');
            }
        } catch (error: any) {
            console.error('Error creating appointment:', error);
            alert(error.response?.data?.message || 'Error al crear la cita');
        }
    };

    const filteredAppointments = appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        const now = new Date();
        // Reset hours for pure date comparison if needed, but 'upcoming' usually means future
        if (activeTab === 'upcoming') {
            return aptDate >= now || (aptDate.toDateString() === now.toDateString());
            // Simple logic: if date is today or future. 
            // Ideally compare timestamp with time, but date string from API might be YYYY-MM-DDT...
        } else {
            return aptDate < now;
        }
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Gestión de Citas</h1>
                        <p className="text-gray-500 text-sm">Administra tu agenda y crea reservas manuales.</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => router.push('/dashboard')}
                            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm"
                        >
                            Volver
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium text-sm flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            Nueva Cita Manual
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        <button
                            onClick={() => setActiveTab('upcoming')}
                            className={`${activeTab === 'upcoming'
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            Próximas
                        </button>
                        <button
                            onClick={() => setActiveTab('past')}
                            className={`${activeTab === 'past'
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            Historial
                        </button>
                    </nav>
                </div>

                {/* List */}
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    {filteredAppointments.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            <Calendar className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                            <p>No hay citas {activeTab === 'upcoming' ? 'próximas' : 'pasadas'}.</p>
                        </div>
                    ) : (
                        <ul className="divide-y divide-gray-200">
                            {filteredAppointments.map((apt) => (
                                <li key={apt.id} className="p-4 sm:p-6 hover:bg-gray-50 transition">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                                    {apt.client?.name?.charAt(0) || '?'}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-indigo-600 truncate">
                                                    {format(new Date(apt.date), 'dd MMM yyyy')} - {apt.time}
                                                </p>
                                                <h3 className="text-lg font-bold text-gray-900">{apt.client?.name || 'Cliente'}</h3>
                                                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                                    {apt.service?.name || 'Servicio General'}
                                                    {apt.service?.price && `• $${apt.service.price}`}
                                                </p>
                                                {apt.client?.phone && (
                                                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                                        <Phone className="w-3 h-3" /> {apt.client.phone}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${apt.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                                                    apt.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {apt.status}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-semibold text-gray-900">Nueva Cita Manual</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nombre del Cliente *</label>
                                <input
                                    {...register('clientName', { required: 'El nombre es obligatorio' })}
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                                    placeholder="Ej: Juan Pérez"
                                />
                                {errors.clientName && <p className="text-red-500 text-xs mt-1">{errors.clientName.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Teléfono (Opcional)</label>
                                <input
                                    {...register('clientPhone')}
                                    type="tel"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                                    placeholder="+58..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Fecha *</label>
                                    <input
                                        {...register('date', { required: 'Fecha requerida' })}
                                        type="date"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                                    />
                                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Hora *</label>
                                    <input
                                        {...register('time', { required: 'Hora requerida' })}
                                        type="time"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                                    />
                                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Notas</label>
                                <textarea
                                    {...register('notes')}
                                    rows={2}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2"
                                />
                            </div>

                            <div className="pt-4 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Guardando...' : 'Crear Cita'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
