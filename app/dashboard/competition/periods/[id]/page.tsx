'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Trophy,
  ArrowLeft,
  RefreshCw,
  Lock,
  Medal,
  Calendar,
  AlertCircle,
  Trash2,
} from 'lucide-react';
import {
  competitionService,
  CompetitionPeriod,
  LeaderboardEntry,
  CompetitionPeriodStatus,
} from '@/lib/competition';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const statusLabels: Record<CompetitionPeriodStatus, string> = {
  DRAFT: 'Borrador',
  ACTIVE: 'Activo',
  CLOSED: 'Cerrado',
};

export default function PeriodDetailPage() {
  const params = useParams();
  const router = useRouter();
  const periodId = params.id as string;
  const [period, setPeriod] = useState<CompetitionPeriod | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRecomputing, setIsRecomputing] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    if (!periodId) return;
    setIsLoading(true);
    setError(null);
    try {
      const [periodData, lbData] = await Promise.all([
        competitionService.getPeriodById(periodId),
        competitionService.getLeaderboard(periodId, 100, 0),
      ]);
      setPeriod(periodData ?? null);
      setLeaderboard(lbData.entries);
      setTotal(lbData.total);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar datos');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [periodId]);

  const handleRecompute = async () => {
    if (!confirm('¿Recalcular puntuaciones de este periodo? Se usarán solo citas completadas con clientes de teléfono verificado.')) return;
    setIsRecomputing(true);
    setError(null);
    try {
      const updated = await competitionService.recomputePeriod(periodId);
      setPeriod(updated);
      const lbData = await competitionService.getLeaderboard(periodId, 100, 0);
      setLeaderboard(lbData.entries);
      setTotal(lbData.total);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al recalcular');
    } finally {
      setIsRecomputing(false);
    }
  };

  const handleClose = async () => {
    if (!confirm('¿Cerrar este periodo? Se asignará como ganador al barbero con más puntos y el periodo quedará cerrado.')) return;
    setIsClosing(true);
    setError(null);
    try {
      const updated = await competitionService.closePeriod(periodId);
      setPeriod(updated);
      const lbData = await competitionService.getLeaderboard(periodId, 100, 0);
      setLeaderboard(lbData.entries);
      setTotal(lbData.total);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cerrar periodo');
    } finally {
      setIsClosing(false);
    }
  };

  const handleDelete = async () => {
    if (!period || period.status !== 'DRAFT') return;
    if (!confirm('¿Eliminar este periodo? Esta acción no se puede deshacer.')) return;
    setIsDeleting(true);
    setError(null);
    try {
      await competitionService.deletePeriod(periodId);
      router.push('/dashboard/competition');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar');
    } finally {
      setIsDeleting(false);
    }
  };

  if (!periodId) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">ID de periodo no válido</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-amber-50/30 min-h-screen">
      {/* Breadcrumb / Back */}
      <Link
        href="/dashboard/competition"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a Competencia
      </Link>

      {/* Header del periodo */}
      <div className="mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-100 rounded-xl">
              <Trophy className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {period?.name || `Periodo ${periodId.slice(-6)}`}
              </h1>
              {period && (
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {format(new Date(period.startDate), "d 'de' MMMM", { locale: es })} – {format(new Date(period.endDate), "d 'de' MMMM yyyy", { locale: es })}
                  </span>
                  <span
                    className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${
                      period.status === 'ACTIVE'
                        ? 'bg-emerald-100 text-emerald-800'
                        : period.status === 'CLOSED'
                        ? 'bg-sky-100 text-sky-800'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {statusLabels[period.status]}
                  </span>
                  {period.prize && (
                    <span className="font-medium text-amber-700">
                      Premio: {period.prize}
                    </span>
                  )}
                  {period.winnerName && (
                    <span className="font-medium text-amber-700">
                      Ganador: {period.winnerName}
                    </span>
                  )}
                  {period.status === 'CLOSED' && period.closedAt && (
                    <span className="text-gray-500">
                      Cerrado el {format(new Date(period.closedAt), "d 'de' MMMM yyyy", { locale: es })}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Acciones (recalcular / cerrar) */}
      {period && period.status !== 'CLOSED' && (
        <div className="mb-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleRecompute}
            disabled={isRecomputing}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 disabled:opacity-50 transition shadow-sm"
          >
            <RefreshCw className={`w-4 h-4 ${isRecomputing ? 'animate-spin' : ''}`} />
            {isRecomputing ? 'Recalculando...' : 'Recalcular puntuaciones'}
          </button>
          {period.status === 'ACTIVE' && (
            <button
              type="button"
              onClick={handleClose}
              disabled={isClosing}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium shadow-lg hover:from-amber-600 hover:to-amber-700 disabled:opacity-50 transition"
            >
              <Lock className="w-4 h-4" />
              {isClosing ? 'Cerrando...' : 'Cerrar periodo'}
            </button>
          )}
          {period.status === 'DRAFT' && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-red-200 text-red-600 rounded-xl font-medium hover:bg-red-50 disabled:opacity-50 transition shadow-sm"
            >
              <Trash2 className="w-4 h-4" />
              {isDeleting ? 'Eliminando...' : 'Eliminar periodo'}
            </button>
          )}
        </div>
      )}

      {/* Card ranking */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50">
          <h2 className="text-lg font-semibold text-gray-900">Ranking del periodo</h2>
          <p className="text-sm text-gray-500 mt-1">
            {period?.status === 'CLOSED'
              ? 'Clasificación guardada al cierre del periodo. Las puntuaciones no cambian.'
              : 'Solo cuentan citas completadas con clientes de teléfono verificado. Una cita cuenta solo para un barbero y en este periodo.'}
          </p>
        </div>
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="inline-block w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-gray-500">Cargando...</p>
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-600 mb-4">
              <Medal className="w-8 h-8" />
            </div>
            <p className="text-gray-600 font-medium">Aún no hay puntuaciones</p>
            <p className="text-gray-500 text-sm mt-1">Recalcula o espera a que se registren citas válidas</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">#</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Barbero</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Puntos</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leaderboard.map((entry) => (
                  <tr
                    key={entry.barberId}
                    className={
                      entry.position <= 3
                        ? 'bg-amber-50/50 hover:bg-amber-50 transition'
                        : 'hover:bg-gray-50/80 transition'
                    }
                  >
                    <td className="px-6 py-4">
                      {entry.position <= 3 ? (
                        <span className="inline-flex items-center gap-2">
                          <Medal
                            className={`w-5 h-5 ${
                              entry.position === 1
                                ? 'text-amber-500'
                                : entry.position === 2
                                ? 'text-gray-400'
                                : 'text-amber-700'
                            }`}
                          />
                          <span className="font-semibold text-gray-900">{entry.position}</span>
                        </span>
                      ) : (
                        <span className="text-gray-500 font-medium">{entry.position}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {entry.barberImage ? (
                          <img
                            src={entry.barberImage}
                            alt=""
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                            {entry.barberName.charAt(0)}
                          </div>
                        )}
                        <span className="font-medium text-gray-900">{entry.barberName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-semibold text-gray-900">{entry.points}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {total > leaderboard.length && (
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-500 text-center">
            Mostrando los primeros {leaderboard.length} de {total} barberos
          </div>
        )}
      </div>
    </div>
  );
}
