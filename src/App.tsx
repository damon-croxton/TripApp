import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';
import { Header } from './components/Header';
import { TodayView } from './components/TodayView';
import { CalendarView } from './components/CalendarView';
import { RouteMap } from './components/RouteMap';
import { TOUR_DAYS } from './data/itineraryData';
import { DEFAULT_START_DATE, getCurrentTourDayIndex } from './utils/dateUtils';

export default function App() {
  const [startDate, setStartDate] = useState<string>(() => {
    return localStorage.getItem('parent_tour_start_date') || DEFAULT_START_DATE;
  });

  const [activeTab, setActiveTab] = useState<'today' | 'calendar' | 'map'>('today');

  const [activeDayIndex, setActiveDayIndex] = useState<number>(() => {
    return getCurrentTourDayIndex(startDate, TOUR_DAYS.length);
  });

  useEffect(() => {
    localStorage.setItem('parent_tour_start_date', startDate);
  }, [startDate]);

  const realTodayIndex = getCurrentTourDayIndex(startDate, TOUR_DAYS.length);

  const handleResetToRealToday = () => {
    setActiveDayIndex(realTodayIndex);
    setActiveTab('today');
  };

  const handleOpenMapForDay = (dayNum: number) => {
    setActiveDayIndex(dayNum);
    setActiveTab('map');
  };

  const handleSelectDayFromCalendar = (dayNum: number) => {
    setActiveDayIndex(dayNum);
    setActiveTab('today');
  };

  const currentDayData = TOUR_DAYS.find(d => d.dayNumber === activeDayIndex) || TOUR_DAYS[1];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-800 selection:bg-indigo-500 selection:text-white">
      
      {/* Header with Compact Top Bar & 3 Tabs */}
      <Header
        startDate={startDate}
        setStartDate={setStartDate}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content View Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-6 py-3.5">
        {activeTab === 'today' && (
          <TodayView
            currentDay={currentDayData}
            totalDays={TOUR_DAYS.length}
            startDate={startDate}
            onSelectDayIndex={setActiveDayIndex}
            onOpenMapForDay={handleOpenMapForDay}
            onResetToRealToday={handleResetToRealToday}
            realTodayDayIndex={realTodayIndex}
          />
        )}

        {activeTab === 'calendar' && (
          <CalendarView
            days={TOUR_DAYS}
            startDate={startDate}
            selectedDayNumber={activeDayIndex}
            onSelectDayNumber={handleSelectDayFromCalendar}
          />
        )}

        {activeTab === 'map' && (
          <RouteMap
            days={TOUR_DAYS}
            selectedDayNumber={activeDayIndex}
            onSelectDayNumber={setActiveDayIndex}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-3 mt-6">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-semibold">TripADeal Tour 5762</span>
          </div>

          <span className="text-slate-500">
            UK & Ireland 15-Day Tour
          </span>
        </div>
      </footer>

    </div>
  );
}
