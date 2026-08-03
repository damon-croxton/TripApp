import React, { useState } from 'react';
import { Calendar, Compass, Settings2, Check } from 'lucide-react';
import { formatDateShort, getCalculatedDateForDay } from '../utils/dateUtils';

interface HeaderProps {
  startDate: string;
  setStartDate: (date: string) => void;
  activeTab: 'today' | 'calendar' | 'map';
  setActiveTab: (tab: 'today' | 'calendar' | 'map') => void;
}

export const Header: React.FC<HeaderProps> = ({
  startDate,
  setStartDate,
  activeTab,
  setActiveTab
}) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const startDateObj = getCalculatedDateForDay(startDate, 1);

  return (
    <header id="main-header" className="bg-slate-900 text-white sticky top-0 z-40 border-b border-slate-800 shadow-sm">
      {/* Ultra-compact Header with 3 Tabs & Date Settings */}
      <div className="max-w-4xl mx-auto px-2 py-1.5 flex items-center justify-between gap-2">
        <div className="flex-1 max-w-sm grid grid-cols-3 gap-1">
          <button
            id="tab-today"
            onClick={() => setActiveTab('today')}
            className={`py-1.5 px-2 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
              activeTab === 'today'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span>Today</span>
          </button>

          <button
            id="tab-calendar"
            onClick={() => setActiveTab('calendar')}
            className={`py-1.5 px-2 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
              activeTab === 'calendar'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span>Calendar</span>
          </button>

          <button
            id="tab-map"
            onClick={() => setActiveTab('map')}
            className={`py-1.5 px-2 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
              activeTab === 'map'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span>Map</span>
          </button>
        </div>

        <button
          id="tour-settings-btn"
          onClick={() => setShowSettingsModal(true)}
          className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs border border-slate-700/80 transition-colors shrink-0"
          title="Change Start Date"
        >
          <Settings2 className="w-3.5 h-3.5 text-slate-300" />
        </button>
      </div>

      {/* Start Date Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-2xl max-w-sm w-full p-5 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span>Tour Departure Date</span>
              </h3>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-3">
              Change the start date so the app calculates which day is <strong>"Today"</strong>:
            </p>

            <div className="space-y-3">
              <div>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-900 text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
