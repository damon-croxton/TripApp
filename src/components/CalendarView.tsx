import React, { useState } from 'react';
import { MapPin, ChevronRight, Filter } from 'lucide-react';
import { TourDay } from '../types/tour';
import { formatDateShort, getCalculatedDateForDay, getCountryBadgeClass } from '../utils/dateUtils';

interface CalendarViewProps {
  days: TourDay[];
  startDate: string;
  selectedDayNumber: number;
  onSelectDayNumber: (dayNum: number) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  days,
  startDate,
  selectedDayNumber,
  onSelectDayNumber
}) => {
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('ALL');

  const filteredDays = days.filter(day => {
    if (selectedCountryFilter === 'ALL') return true;
    return day.country === selectedCountryFilter;
  });

  return (
    <div id="calendar-view-container" className="space-y-3 animate-in fade-in duration-200">
      
      {/* Country Filter Buttons */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[11px] font-bold text-slate-400 shrink-0 flex items-center gap-1">
          <Filter className="w-3 h-3" />
          <span>Filter:</span>
        </span>
        {['ALL', 'England', 'Wales', 'Ireland', 'Northern Ireland', 'Scotland'].map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountryFilter(country)}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
              selectedCountryFilter === country
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {country === 'ALL' ? 'All Days' : country}
          </button>
        ))}
      </div>

      {/* Scrollable List of All Tour Days */}
      <div className="space-y-2 max-h-[calc(100vh-170px)] overflow-y-auto pr-1">
        {filteredDays.map((day) => {
          const dateObj = getCalculatedDateForDay(startDate, day.dayNumber);
          const isSelected = day.dayNumber === selectedDayNumber;

          return (
            <div
              key={day.dayNumber}
              onClick={() => onSelectDayNumber(day.dayNumber)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                isSelected
                  ? 'bg-indigo-50/90 border-indigo-500 shadow-sm ring-1 ring-indigo-500'
                  : 'bg-white hover:bg-slate-50 border-slate-200'
              }`}
            >
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="bg-indigo-100 text-indigo-900 text-[11px] font-bold px-2 py-0.5 rounded-md">
                    Day {day.dayNumber}
                  </span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${getCountryBadgeClass(day.country)}`}>
                    {day.flag} {day.country}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold ml-auto">
                    {formatDateShort(dateObj)}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm truncate">
                  {day.title}
                </h3>

                <p className="text-xs text-slate-600 truncate flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-indigo-500 shrink-0" />
                  <span>{day.destinationName}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-400 truncate">{day.highlights[0]}</span>
                </p>
              </div>

              <div className="shrink-0 flex items-center text-slate-400">
                <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-indigo-600' : ''}`} />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
