'use client';

import { useState, useEffect, useCallback } from 'react';
import { Users, Scissors, Search, Edit, Eye, Filter, X, Star, Calendar } from 'lucide-react';
import { workplacesService, Workplace } from '@/lib/workplaces';
import { authService } from '@/lib/auth';
import { usersService } from '@/lib/users';
import api from '@/lib/api';

export default function MyBarbersPage() {
    const [barbers, setBarbers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);

    const fetchBarbers = useCallback(async () => {
        setIsLoading(true);
        try {
            // In a real scenario, we'd use the dedicated endpoint I created earlier
            // GET /api/my-workplace/barbers
            const response = await api.get<{ success: boolean; data: any[] }>('/my-workplace/barbers');
            setBarbers(response.data.data);
        } catch (err: any) {
            setError('Error al cargar la lista de barberos.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBarbers();
    }, [fetchBarbers]);

    const filteredBarbers = barbers.filter(barber =>
        barber.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        barber.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading && barbers.length === 0) {
        return <div className="p-8 text-center text-gray-500">Cargando barberos...</div>;
    }

    return (
        <div className="p-8">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <Users className="w-8 h-8 text-indigo-600" />
                        Mis Barberos
                    </h1>
                    <p className="text-gray-600 font-medium">Gestión del equipo de trabajo</p>
                </div>
            </div>

            {error && (
                <div className="mb-6 bg-red-50 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <X className="w-5 h-5" />
                    {error}
                </div>
            )}

            {/* Search and Filters */}
            <div className="mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Buscar por nombre o email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                </div>
            </div>

            {/* Barbers List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBarbers.length === 0 ? (
                    <div className="col-span-full py-12 bg-white rounded-xl border border-dashed border-gray-300 text-center text-gray-500">
                        No se encontraron barberos en tu equipo.
                    </div>
                ) : (
                    filteredBarbers.map((barber) => (
                        <div key={barber.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden border-2 border-indigo-50">
                                        {barber.avatar ? (
                                            <img src={barber.avatar} alt={barber.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <Scissors className="w-8 h-8 text-indigo-600" />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 leading-tight">{barber.name}</h3>
                                        <p className="text-sm text-gray-500">{barber.email}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500 flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            Rating
                                        </span>
                                        <span className="font-bold text-gray-900">{barber.rating?.toFixed(1) || 'N/A'}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500 flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            Citas hoy
                                        </span>
                                        <span className="font-bold text-gray-900">0</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-100 flex gap-2">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 py-2.5 rounded-lg font-medium hover:bg-indigo-100 transition">
                                        <Eye className="w-4 h-4" />
                                        Perfil
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition">
                                        <Edit className="w-4 h-4" />
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
