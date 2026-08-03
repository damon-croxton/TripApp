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
    <div id="today-view-container" className="space-y-3.5 animate-in fade-in duration-200">
      
      {/* Top Compact Navigation & Day Indicator */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 flex items-center justify-between gap-2">
        <button
          id="prev-day-btn"
          disabled={currentDay.dayNumber <= 1}
          onClick={() => onSelectDayIndex(currentDay.dayNumber - 1)}
          className={`p-2 rounded-xl transition-all ${
            currentDay.dayNumber <= 1
              ? 'opacity-30 cursor-not-allowed text-slate-400'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95'
          }`}
          aria-label="Previous Day"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="text-center min-w-0 flex-1 px-1">
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${getCountryBadgeClass(currentDay.country)}`}>
              {currentDay.flag} {currentDay.country}
            </span>
            <span className="bg-indigo-100 text-indigo-900 text-[11px] font-bold px-2 py-0.5 rounded-md">
              Day {currentDay.dayNumber} / {totalDays}
            </span>
            {!isViewingRealToday && (
              <button
                onClick={onResetToRealToday}
                className="bg-amber-100 hover:bg-amber-200 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 transition-colors"
              >
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Jump to Today</span>
              </button>
            )}
          </div>
          <h2 className="text-base font-bold text-slate-900 truncate mt-1">
            {currentDay.title}
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            {formatDateFull(calculatedDate)}
          </p>
        </div>

        <button
          id="next-day-btn"
          disabled={currentDay.dayNumber >= totalDays}
          onClick={() => onSelectDayIndex(currentDay.dayNumber + 1)}
          className={`p-2 rounded-xl transition-all ${
            currentDay.dayNumber >= totalDays
              ? 'opacity-30 cursor-not-allowed text-slate-400'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95'
          }`}
          aria-label="Next Day"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Primary Highlights Hero Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-md border border-slate-800 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
              Today's Key Destination
            </span>
            <h3 className="text-lg font-bold text-white leading-tight">
              {currentDay.destinationName}
            </h3>
          </div>

          <button
            onClick={() => onOpenMapForDay(currentDay.dayNumber)}
            className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg shrink-0 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>Map</span>
          </button>
        </div>

        <p className="text-xs text-slate-300 italic font-medium">
          "{currentDay.subTitle}"
        </p>

        {/* Highlights List */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Top Highlights
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
            {currentDay.highlights.map((item, idx) => (
              <div key={idx} className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700/60 flex items-start gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs text-slate-200 font-medium leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline & Key Pocket Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        
        {/* Schedule */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
            Schedule Overview
          </h3>

          <div className="space-y-3 text-xs">
            {/* Morning */}
            <div className="space-y-1">
              <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md inline-block">
                🌅 Morning
              </span>
              <ul className="space-y-1 pl-1 text-slate-700">
                {currentDay.timeline.morning.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Afternoon */}
            <div className="space-y-1">
              <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md inline-block">
                ☀️ Afternoon
              </span>
              <ul className="space-y-1 pl-1 text-slate-700">
                {currentDay.timeline.afternoon.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evening */}
            <div className="space-y-1">
              <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md inline-block">
                🌙 Evening
              </span>
              <ul className="space-y-1 pl-1 text-slate-700">
                {currentDay.timeline.evening.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Reference Box */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
            Quick Day Info
          </h3>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <CloudRain className="w-3 h-3 text-indigo-500" /> Clothing
              </span>
              <span className="font-semibold text-slate-800 leading-tight block">
                {currentDay.clothingTip}
              </span>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Coins className="w-3 h-3 text-emerald-600" /> Currency
              </span>
              <span className="font-bold text-slate-900">
                {currentDay.currency}
              </span>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-0.5 col-span-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Hotel className="w-3 h-3 text-indigo-600" /> Hotel Tonight
              </span>
              <span className="font-bold text-slate-900 block truncate">
                {currentDay.hotel}
              </span>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-1 col-span-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Utensils className="w-3 h-3 text-amber-600" /> Meals Included
              </span>
              <div className="flex items-center gap-1.5 text-[11px] font-bold">
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

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Footprints className="w-3 h-3 text-indigo-500" /> Walking
              </span>
              <span className="font-bold text-slate-800">
                {currentDay.walkingEffort}
              </span>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block flex items-center gap-1">
                <Bus className="w-3 h-3 text-indigo-500" /> Coach Drive
              </span>
              <span className="font-bold text-slate-800">
                {currentDay.drivingTimeApprox || 'Varies'}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
