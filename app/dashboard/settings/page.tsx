'use client';

import { Settings as SettingsIcon } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <SettingsIcon className="w-6 h-6" />
          Configuración
        </h1>
        <p className="text-gray-600 mt-1">Configuración general del sistema</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-500">Configuración - Próximamente</p>
      </div>
    </div>
  );
}

