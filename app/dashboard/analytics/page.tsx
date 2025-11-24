'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth';
import { analyticsApi, AnalyticsStats, AnalyticsEvent } from '@/lib/analytics';
import { 
  BarChart3, 
  TrendingUp, 
  Activity,
  Smartphone,
  Globe,
  Server,
  Calendar,
  Filter
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Importar gráficas dinámicamente para evitar problemas de SSR
const ChartComponent = dynamic(() => import('@/components/ChartComponent'), { ssr: false });

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export default function AnalyticsPage() {
  const router = useRouter();
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [recentEvents, setRecentEvents] = useState<AnalyticsEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dateRange, setDateRange] = useState<'today' | 'week' | 'month' | 'all'>('week');
  const [platformFilter, setPlatformFilter] = useState<string>('all');

  useEffect(() => {
    // Verificar autenticación
    if (!authService.isAuthenticated()) {
      router.push('/login');
      return;
    }

    // Verificar permisos
    const userRole = authService.getCurrentRole();
    if (!userRole || !authService.canAccessBackoffice(userRole)) {
      authService.logout();
      router.push('/login');
      return;
    }

    loadAnalytics();
  }, [router, dateRange, platformFilter]);

  const loadAnalytics = async () => {
    setIsLoading(true);
    try {
      // Calcular fechas según el rango seleccionado
      const now = new Date();
      let startDate: Date | undefined;
      
      switch (dateRange) {
        case 'today':
          startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          break;
        case 'week':
          startDate = new Date(now);
          startDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          startDate = new Date(now);
          startDate.setMonth(now.getMonth() - 1);
          break;
        case 'all':
          startDate = undefined;
          break;
      }

      // Cargar estadísticas
      const statsParams: any = {};
      if (startDate) {
        statsParams.startDate = startDate.toISOString();
      }
      if (platformFilter !== 'all') {
        statsParams.platform = platformFilter;
      }

      const statsData = await analyticsApi.getStats(statsParams);
      setStats(statsData);

      // Cargar eventos recientes
      const eventsParams: any = {
        limit: 50,
        offset: 0,
      };
      if (startDate) {
        eventsParams.startDate = startDate.toISOString();
      }
      if (platformFilter !== 'all') {
        eventsParams.platform = platformFilter;
      }

      const eventsData = await analyticsApi.getEvents(eventsParams);
      setRecentEvents(eventsData.events);
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Eventos',
      value: stats?.totalEvents || 0,
      icon: Activity,
      color: 'bg-blue-500',
    },
    {
      title: 'Eventos App',
      value: stats?.eventsByPlatform.find(p => p.platform === 'app')?.count || 0,
      icon: Smartphone,
      color: 'bg-purple-500',
    },
    {
      title: 'Eventos Landing',
      value: stats?.eventsByPlatform.find(p => p.platform === 'landing')?.count || 0,
      icon: Globe,
      color: 'bg-green-500',
    },
    {
      title: 'Eventos Backend',
      value: stats?.eventsByPlatform.find(p => p.platform === 'backend')?.count || 0,
      icon: Server,
      color: 'bg-orange-500',
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Métricas y eventos de la aplicación</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filtros:</span>
        </div>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value as any)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="today">Hoy</option>
          <option value="week">Últimos 7 días</option>
          <option value="month">Último mes</option>
          <option value="all">Todo el tiempo</option>
        </select>
        <select
          value={platformFilter}
          onChange={(e) => setPlatformFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">Todas las plataformas</option>
          <option value="app">App</option>
          <option value="landing">Landing</option>
          <option value="backend">Backend</option>
        </select>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{card.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {card.value.toLocaleString()}
                  </p>
                </div>
                <div className={`${card.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Eventos por Tipo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Eventos por Tipo</h2>
          {stats && stats.eventsByType.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.eventsByType}
                  dataKey="count"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={(props: any) => {
                    const { eventType, count } = props;
                    return `${eventType}: ${count}`;
                  }}
                >
                  {stats.eventsByType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-300 text-gray-500">
              No hay datos disponibles
            </div>
          )}
        </div>

        {/* Eventos por Plataforma */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Eventos por Plataforma</h2>
          {stats && stats.eventsByPlatform.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stats.eventsByPlatform}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-300 text-gray-500">
              No hay datos disponibles
            </div>
          )}
        </div>
      </div>

      {/* Top Eventos */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Eventos</h2>
        {stats && stats.topEvents.length > 0 ? (
          <div className="space-y-3">
            {stats.topEvents.map((event, index) => (
              <div key={event.eventName} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${COLORS[index % COLORS.length]}`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{event.eventName}</p>
                    <p className="text-sm text-gray-500">{event.count.toLocaleString()} eventos</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{
                        width: `${(event.count / (stats.topEvents[0]?.count || 1)) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No hay eventos disponibles
          </div>
        )}
      </div>

      {/* Eventos Recientes */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Eventos Recientes</h2>
        {recentEvents.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Evento
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plataforma
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{event.eventName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {event.eventType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                        {event.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(event.createdAt).toLocaleString('es-ES')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No hay eventos recientes
          </div>
        )}
      </div>
    </div>
  );
}

