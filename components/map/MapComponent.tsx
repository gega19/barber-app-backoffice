'use client';

import { useEffect, useState } from 'react';

interface MapComponentProps {
  center: [number, number];
  zoom: number;
  currentPosition: { lat: number; lng: number } | null;
  onLocationChange: (lat: number, lng: number) => void;
}

export default function MapComponent({ center, zoom, currentPosition, onLocationChange }: MapComponentProps) {
  const [isClient, setIsClient] = useState(false);
  const [MapContainer, setMapContainer] = useState<any>(null);
  const [TileLayer, setTileLayer] = useState<any>(null);
  const [Marker, setMarker] = useState<any>(null);
  const [useMapEventsHook, setUseMapEventsHook] = useState<any>(null);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;

    setIsClient(true);

    // Cargar react-leaflet dinámicamente
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
      import('leaflet/dist/images/marker-icon.png'),
      import('leaflet/dist/images/marker-shadow.png'),
    ]).then(([reactLeaflet, L, iconMod, shadowMod]) => {
      setMapContainer(() => reactLeaflet.MapContainer);
      setTileLayer(() => reactLeaflet.TileLayer);
      setMarker(() => reactLeaflet.Marker);
      setUseMapEventsHook(() => reactLeaflet.useMapEvents);

      // Configurar iconos de Leaflet
      const DefaultIcon = L.default.icon({
        iconUrl: (iconMod.default as any).src || iconMod.default,
        shadowUrl: (shadowMod.default as any).src || shadowMod.default,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      L.default.Marker.prototype.options.icon = DefaultIcon;
    });
  }, []);

  if (!isClient || !MapContainer || !TileLayer || !Marker || !useMapEventsHook) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="text-gray-500">Cargando mapa...</div>
      </div>
    );
  }

  // Crear componente interno que usa el hook useMapEvents
  // Este componente debe estar dentro del MapContainer
  const createMapClickHandler = (useMapEvents: any, onLocationChange: (lat: number, lng: number) => void) => {
    return function MapClickHandler() {
      useMapEvents({
        click: (e: any) => {
          onLocationChange(e.latlng.lat, e.latlng.lng);
        },
      });
      return null;
    };
  };

  const MapContainerComponent = MapContainer;
  const TileLayerComponent = TileLayer;
  const MarkerComponent = Marker;
  const MapClickHandler = createMapClickHandler(useMapEventsHook, onLocationChange);

  return (
    <MapContainerComponent
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayerComponent
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {currentPosition && (
        <MarkerComponent position={[currentPosition.lat, currentPosition.lng]} />
      )}
      <MapClickHandler />
    </MapContainerComponent>
  );
}
