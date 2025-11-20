'use client';

import { useState, useEffect } from 'react';
import { MapPin, Navigation, X } from 'lucide-react';
import dynamic from 'next/dynamic';

// Importar todo el mapa dinámicamente para evitar problemas de SSR
const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="text-gray-500">Cargando mapa...</div>
    </div>
  ),
});

interface LocationPickerProps {
  latitude?: number | null;
  longitude?: number | null;
  onLocationChange: (latitude: number, longitude: number) => void;
  onClear?: () => void;
}


export default function LocationPicker({ latitude, longitude, onLocationChange, onClear }: LocationPickerProps) {
  const [mapKey, setMapKey] = useState(0);
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(
    latitude && longitude ? { lat: latitude, lng: longitude } : null
  );

  // Centro por defecto (Caracas, Venezuela)
  const defaultCenter: [number, number] = [10.4806, -66.9036];
  const center: [number, number] = currentPosition
    ? [currentPosition.lat, currentPosition.lng]
    : defaultCenter;

  useEffect(() => {
    if (latitude && longitude) {
      setCurrentPosition({ lat: latitude, lng: longitude });
      setMapKey((prev) => prev + 1); // Forzar re-render del mapa
    }
  }, [latitude, longitude]);

  const handleMapClick = (lat: number, lng: number) => {
    setCurrentPosition({ lat, lng });
    onLocationChange(lat, lng);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
          onLocationChange(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('No se pudo obtener tu ubicación. Por favor, selecciona una ubicación en el mapa.');
        }
      );
    } else {
      alert('Tu navegador no soporta geolocalización. Por favor, selecciona una ubicación en el mapa.');
    }
  };

  const handleClear = () => {
    setCurrentPosition(null);
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Ubicación en el Mapa
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleUseCurrentLocation}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Usar mi ubicación
          </button>
          {currentPosition && (
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
              Limpiar
            </button>
          )}
        </div>
      </div>

      <div className="border-2 border-gray-300 rounded-lg overflow-hidden" style={{ height: '400px' }}>
        <MapComponent
          key={mapKey}
          center={center}
          zoom={currentPosition ? 15 : 12}
          currentPosition={currentPosition}
          onLocationChange={handleMapClick}
        />
      </div>

      {currentPosition && (
        <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span>
            <strong>Latitud:</strong> {currentPosition.lat.toFixed(6)},{' '}
            <strong>Longitud:</strong> {currentPosition.lng.toFixed(6)}
          </span>
        </div>
      )}

      <p className="text-xs text-gray-500">
        Haz clic en el mapa para seleccionar la ubicación de la barbería o usa el botón para obtener tu ubicación actual.
      </p>
    </div>
  );
}
