'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth';
import api from '@/lib/api';
import Cookies from 'js-cookie';
import { 
  Users, 
  Calendar, 
  Scissors, 
  Star,
  TrendingUp,
  DollarSign
} from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  totalAppointments: number;
  totalBarbers: number;
  totalRevenue: number;
  pendingAppointments: number;
  averageRating: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar autenticación
    if (!authService.isAuthenticated()) {
      router.push('/login');
      return;
    }

    // Verificar permisos de acceso al backoffice
    const userRole = authService.getCurrentRole();
    
    // Si no hay role o no tiene acceso, redirigir al login
    if (!userRole || !authService.canAccessBackoffice(userRole)) {
      authService.logout();
      router.push('/login');
      return;
    }

    // Cargar estadísticas
    loadStats();
  }, [router]);

  const loadStats = async () => {
    try {
      const response = await api.get<{ success: boolean; data: DashboardStats }>('/stats/dashboard');
      
      if (response.data.success && response.data.data) {
        setStats(response.data.data);
      } else {
        throw new Error('Failed to load stats');
      }
    } catch (error) {
      console.error('Error loading stats:', error);
      // En caso de error, mantener valores por defecto
      setStats({
        totalUsers: 0,
        totalAppointments: 0,
        totalBarbers: 0,
        totalRevenue: 0,
        pendingAppointments: 0,
        averageRating: 0,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Usuarios',
      value: stats?.totalUsers || 0,
      icon: Users,
      color: 'bg-blue-500',
      change: '+12%',
    },
    {
      title: 'Citas Totales',
      value: stats?.totalAppointments || 0,
      icon: Calendar,
      color: 'bg-green-500',
      change: '+8%',
    },
    {
      title: 'Barberos',
      value: stats?.totalBarbers || 0,
      icon: Scissors,
      color: 'bg-purple-500',
      change: '+3',
    },
    {
      title: 'Ingresos',
      value: `$${(stats?.totalRevenue || 0).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: DollarSign,
      color: 'bg-yellow-500',
      change: '+15%',
    },
    {
      title: 'Citas Pendientes',
      value: stats?.pendingAppointments || 0,
      icon: Calendar,
      color: 'bg-orange-500',
      change: 'Urgente',
    },
    {
      title: 'Calificación Promedio',
      value: stats?.averageRating.toFixed(1) || '0.0',
      icon: Star,
      color: 'bg-pink-500',
      change: '+0.2',
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left">
              <p className="font-medium text-gray-900">Ver Barberos</p>
              <p className="text-sm text-gray-600 mt-1">Gestionar barberos</p>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left">
              <p className="font-medium text-gray-900">Ver Citas</p>
              <p className="text-sm text-gray-600 mt-1">Gestionar citas</p>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left">
              <p className="font-medium text-gray-900">Ver Usuarios</p>
              <p className="text-sm text-gray-600 mt-1">Gestionar usuarios</p>
            </button>
            <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left">
              <p className="font-medium text-gray-900">Promociones</p>
              <p className="text-sm text-gray-600 mt-1">Gestionar promociones</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

