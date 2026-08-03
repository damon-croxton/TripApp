import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, ChevronRight, Hotel, Filter, ArrowRight } from 'lucide-react';
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

  // Calculate 3 featured days starting from current selected day
  const selectedIdx = days.findIndex(d => d.dayNumber === selectedDayNumber);
  const startIdx = selectedIdx >= 0 ? selectedIdx : 0;
  
  // Get current day + next two days
  const featuredThreeDays = [
    days[startIdx],
    days[Math.min(startIdx + 1, days.length - 1)],
    days[Math.min(startIdx + 2, days.length - 1)]
  ].filter((day, index, self) => day && self.findIndex(d => d.dayNumber === day.dayNumber) === index);

  const filteredDays = days.filter(day => {
    if (selectedCountryFilter === 'ALL') return true;
    return day.country === selectedCountryFilter;
  });

  return (
    <div id="calendar-view-container" className="space-y-4 animate-in fade-in duration-200">
      
      {/* Featured 3-Day Focus Panels (Current + Next 2 Days) */}
      <div className="bg-indigo-950 text-white rounded-2xl p-3.5 shadow-md border border-indigo-800 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Focus: Selected Day & Next 2 Days
            </span>
          </div>
          <span className="text-[10px] text-indigo-300 font-medium">
            Tap card to view
          </span>
        </div>

        {/* 3 Panels Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {featuredThreeDays.map((day, offsetIdx) => {
            const dateObj = getCalculatedDateForDay(startDate, day.dayNumber);
            const isBaseSelected = day.dayNumber === selectedDayNumber;

            return (
              <div
                key={day.dayNumber}
                onClick={() => onSelectDayNumber(day.dayNumber)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  isBaseSelected
                    ? 'bg-indigo-600 text-white border-amber-400 shadow-md ring-2 ring-amber-400/50'
                    : 'bg-indigo-900/60 hover:bg-indigo-900 text-slate-200 border-indigo-700/80'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className={`font-bold px-1.5 py-0.2 rounded text-[10px] ${
                    isBaseSelected ? 'bg-amber-400 text-indigo-950' : 'bg-indigo-800 text-indigo-200'
                  }`}>
                    {offsetIdx === 0 ? 'Selected' : `+${offsetIdx} Day`}
                  </span>
                  <span className="font-semibold opacity-90">
                    {formatDateShort(dateObj)}
                  </span>
                </div>

                <div className="font-bold text-xs truncate">
                  Day {day.dayNumber}: {day.destinationName}
                </div>

                <p className="text-[11px] opacity-80 truncate mt-0.5">
                  {day.highlights[0]}
                </p>

                <div className="mt-2 text-[10px] font-bold flex items-center justify-end gap-1 opacity-90 text-amber-300">
                  <span>Open Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
      <div className="space-y-2 max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
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
