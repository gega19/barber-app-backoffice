'use client';

import { useState, useEffect } from 'react';
import { Settings as SettingsIcon, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { barbersService } from '@/lib/barbers';
import { authService } from '@/lib/auth';

export default function SettingsPage() {
  const [isRecomputing, setIsRecomputing] = useState(false);
  const [recomputeMessage, setRecomputeMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = authService.getCurrentRole();
    setIsAdmin(role === 'ADMIN');
  }, []);

  const handleRecomputeWallScores = async () => {
    if (!confirm('¿Estás seguro de que deseas recalcular el wallScore de todos los barberos? Esto puede tomar varios minutos.')) {
      return;
    }

    setIsRecomputing(true);
    setRecomputeMessage(null);

    try {
      const result = await barbersService.recomputeWallScores();
      setRecomputeMessage({
        type: 'success',
        text: result.message || 'WallScores recalculados exitosamente',
      });
    } catch (error: any) {
      setRecomputeMessage({
        type: 'error',
        text: error.response?.data?.message || 'Error al recalcular wallScores',
      });
    } finally {
      setIsRecomputing(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <SettingsIcon className="w-6 h-6" />
          Configuración
        </h1>
        <p className="text-gray-600 mt-1">Configuración general del sistema</p>
      </div>

      {isAdmin && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Herramientas de Administración</h2>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Recalcular WallScores</h3>
                <p className="text-sm text-gray-600">
                  Recalcula el wallScore de todos los barberos basado en rating, reviews, servicios, antigüedad y completitud del perfil.
                </p>
              </div>
            </div>

            {recomputeMessage && (
              <div className={`mb-4 p-3 rounded-md flex items-center gap-2 ${
                recomputeMessage.type === 'success' 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}>
                {recomputeMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span className="text-sm">{recomputeMessage.text}</span>
              </div>
            )}

            <button
              onClick={handleRecomputeWallScores}
              disabled={isRecomputing}
              className={`px-4 py-2 rounded-md font-medium flex items-center gap-2 ${
                isRecomputing
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${isRecomputing ? 'animate-spin' : ''}`} />
              {isRecomputing ? 'Recalculando...' : 'Recalcular WallScores'}
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-500">Más configuraciones - Próximamente</p>
      </div>
    </div>
  );
}

