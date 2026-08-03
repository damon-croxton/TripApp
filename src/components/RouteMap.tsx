import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { TourDay } from '../types/tour';
import { MapPin, Navigation, Hotel, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCountryMapColor } from '../utils/dateUtils';

interface RouteMapProps {
  days: TourDay[];
  selectedDayNumber: number;
  onSelectDayNumber: (dayNum: number) => void;
}

export const RouteMap: React.FC<RouteMapProps> = ({
  days,
  selectedDayNumber,
  onSelectDayNumber
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [dayNum: number]: L.Marker }>({});

  const selectedDay = days.find(d => d.dayNumber === selectedDayNumber) || days[0];

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize Leaflet map if not created
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [54.5, -3.5], // Center over UK & Ireland
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: true
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 18
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // Clear old markers
    (Object.values(markersRef.current) as L.Marker[]).forEach(m => m.remove());
    markersRef.current = {};

    // Collect valid coordinates for polylines (excluding long distance flight days)
    const routeCoords: [number, number][] = [];

    days.forEach((day) => {
      if (day.isTravelDay && (day.dayNumber === 1 || day.dayNumber >= 18)) return;

      const { lat, lng } = day.coords;
      routeCoords.push([lat, lng]);

      const isSelected = day.dayNumber === selectedDayNumber;
      const color = getCountryMapColor(day.country);

      // Create custom HTML marker icon
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div style="
            background-color: ${isSelected ? '#f59e0b' : color};
            color: #ffffff;
            width: ${isSelected ? '32px' : '24px'};
            height: ${isSelected ? '32px' : '24px'};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: ${isSelected ? '13px' : '11px'};
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
            border: ${isSelected ? '3px solid #ffffff' : '2px solid #ffffff'};
            transition: all 0.2s ease;
          ">
            ${day.dayNumber}
          </div>
        `,
        iconSize: [isSelected ? 32 : 24, isSelected ? 32 : 24],
        iconAnchor: [isSelected ? 16 : 12, isSelected ? 16 : 12]
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
      
      const popupContent = `
        <div style="font-family: system-ui, sans-serif; padding: 2px; max-width: 180px;">
          <div style="font-size: 10px; font-weight: bold; color: #4f46e5; text-transform: uppercase;">
            Day ${day.dayNumber} • ${day.country}
          </div>
          <div style="font-size: 13px; font-weight: bold; color: #0f172a; margin-top: 1px;">
            ${day.destinationName}
          </div>
          <div style="font-size: 11px; color: #475569; margin-top: 2px;">
            ${day.title}
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', () => onSelectDayNumber(day.dayNumber));

      markersRef.current[day.dayNumber] = marker;
    });

    // Draw Tour Route Polyline
    if (routeCoords.length > 1) {
      L.polyline(routeCoords, {
        color: '#4f46e5',
        weight: 3,
        opacity: 0.7,
        dashArray: '6, 6'
      }).addTo(map);
    }

    // Pan & Zoom to selected day
    if (selectedDay && !selectedDay.isTravelDay && selectedDay.coords) {
      map.setView([selectedDay.coords.lat, selectedDay.coords.lng], 7, {
        animate: true,
        duration: 0.6
      });

      if (markersRef.current[selectedDay.dayNumber]) {
        markersRef.current[selectedDay.dayNumber].openPopup();
      }
    }

  }, [days, selectedDayNumber]);

  return (
    <div id="route-map-container" className="space-y-3 animate-in fade-in duration-200">
      
      {/* Top Map Navigator Toolbar */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Navigation className="w-4 h-4 text-indigo-600 shrink-0" />
          <div className="min-w-0">
            <h2 className="text-xs font-bold text-slate-900 truncate">
              Day {selectedDay.dayNumber}: {selectedDay.destinationName} ({selectedDay.country})
            </h2>
          </div>
        </div>

        {/* Prev / Next Day Controls for Map */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            disabled={selectedDayNumber <= 1}
            onClick={() => onSelectDayNumber(selectedDayNumber - 1)}
            className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-[11px] font-bold bg-indigo-100 text-indigo-900 px-2 py-1 rounded-lg">
            {selectedDayNumber} / {days.length}
          </span>

          <button
            disabled={selectedDayNumber >= days.length}
            onClick={() => onSelectDayNumber(selectedDayNumber + 1)}
            className="p-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors disabled:opacity-30 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative bg-slate-100 rounded-2xl overflow-hidden shadow-md border border-slate-300 h-[380px] sm:h-[460px]">
        <div ref={mapContainerRef} className="w-full h-full z-0"></div>

        {/* Floating Selected Day Card */}
        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200 z-10 space-y-1">
          <div className="flex items-center justify-between gap-1">
            <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
              Day {selectedDay.dayNumber} Stop
            </span>
            <span className="text-[11px] font-bold text-slate-600">
              {selectedDay.flag} {selectedDay.country}
            </span>
          </div>
          <h3 className="text-xs font-bold text-slate-900 truncate">
            {selectedDay.destinationName} — {selectedDay.title}
          </h3>
          <div className="text-[10px] font-medium text-indigo-900 bg-indigo-50 p-1.5 rounded flex items-center gap-1">
            <Hotel className="w-3 h-3 text-indigo-600 shrink-0" />
            <span className="truncate">Stay: {selectedDay.hotel}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
