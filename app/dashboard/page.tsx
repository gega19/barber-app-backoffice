'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth';
import api from '@/lib/api';
import { 
  Users, 
  Calendar, 
  Scissors, 
  Star,
  DollarSign,
  BarChart3,
  PieChart
} from 'lucide-react';
import dynamic from 'next/dynamic';

// Importar gráficas dinámicamente para evitar problemas de SSR
const ChartComponent = dynamic(() => import('@/components/ChartComponent'), { ssr: false });

interface DashboardStats {
  totalUsers: number;
  totalAppointments: number;
  totalBarbers: number;
  totalRevenue: number;
  pendingAppointments: number;
  averageRating: number;
}

interface AppointmentByMonth {
  month: string;
  count: number;
}

interface RevenueByMonth {
  month: string;
  revenue: number;
}

interface AppointmentByStatus {
  status: string;
  count: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [appointmentsByMonth, setAppointmentsByMonth] = useState<AppointmentByMonth[]>([]);
  const [revenueByMonth, setRevenueByMonth] = useState<RevenueByMonth[]>([]);
  const [appointmentsByStatus, setAppointmentsByStatus] = useState<AppointmentByStatus[]>([]);
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

    // Cargar todas las estadísticas
    loadAllStats();
  }, [router]);

  const loadAllStats = async () => {
    setIsLoading(true);
    try {
      // Cargar estadísticas principales
      const statsResponse = await api.get<{ success: boolean; data: DashboardStats }>('/stats/dashboard');
      if (statsResponse.data.success && statsResponse.data.data) {
        setStats(statsResponse.data.data);
      }

      // Cargar citas por mes
      const appointmentsResponse = await api.get<{ success: boolean; data: AppointmentByMonth[] }>('/stats/appointments-by-month');
      if (appointmentsResponse.data.success && appointmentsResponse.data.data) {
        setAppointmentsByMonth(appointmentsResponse.data.data);
      }

      // Cargar ingresos por mes
      const revenueResponse = await api.get<{ success: boolean; data: RevenueByMonth[] }>('/stats/revenue-by-month');
      if (revenueResponse.data.success && revenueResponse.data.data) {
        setRevenueByMonth(revenueResponse.data.data);
      }

      // Cargar citas por estado
      const statusResponse = await api.get<{ success: boolean; data: AppointmentByStatus[] }>('/stats/appointments-by-status');
      if (statusResponse.data.success && statusResponse.data.data) {
        setAppointmentsByStatus(statusResponse.data.data);
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
      value: stats?.totalUsers ?? 0,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Citas Totales',
      value: stats?.totalAppointments ?? 0,
      icon: Calendar,
      color: 'bg-green-500',
    },
    {
      title: 'Barberos',
      value: stats?.totalBarbers ?? 0,
      icon: Scissors,
      color: 'bg-purple-500',
    },
    {
      title: 'Ingresos',
      value: `$${(stats?.totalRevenue ?? 0).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      icon: DollarSign,
      color: 'bg-yellow-500',
    },
    {
      title: 'Citas Pendientes',
      value: stats?.pendingAppointments ?? 0,
      icon: Calendar,
      color: 'bg-orange-500',
    },
    {
      title: 'Calificación Promedio',
      value: (stats?.averageRating ?? 0).toFixed(1),
      icon: Star,
      color: 'bg-pink-500',
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="bartop" 
            className="w-10 h-10 rounded-lg object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick Actions - PRIMERO */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => router.push('/dashboard/barbershops')}
              className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left"
            >
              <p className="font-medium text-gray-900">Ver Barberías</p>
              <p className="text-sm text-gray-600 mt-1">Gestionar barberías</p>
            </button>
            <button 
              onClick={() => router.push('/dashboard/appointments')}
              className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left"
            >
              <p className="font-medium text-gray-900">Ver Citas</p>
              <p className="text-sm text-gray-600 mt-1">Gestionar citas</p>
            </button>
            <button 
              onClick={() => router.push('/dashboard/users')}
              className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left"
            >
              <p className="font-medium text-gray-900">Ver Usuarios</p>
              <p className="text-sm text-gray-600 mt-1">Gestionar usuarios</p>
            </button>
            <button 
              onClick={() => router.push('/dashboard/promotions')}
              className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-left"
            >
              <p className="font-medium text-gray-900">Promociones</p>
              <p className="text-sm text-gray-600 mt-1">Gestionar promociones</p>
            </button>
          </div>
        </div>

        {/* Stats Grid - SEGUNDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts - TERCERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gráfica de Citas por Mes */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-900">Citas por Mes</h2>
            </div>
            <ChartComponent
              type="line"
              data={appointmentsByMonth as Array<Record<string, any>>}
              dataKey="count"
              xAxisKey="month"
              color="#6366f1"
            />
          </div>

          {/* Gráfica de Ingresos por Mes */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-900">Ingresos por Mes</h2>
            </div>
            <ChartComponent
              type="bar"
              data={revenueByMonth as Array<Record<string, any>>}
              dataKey="revenue"
              xAxisKey="month"
              color="#10b981"
            />
          </div>

          {/* Gráfica de Citas por Estado */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Distribución de Citas por Estado</h2>
            </div>
            <ChartComponent
              type="pie"
              data={appointmentsByStatus as Array<Record<string, any>>}
              dataKey="count"
              nameKey="status"
              color="#8b5cf6"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
