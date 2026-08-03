import { Country } from '../types/tour';

export const DEFAULT_START_DATE = '2026-08-11'; // Default tour departure date (Day 1: 11/08/2026)

export function getCalculatedDateForDay(startDateStr: string, dayNumber: number): Date {
  const start = new Date(startDateStr);
  const result = new Date(start);
  result.setDate(start.getDate() + (dayNumber - 1));
  return result;
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

export function formatDateFull(date: Date): string {
  return date.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export function getCountryBadgeClass(country: Country): string {
  switch (country) {
    case 'England':
      return 'bg-rose-100 text-rose-800 border-rose-300';
    case 'Wales':
      return 'bg-amber-100 text-amber-800 border-amber-300';
    case 'Ireland':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    case 'Northern Ireland':
      return 'bg-sky-100 text-sky-800 border-sky-300';
    case 'Scotland':
      return 'bg-purple-100 text-purple-800 border-purple-300';
    case 'In Transit':
    default:
      return 'bg-slate-100 text-slate-700 border-slate-300';
  }
}

export function getCountryMapColor(country: Country): string {
  switch (country) {
    case 'England':
      return '#e11d48'; // Rose red
    case 'Wales':
      return '#d97706'; // Amber
    case 'Ireland':
      return '#059669'; // Emerald green
    case 'Northern Ireland':
      return '#0284c7'; // Sky blue
    case 'Scotland':
      return '#7c3aed'; // Purple
    case 'In Transit':
    default:
      return '#64748b'; // Slate gray
  }
}

export function getCurrentTourDayIndex(startDateStr: string, totalDays: number): number {
  const start = new Date(startDateStr);
  start.setHours(0, 0, 0, 0);
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const diffTime = now.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const dayNum = diffDays + 1;
  if (dayNum < 1) return 1;
  if (dayNum > totalDays) return totalDays;
  return dayNum;
}
