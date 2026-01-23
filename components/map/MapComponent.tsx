'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: (markerIcon as any).src || markerIcon,
  iconRetinaUrl: (markerIconRetina as any).src || markerIconRetina,
  shadowUrl: (markerShadow as any).src || markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapComponentProps {
  center: [number, number];
  zoom: number;
  currentPosition: { lat: number; lng: number } | null;
  onLocationChange: (lat: number, lng: number) => void;
}

export default function MapComponent({ center, zoom, currentPosition, onLocationChange }: MapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize map
  useEffect(() => {
    setMounted(true);

    // Cleanup function directly in the effect
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Initialize and update map
  useEffect(() => {
    if (!mounted || !mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Create map instance
      const map = L.map(mapContainerRef.current).setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add click handler
      map.on('click', (e) => {
        onLocationChange(e.latlng.lat, e.latlng.lng);
      });

      mapInstanceRef.current = map;
    } else {
      // Update view if map exists
      mapInstanceRef.current.setView(center, zoom);
    }
  }, [mounted, center, zoom, onLocationChange]);

  // Handle marker
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    if (currentPosition) {
      if (markerRef.current) {
        markerRef.current.setLatLng([currentPosition.lat, currentPosition.lng]);
      } else {
        markerRef.current = L.marker([currentPosition.lat, currentPosition.lng]).addTo(mapInstanceRef.current);
      }
    } else {
      if (markerRef.current) {
        markerRef.current.remove();
        markerRef.current = null;
      }
    }
  }, [currentPosition]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="text-gray-500">Iniciando mapa...</div>
      </div>
    );
  }

  return (
    <div
      ref={mapContainerRef}
      style={{ height: '100%', width: '100%', zIndex: 0 }}
    />
  );
}
