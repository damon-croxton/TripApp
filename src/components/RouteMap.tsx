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
  const polylineRef = useRef<L.Polyline | null>(null);

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

    // Clear existing polyline
    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }

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
            width: ${isSelected ? '28px' : '22px'};
            height: ${isSelected ? '28px' : '22px'};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: ${isSelected ? '12px' : '10px'};
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            border: ${isSelected ? '2.5px solid #ffffff' : '2px solid #ffffff'};
            transition: all 0.2s ease;
          ">
            ${day.dayNumber}
          </div>
        `,
        iconSize: [isSelected ? 28 : 22, isSelected ? 28 : 22],
        iconAnchor: [isSelected ? 14 : 11, isSelected ? 14 : 11]
      });

      const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
      
      const popupContent = `
        <div style="font-family: system-ui, sans-serif; padding: 0px 2px; max-width: 140px; text-align: center;">
          <div style="font-size: 9px; font-weight: 800; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.3px;">
            Day ${day.dayNumber}
          </div>
          <div style="font-size: 11px; font-weight: 700; color: #0f172a; line-height: 1.2; margin-top: 1px;">
            ${day.destinationName}
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        closeButton: false,
        offset: [0, -8],
        autoPan: false
      });

      marker.on('click', () => onSelectDayNumber(day.dayNumber));

      markersRef.current[day.dayNumber] = marker;
    });

    // Draw Tour Route Polyline (single instance)
    if (routeCoords.length > 1) {
      polylineRef.current = L.polyline(routeCoords, {
        color: '#4f46e5',
        weight: 3,
        opacity: 0.75,
        dashArray: '6, 6'
      }).addTo(map);
    }

    // Pan & Zoom smoothly to selected day centered in middle with optimal fast duration
    if (selectedDay && selectedDay.coords) {
      map.flyTo([selectedDay.coords.lat, selectedDay.coords.lng], 5.8, {
        animate: true,
        duration: 0.7
      });

      if (markersRef.current[selectedDay.dayNumber]) {
        markersRef.current[selectedDay.dayNumber].openPopup();
      }
    }

  }, [days, selectedDayNumber]);

  return (
    <div id="route-map-container" className="flex flex-col h-[calc(100vh-140px)] sm:h-[calc(100vh-150px)] gap-2 animate-in fade-in duration-200">
      
      {/* Top Map Navigator Toolbar with Destination & Stay Info */}
      <div className="bg-white rounded-2xl p-2.5 px-3 shadow-sm border border-slate-200 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <Navigation className="w-4 h-4 text-indigo-600 shrink-0" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                Day {selectedDay.dayNumber}: {selectedDay.destinationName}
              </h2>
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 hidden xs:inline">
                {selectedDay.flag} {selectedDay.country}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-indigo-700 font-medium truncate mt-0.5">
              <Hotel className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span className="truncate">Stay: {selectedDay.hotel}</span>
            </div>
          </div>
        </div>

        {/* Prev / Next Day Controls for Map */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            disabled={selectedDayNumber <= 1}
            onClick={() => onSelectDayNumber(selectedDayNumber - 1)}
            className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors disabled:opacity-30"
            title="Previous Day"
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
            title="Next Day"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Full Remaining Screen Map Container */}
      <div className="relative bg-slate-100 rounded-2xl overflow-hidden shadow-md border border-slate-300 flex-1 w-full min-h-[350px]">
        <div ref={mapContainerRef} className="w-full h-full z-0"></div>
      </div>

    </div>
  );
};
