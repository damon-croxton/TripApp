import React from 'react';
import { 
  ChevronLeft, ChevronRight, MapPin, Calendar, Footprints, Bus, Hotel, 
  Utensils, CloudRain, Coins, Sparkles
} from 'lucide-react';
import { TourDay } from '../types/tour';
import { formatDateFull, getCalculatedDateForDay, getCountryBadgeClass } from '../utils/dateUtils';

interface TodayViewProps {
  currentDay: TourDay;
  totalDays: number;
  startDate: string;
  onSelectDayIndex: (idx: number) => void;
  onOpenMapForDay: (dayNum: number) => void;
  onResetToRealToday: () => void;
  realTodayDayIndex: number;
}

export const TodayView: React.FC<TodayViewProps> = ({
  currentDay,
  totalDays,
  startDate,
  onSelectDayIndex,
  onOpenMapForDay,
  onResetToRealToday,
  realTodayDayIndex
}) => {
  const calculatedDate = getCalculatedDateForDay(startDate, currentDay.dayNumber);
  const isViewingRealToday = currentDay.dayNumber === realTodayDayIndex;

  return (
    <div id="today-view-container" className="space-y-2.5 animate-in fade-in duration-200">
      
      {/* Top Compressed Navigation & Day Indicator */}
      <div className="bg-white rounded-2xl p-2 px-2.5 shadow-sm border border-slate-200 flex items-center justify-between gap-1.5">
        <button
          id="prev-day-btn"
          disabled={currentDay.dayNumber <= 1}
          onClick={() => onSelectDayIndex(currentDay.dayNumber - 1)}
          className={`p-1.5 sm:p-2 rounded-xl transition-all ${
            currentDay.dayNumber <= 1
              ? 'opacity-25 cursor-not-allowed text-slate-400'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95'
          }`}
          aria-label="Previous Day"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        <div className="text-center min-w-0 flex-1 px-1">
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            <span className="bg-indigo-100 text-indigo-900 text-[11px] font-bold px-2 py-0.5 rounded-md">
              Day {currentDay.dayNumber} / {totalDays}
            </span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${getCountryBadgeClass(currentDay.country)}`}>
              {currentDay.flag} {currentDay.country}
            </span>
            <span className="text-[11px] font-semibold text-slate-500">
              • {formatDateFull(calculatedDate)}
            </span>

            {!isViewingRealToday && (
              <button
                onClick={onResetToRealToday}
                className="bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 transition-all active:scale-95 shrink-0"
              >
                <Sparkles className="w-3 h-3 text-amber-100" />
                <span>Jump to Today</span>
              </button>
            )}
          </div>
          <h2 className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
            {currentDay.title}
          </h2>
        </div>

        <button
          id="next-day-btn"
          disabled={currentDay.dayNumber >= totalDays}
          onClick={() => onSelectDayIndex(currentDay.dayNumber + 1)}
          className={`p-1.5 sm:p-2 rounded-xl transition-all ${
            currentDay.dayNumber >= totalDays
              ? 'opacity-25 cursor-not-allowed text-slate-400'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 shadow-sm'
          }`}
          aria-label="Next Day"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* Primary Highlights Compressed Banner (Quote Removed) */}
      <div className="bg-slate-900 text-white rounded-2xl p-3 shadow-md border border-slate-800 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider block">
              Today's Key Destination
            </span>
            <h3 className="text-base font-bold text-white truncate leading-tight">
              {currentDay.destinationName}
            </h3>
          </div>

          <button
            onClick={() => onOpenMapForDay(currentDay.dayNumber)}
            className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-2.5 py-1 rounded-lg shrink-0 transition-colors shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>Map</span>
          </button>
        </div>

        {/* Highlights List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-0.5">
          {currentDay.highlights.map((item, idx) => (
            <div key={idx} className="bg-slate-800/90 rounded-lg p-1.5 px-2 border border-slate-700/60 flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[9px] flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <span className="text-[11px] text-slate-200 font-medium leading-tight truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule & Quick Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        
        {/* Schedule Overview */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 space-y-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Schedule Overview
            </h3>
            {currentDay.drivingTimeApprox && (
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                <Bus className="w-3 h-3 text-indigo-600 shrink-0" />
                <span>Coach: {currentDay.drivingTimeApprox}</span>
              </span>
            )}
          </div>

          <div className="space-y-2 text-xs">
            {/* Morning */}
            <div className="space-y-0.5">
              <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded text-[11px] inline-block">
                🌅 Morning
              </span>
              <ul className="space-y-0.5 pl-1 text-[11px] text-slate-700">
                {currentDay.timeline.morning.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1 leading-snug">
                    <span className="text-indigo-600 font-bold shrink-0">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Afternoon */}
            <div className="space-y-0.5">
              <span className="font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded text-[11px] inline-block">
                ☀️ Afternoon
              </span>
              <ul className="space-y-0.5 pl-1 text-[11px] text-slate-700">
                {currentDay.timeline.afternoon.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1 leading-snug">
                    <span className="text-indigo-600 font-bold shrink-0">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evening */}
            <div className="space-y-0.5">
              <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded text-[11px] inline-block">
                🌙 Evening
              </span>
              <ul className="space-y-0.5 pl-1 text-[11px] text-slate-700">
                {currentDay.timeline.evening.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1 leading-snug">
                    <span className="text-indigo-600 font-bold shrink-0">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Reference Box */}
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 space-y-2">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1.5">
            Quick Day Info
          </h3>

          <div className="grid grid-cols-2 gap-1.5 text-xs">
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <CloudRain className="w-3 h-3 text-indigo-500" /> Clothing
              </span>
              <span className="font-semibold text-slate-800 text-[11px] leading-tight block">
                {currentDay.clothingTip}
              </span>
            </div>

            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Coins className="w-3 h-3 text-emerald-600" /> Currency
              </span>
              <span className="font-bold text-slate-900 text-[11px]">
                {currentDay.currency}
              </span>
            </div>

            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5 col-span-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Hotel className="w-3 h-3 text-indigo-600" /> Hotel Tonight
              </span>
              <span className="font-bold text-slate-900 text-[11px] block truncate">
                {currentDay.hotel}
              </span>
            </div>

            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5 col-span-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Utensils className="w-3 h-3 text-amber-600" /> Meals Included
              </span>
              <div className="flex items-center gap-1 text-[10px] font-bold">
                <span className={`px-2 py-0.5 rounded ${currentDay.meals.breakfast ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-400 line-through'}`}>
                  Breakfast
                </span>
                <span className={`px-2 py-0.5 rounded ${currentDay.meals.lunch ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-400 line-through'}`}>
                  Lunch
                </span>
                <span className={`px-2 py-0.5 rounded ${currentDay.meals.dinner ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-400 line-through'}`}>
                  Dinner
                </span>
              </div>
            </div>

            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Footprints className="w-3 h-3 text-indigo-500" /> Walking
              </span>
              <span className="font-bold text-slate-800 text-[11px]">
                {currentDay.walkingEffort}
              </span>
            </div>

            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Bus className="w-3 h-3 text-indigo-500" /> Coach Drive
              </span>
              <span className="font-bold text-slate-800 text-[11px]">
                {currentDay.drivingTimeApprox || 'Varies'}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
