'use client';

import { useState, useEffect, useCallback } from 'react';
import { BarChart3, TrendingUp, Users, Calendar, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import api from '@/lib/api';
import dynamic from 'next/dynamic';

// Dynamic import for Chart component to avoid SSR issues
const ChartComponent = dynamic(() => import('@/components/ChartComponent'), {
    ssr: false,
    loading: () => <div className="h-64 bg-gray-50 animate-pulse rounded-xl" />,
});

export default function MyStatsPage() {
    const [stats, setStats] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchStats = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await api.get<{ success: boolean; data: any }>('/my-workplace/stats');
            setStats(response.data.data);
        } catch (err: any) {
            setError('Error al cargar las estadísticas.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchStats();
    }, [fetchStats]);

    if (isLoading && !stats) {
        return <div className="p-8 text-center text-gray-500">Cargando estadísticas...</div>;
    }

    const statCards = [
        {
            title: 'Ingresos Totales',
            value: `$${stats?.totalRevenue || 0}`,
            trend: '+12.5%',
            trendUp: true,
            icon: DollarSign,
            color: 'bg-green-100 text-green-600',
        },
        {
            title: 'Citas Totales',
            value: stats?.totalAppointments || 0,
            trend: '+5.2%',
            trendUp: true,
            icon: Calendar,
            color: 'bg-blue-100 text-blue-600',
        },
        {
            title: 'Citas Completadas',
            value: stats?.completedAppointments || 0,
            trend: '+8.1%',
            trendUp: true,
            icon: CheckCircle,
            color: 'bg-indigo-100 text-indigo-600',
        },
        {
            title: 'Clientes Nuevos',
            value: '0',
            trend: '-2.4%',
            trendUp: false,
            icon: Users,
            color: 'bg-purple-100 text-purple-600',
        },
    ];

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-indigo-600" />
                    Estadísticas
                </h1>
                <p className="text-gray-600 font-medium">Análisis de rendimiento de tu barbería</p>
            </div>

            {error && (
                <div className="mb-6 bg-red-50 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <span>{error}</span>
                </div>
            )}

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className={`flex items-center gap-1 text-sm font-bold ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                                {stat.trendUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                {stat.trend}
                            </div>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-indigo-600" />
                        Ingresos Mensuales
                    </h3>
                    <ChartComponent
                        type="bar"
                        data={[
                            { month: 'Ene', value: 0 },
                            { month: 'Feb', value: 0 },
                            { month: 'Mar', value: 0 },
                            { month: 'Abr', value: 0 },
                            { month: 'May', value: 0 },
                            { month: 'Jun', value: stats?.totalRevenue || 0 },
                        ]}
                        dataKey="value"
                        xAxisKey="month"
                        color="#4f46e5"
                    />
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-indigo-600" />
                        Citas por Estado
                    </h3>
                    <ChartComponent
                        type="pie"
                        data={[
                            { status: 'COMPLETED', count: stats?.completedAppointments || 0 },
                            { status: 'PENDING', count: (stats?.totalAppointments || 0) - (stats?.completedAppointments || 0) },
                            { status: 'CANCELLED', count: 0 },
                        ]}
                        dataKey="count"
                        nameKey="status"
                        color="#8b5cf6"
                    />
                </div>
            </div>
        </div>
    );
}

// Helper icons for stats
function CheckCircle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}
