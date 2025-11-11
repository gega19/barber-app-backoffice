'use client';

import { useState, useEffect, useCallback } from 'react';
import { Calendar, Plus, Search, Edit, Trash2, Eye, Filter, X, Copy, Check, ChevronDown, ChevronUp, Clock, User, Scissors, CreditCard } from 'lucide-react';
import { appointmentsService, Appointment, CreateAppointmentData, UpdateAppointmentData, AppointmentStatus } from '@/lib/appointments';
import { usersService } from '@/lib/users';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';

const appointmentSchema = z.object({
  userId: z.string().min(1, 'Selecciona un cliente'),
  barberId: z.string().min(1, 'Selecciona un barbero'),
  serviceId: z.string().optional(),
  date: z.string().min(1, 'La fecha es requerida'),
  time: z.string().min(1, 'La hora es requerida'),
  paymentMethod: z.string().min(1, 'El método de pago es requerido'),
  notes: z.string().optional(),
  status: z.enum(['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED']).optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<AppointmentStatus | 'ALL'>('ALL');
  const [dateFromFilter, setDateFromFilter] = useState('');
  const [dateToFilter, setDateToFilter] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [barbers, setBarbers] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      status: 'PENDING',
    },
  });

  const loadUsers = useCallback(async () => {
    try {
      const response = await usersService.getUsers(1, 100);
      setUsers(response.data);
    } catch (err) {
      console.error('Error loading users:', err);
    }
  }, []);

  const loadBarbers = useCallback(async () => {
    try {
      const barbersList = await usersService.getBarbers();
      setBarbers(barbersList);
    } catch (err) {
      console.error('Error loading barbers:', err);
    }
  }, []);

  const loadAppointments = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await appointmentsService.getAppointments(
        currentPage,
        10,
        searchTerm || undefined,
        statusFilter !== 'ALL' ? statusFilter : undefined,
        dateFromFilter || undefined,
        dateToFilter || undefined
      );
      setAppointments(response.data);
      setTotalPages(response.pagination.totalPages);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar citas');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, searchTerm, statusFilter, dateFromFilter, dateToFilter]);

  useEffect(() => {
    loadAppointments();
    loadUsers();
    loadBarbers();
  }, [loadAppointments, loadUsers, loadBarbers]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('ALL');
    setDateFromFilter('');
    setDateToFilter('');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm !== '' || statusFilter !== 'ALL' || dateFromFilter !== '' || dateToFilter !== '';

  const getAvatarUrl = (avatar?: string | null, avatarSeed?: string | null) => {
    if (avatar && avatar.trim() !== '') {
      return avatar;
    }
    if (avatarSeed) {
      return `https://api.dicebear.com/7.x/avataaars/png?seed=${avatarSeed}&size=512`;
    }
    return null;
  };

  const getStatusBadgeColor = (status: AppointmentStatus) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'CONFIRMED':
        return 'bg-blue-100 text-blue-800';
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: AppointmentStatus) => {
    switch (status) {
      case 'PENDING':
        return 'Pendiente';
      case 'CONFIRMED':
        return 'Confirmada';
      case 'COMPLETED':
        return 'Completada';
      case 'CANCELLED':
        return 'Cancelada';
      default:
        return status;
    }
  };

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedAppointment(null);
    reset({
      status: 'PENDING',
    });
    setIsModalOpen(true);
  };

  const handleView = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleEdit = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsEditMode(true);
    const appointmentDate = new Date(appointment.date);
    const dateStr = format(appointmentDate, 'yyyy-MM-dd');
    reset({
      userId: appointment.userId,
      barberId: appointment.barberId,
      serviceId: appointment.serviceId || '',
      date: dateStr,
      time: appointment.time,
      paymentMethod: appointment.paymentMethod || '',
      notes: appointment.notes || '',
      status: appointment.status,
    });
    setIsModalOpen(true);
  };

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      setError(null);
      if (isEditMode && selectedAppointment) {
        const updateData: UpdateAppointmentData = {
          status: data.status,
          date: data.date,
          time: data.time,
          paymentMethod: data.paymentMethod,
          notes: data.notes || undefined,
        };
        await appointmentsService.updateAppointment(selectedAppointment.id, updateData);
      } else {
        const createData: CreateAppointmentData = {
          userId: data.userId,
          barberId: data.barberId,
          serviceId: data.serviceId || undefined,
          date: data.date,
          time: data.time,
          paymentMethod: data.paymentMethod,
          notes: data.notes || undefined,
        };
        await appointmentsService.createAppointment(createData);
      }
      
      setIsModalOpen(false);
      reset();
      loadAppointments();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar cita');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setError(null);
      await appointmentsService.deleteAppointment(id);
      setDeleteConfirm(null);
      loadAppointments();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar cita');
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Calendar className="w-8 h-8 text-indigo-600" />
            </div>
            Citas
          </h1>
          <p className="text-gray-600 text-lg">Gestiona todas las citas y reservas</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5" />
          Nueva Cita
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-sm">
          <div className="flex items-center">
            <X className="w-5 h-5 mr-2" />
            {error}
          </div>
        </div>
      )}

      {/* Filters Section */}
      <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Filtros</span>
            {hasActiveFilters && (
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                Activos
              </span>
            )}
          </div>
          {showFilters ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {showFilters && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cliente o barbero..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value as AppointmentStatus | 'ALL');
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="ALL">Todos los estados</option>
                  <option value="PENDING">Pendiente</option>
                  <option value="CONFIRMED">Confirmada</option>
                  <option value="COMPLETED">Completada</option>
                  <option value="CANCELLED">Cancelada</option>
                </select>
              </div>

              {/* Date From Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Desde</label>
                <input
                  type="date"
                  value={dateFromFilter}
                  onChange={(e) => {
                    setDateFromFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                />
              </div>

              {/* Date To Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Hasta</label>
                <input
                  type="date"
                  value={dateToFilter}
                  onChange={(e) => {
                    setDateToFilter(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                />
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition"
                >
                  <X className="w-4 h-4" />
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : appointments.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No se encontraron citas
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Barbero
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Fecha y Hora
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Método de Pago
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-300 shadow-md">
                            {getAvatarUrl(appointment.client.avatar, appointment.client.avatarSeed) ? (
                              <img
                                src={getAvatarUrl(appointment.client.avatar, appointment.client.avatarSeed)!}
                                alt={appointment.client.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<span class="text-white font-semibold text-lg flex items-center justify-center w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600">${appointment.client.name.charAt(0).toUpperCase()}</span>`;
                                  }
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                                <span className="text-white font-semibold text-lg">
                                  {appointment.client.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">{appointment.client.name}</div>
                            <div className="text-sm text-gray-500">{appointment.client.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-amber-300 shadow-md">
                            {getAvatarUrl(appointment.barber.image, appointment.barber.avatarSeed) ? (
                              <img
                                src={getAvatarUrl(appointment.barber.image, appointment.barber.avatarSeed)!}
                                alt={appointment.barber.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<span class="text-white font-semibold flex items-center justify-center w-full h-full bg-gradient-to-br from-amber-400 to-amber-600">${appointment.barber.name.charAt(0).toUpperCase()}</span>`;
                                  }
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                <span className="text-white font-semibold">
                                  {appointment.barber.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-semibold text-gray-900">{appointment.barber.name}</div>
                            {appointment.barber.specialty && (
                              <div className="text-xs text-gray-500">{appointment.barber.specialty}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-gray-900">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>{new Date(appointment.date).toLocaleDateString('es-VE')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{appointment.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(
                            appointment.status
                          )}`}
                        >
                          {getStatusLabel(appointment.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-gray-900">
                          <CreditCard className="w-4 h-4 text-gray-400" />
                          <span>{appointment.paymentMethod || '-'}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleView(appointment)}
                            className="p-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-lg transition"
                            title="Ver detalles"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(appointment)}
                            className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition"
                            title="Editar"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(appointment.id)}
                            className="p-2 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-lg transition"
                            title="Eliminar"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
                <div className="text-sm font-medium text-gray-700">
                  Página <span className="font-bold text-indigo-600">{currentPage}</span> de <span className="font-bold text-indigo-600">{totalPages}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 font-medium transition"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 font-medium transition"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Create/Edit/View Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                {isEditMode ? 'Editar Cita' : selectedAppointment ? 'Detalles de la Cita' : 'Nueva Cita'}
              </h2>
            </div>

            {selectedAppointment && !isEditMode ? (
              // View mode
              <div className="p-6 space-y-4">
                {/* ID Section */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ID de Cita</label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm font-mono text-gray-800">
                      {selectedAppointment.id}
                    </code>
                    <button
                      onClick={() => copyToClipboard(selectedAppointment.id, selectedAppointment.id)}
                      className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                      title="Copiar ID"
                    >
                      {copiedId === selectedAppointment.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {copiedId === selectedAppointment.id && (
                    <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      ID copiado al portapapeles
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Cliente</label>
                    <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-indigo-300">
                        {getAvatarUrl(selectedAppointment.client.avatar, selectedAppointment.client.avatarSeed) ? (
                          <img
                            src={getAvatarUrl(selectedAppointment.client.avatar, selectedAppointment.client.avatarSeed)!}
                            alt={selectedAppointment.client.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {selectedAppointment.client.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{selectedAppointment.client.name}</p>
                        <p className="text-xs text-gray-500">{selectedAppointment.client.email}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Barbero</label>
                    <div className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-amber-300">
                        {getAvatarUrl(selectedAppointment.barber.image, selectedAppointment.barber.avatarSeed) ? (
                          <img
                            src={getAvatarUrl(selectedAppointment.barber.image, selectedAppointment.barber.avatarSeed)!}
                            alt={selectedAppointment.barber.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                            <span className="text-white font-semibold">
                              {selectedAppointment.barber.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{selectedAppointment.barber.name}</p>
                        {selectedAppointment.barber.specialty && (
                          <p className="text-xs text-gray-500">{selectedAppointment.barber.specialty}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                      {new Date(selectedAppointment.date).toLocaleDateString('es-VE', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Hora</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedAppointment.time}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Estado</label>
                    <span
                      className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${getStatusBadgeColor(
                        selectedAppointment.status
                      )}`}
                    >
                      {getStatusLabel(selectedAppointment.status)}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Método de Pago</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                      {selectedAppointment.paymentMethod || '-'}
                    </p>
                  </div>
                  {selectedAppointment.service && (
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Servicio</label>
                      <div className="bg-gray-50 px-3 py-2 rounded-lg">
                        <p className="text-sm font-medium text-gray-900">{selectedAppointment.service.name}</p>
                        <p className="text-xs text-gray-500">${selectedAppointment.service.price.toFixed(2)}</p>
                      </div>
                    </div>
                  )}
                  {selectedAppointment.notes && (
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Notas</label>
                      <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedAppointment.notes}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedAppointment(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => {
                      setIsEditMode(true);
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Editar
                  </button>
                </div>
              </div>
            ) : (
              // Create/Edit form
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cliente *</label>
                    <select
                      {...register('userId')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      disabled={isEditMode}
                    >
                      <option value="">Selecciona un cliente</option>
                      {users.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.name} ({user.email})
                        </option>
                      ))}
                    </select>
                    {errors.userId && (
                      <p className="mt-1 text-sm text-red-600">{errors.userId.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Barbero *</label>
                    <select
                      {...register('barberId')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      disabled={isEditMode}
                    >
                      <option value="">Selecciona un barbero</option>
                      {barbers.map((barber) => (
                        <option key={barber.id} value={barber.id}>
                          {barber.name} {barber.specialty ? `- ${barber.specialty}` : ''}
                        </option>
                      ))}
                    </select>
                    {errors.barberId && (
                      <p className="mt-1 text-sm text-red-600">{errors.barberId.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fecha *</label>
                    <input
                      {...register('date')}
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hora *</label>
                    <input
                      {...register('time')}
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                    {errors.time && (
                      <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Método de Pago *</label>
                    <input
                      {...register('paymentMethod')}
                      type="text"
                      placeholder="Efectivo, Tarjeta, etc."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                    {errors.paymentMethod && (
                      <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
                    )}
                  </div>

                  {isEditMode && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                      <select
                        {...register('status')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                      >
                        <option value="PENDING">Pendiente</option>
                        <option value="CONFIRMED">Confirmada</option>
                        <option value="COMPLETED">Completada</option>
                        <option value="CANCELLED">Cancelada</option>
                      </select>
                    </div>
                  )}

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notas</label>
                    <textarea
                      {...register('notes')}
                      rows={3}
                      placeholder="Notas adicionales sobre la cita..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      reset();
                      setSelectedAppointment(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    {isEditMode ? 'Actualizar' : 'Crear'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full m-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Confirmar Eliminación</h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de que deseas eliminar esta cita? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
