'use client';

import { useState, useEffect } from 'react';
import { MapPin, Navigation, X } from 'lucide-react';
import dynamic from 'next/dynamic';

// Importar Leaflet dinámicamente para evitar problemas de SSR
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });

// Importar estilos de Leaflet
import 'leaflet/dist/leaflet.css';

// Fix para los iconos de Leaflet en Next.js
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationPickerProps {
  latitude?: number | null;
  longitude?: number | null;
  onLocationChange: (latitude: number, longitude: number) => void;
  onClear?: () => void;
}

// Componente interno para manejar eventos del mapa
function MapClickHandler({ onLocationChange }: { onLocationChange: (lat: number, lng: number) => void }) {
  if (typeof window === 'undefined') return null;
  
  // Importar useMapEvents dinámicamente
  const ReactLeaflet = require('react-leaflet');
  const map = ReactLeaflet.useMapEvents({
    click: (e: any) => {
      onLocationChange(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
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
        {typeof window !== 'undefined' && (
          <MapContainer
            key={mapKey}
            center={center}
            zoom={currentPosition ? 15 : 12}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {currentPosition && (
              <Marker position={[currentPosition.lat, currentPosition.lng]} />
            )}
            <MapClickHandler onLocationChange={handleMapClick} />
          </MapContainer>
        )}
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
