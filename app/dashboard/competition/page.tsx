'use client';

import { useState, useEffect } from 'react';
import { Trophy, Plus, Eye, Calendar, X, Trash2, HelpCircle, Save } from 'lucide-react';
import { competitionService, CompetitionPeriod, CompetitionPeriodStatus } from '@/lib/competition';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';

const statusLabels: Record<CompetitionPeriodStatus, string> = {
  DRAFT: 'Borrador',
  ACTIVE: 'Activo',
  CLOSED: 'Cerrado',
};

const statusColors: Record<CompetitionPeriodStatus, string> = {
  DRAFT: 'bg-gray-100 text-gray-700',
  ACTIVE: 'bg-emerald-100 text-emerald-800',
  CLOSED: 'bg-sky-100 text-sky-800',
};

export default function CompetitionPage() {
  const [periods, setPeriods] = useState<CompetitionPeriod[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [createName, setCreateName] = useState('');
  const [createStartDate, setCreateStartDate] = useState('');
  const [createEndDate, setCreateEndDate] = useState('');
  const [createStatus, setCreateStatus] = useState<CompetitionPeriodStatus>('DRAFT');
  const [createPrize, setCreatePrize] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [helpRules, setHelpRules] = useState<string[]>([]);
  const [helpRulesLoading, setHelpRulesLoading] = useState(false);
  const [helpRulesSaving, setHelpRulesSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadPeriods = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await competitionService.getPeriods();
      setPeriods(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar periodos');
    } finally {
      setIsLoading(false);
    }
  };

  const loadHelpRules = async () => {
    setHelpRulesLoading(true);
    try {
      const rules = await competitionService.getHelpRules();
      setHelpRules(rules.length ? rules : ['']);
    } catch {
      setHelpRules(['']);
    } finally {
      setHelpRulesLoading(false);
    }
  };

  useEffect(() => {
    loadPeriods();
    loadHelpRules();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!createStartDate || !createEndDate) return;
    setIsSubmitting(true);
    try {
      await competitionService.createPeriod({
        name: createName || undefined,
        startDate: createStartDate,
        endDate: createEndDate,
        status: createStatus,
        prize: createPrize.trim() || undefined,
      });
      setIsCreateOpen(false);
      setCreateName('');
      setCreateStartDate('');
      setCreateEndDate('');
      setCreateStatus('DRAFT');
      setCreatePrize('');
      loadPeriods();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al crear periodo');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveHelpRules = async () => {
    const toSave = helpRules.map((r) => r.trim()).filter(Boolean);
    if (toSave.length === 0) return;
    setHelpRulesSaving(true);
    setError(null);
    try {
      await competitionService.updateHelpRules(toSave);
      setHelpRules(toSave);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar textos de ayuda');
    } finally {
      setHelpRulesSaving(false);
    }
  };

  const handleDeletePeriod = async (p: CompetitionPeriod) => {
    if (p.status !== 'DRAFT') return;
    if (!confirm(`¿Eliminar el periodo "${p.name || p.id}"? Esta acción no se puede deshacer.`)) return;
    setDeletingId(p.id);
    setError(null);
    try {
      await competitionService.deletePeriod(p.id);
      loadPeriods();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-amber-50/30 min-h-screen">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-amber-100 rounded-xl">
              <Trophy className="w-8 h-8 text-amber-600" />
            </div>
            Competencia
          </h1>
          <p className="text-gray-600 text-lg">Gestiona los periodos de competencia y ganadores</p>
        </div>
        <button
          type="button"
          onClick={() => setIsCreateOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Crear periodo
        </button>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-sm flex items-center gap-2">
          <X className="w-5 h-5 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Modal crear periodo */}
      {isCreateOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">Nuevo periodo</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre (opcional)</label>
                <input
                  type="text"
                  value={createName}
                  onChange={(e) => setCreateName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  placeholder="Ej. Marzo 2025"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Fecha inicio *</label>
                <input
                  type="date"
                  value={createStartDate}
                  onChange={(e) => setCreateStartDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Fecha fin *</label>
                <input
                  type="date"
                  value={createEndDate}
                  onChange={(e) => setCreateEndDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Estado inicial</label>
                <select
                  value={createStatus}
                  onChange={(e) => setCreateStatus(e.target.value as CompetitionPeriodStatus)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-white"
                >
                  <option value="DRAFT">Borrador</option>
                  <option value="ACTIVE">Activo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Premio (opcional)</label>
                <input
                  type="text"
                  value={createPrize}
                  onChange={(e) => setCreatePrize(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  placeholder="Ej. Premio en metálico, productos, experiencia, formación..."
                />
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2.5 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 disabled:opacity-50 transition"
                >
                  {isSubmitting ? 'Creando...' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Tabla de periodos */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="inline-block w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-gray-500">Cargando periodos...</p>
          </div>
        ) : periods.length === 0 ? (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-600 mb-4">
              <Trophy className="w-8 h-8" />
            </div>
            <p className="text-gray-600 font-medium">No hay periodos</p>
            <p className="text-gray-500 text-sm mt-1">Crea uno para empezar la competencia</p>
            <button
              type="button"
              onClick={() => setIsCreateOpen(true)}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition"
            >
              <Plus className="w-4 h-4" />
              Crear periodo
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Fechas</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Premio</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ganador</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {periods.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50/80 transition">
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">
                        {p.name || `Periodo ${p.id.slice(-6)}`}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {format(new Date(p.startDate), 'd MMM y', { locale: es })} – {format(new Date(p.endDate), 'd MMM y', { locale: es })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-0.5">
                        <span className={`inline-flex w-fit px-2.5 py-1 text-xs font-semibold rounded-full ${statusColors[p.status]}`}>
                          {statusLabels[p.status]}
                        </span>
                        {p.status === 'CLOSED' && p.closedAt && (
                          <span className="text-xs text-gray-500">
                            Cerrado el {format(new Date(p.closedAt), 'd MMM y', { locale: es })}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {p.prize ? (
                        <span className="text-amber-700 font-medium">{p.prize}</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {p.winnerName ? (
                        <span className="font-medium text-amber-700">{p.winnerName}</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/dashboard/competition/periods/${p.id}`}
                          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition"
                        >
                          <Eye className="w-4 h-4" />
                          Ver puntuaciones
                        </Link>
                        {p.status === 'DRAFT' && (
                          <button
                            type="button"
                            onClick={() => handleDeletePeriod(p)}
                            disabled={deletingId === p.id}
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
                            title="Eliminar borrador"
                          >
                            <Trash2 className="w-4 h-4" />
                            Eliminar
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-white/80 rounded-xl border border-gray-200 text-sm text-gray-600 shadow-sm">
        <strong className="text-gray-800">Historial de ganadores:</strong> Los periodos cerrados muestran su ganador en la tabla. Entra en &quot;Ver puntuaciones&quot; para ver el ranking completo y cerrar un periodo activo.
      </div>

      {/* Textos de ayuda (reglas en la app) */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          <h2 className="text-lg font-semibold text-gray-900">Textos de ayuda (app)</h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-4">
            Estas reglas se muestran en la app al pulsar el botón de ayuda en la pantalla de ranking. El orden es el de la lista.
          </p>
          {helpRulesLoading ? (
            <div className="py-4 text-center text-gray-500">Cargando...</div>
          ) : (
            <>
              <div className="space-y-3">
                {helpRules.map((rule, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      type="text"
                      value={rule}
                      onChange={(e) => {
                        const next = [...helpRules];
                        next[i] = e.target.value;
                        setHelpRules(next);
                      }}
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                      placeholder="Texto de la regla"
                    />
                    <button
                      type="button"
                      onClick={() => setHelpRules(helpRules.filter((_, j) => j !== i))}
                      className="p-2 text-gray-400 hover:text-red-600 rounded-lg transition"
                      title="Quitar"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setHelpRules([...helpRules, ''])}
                  className="text-sm font-medium text-amber-600 hover:text-amber-700"
                >
                  + Añadir regla
                </button>
                <button
                  type="button"
                  onClick={handleSaveHelpRules}
                  disabled={helpRulesSaving || helpRules.every((r) => !r.trim())}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 disabled:opacity-50 transition"
                >
                  <Save className="w-4 h-4" />
                  {helpRulesSaving ? 'Guardando...' : 'Guardar textos'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
