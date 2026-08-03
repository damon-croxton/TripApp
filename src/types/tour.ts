export type Country = 'England' | 'Wales' | 'Ireland' | 'Northern Ireland' | 'Scotland' | 'In Transit';

export type TextSize = 'normal' | 'large' | 'xlarge';

export interface LocationCoords {
  lat: number;
  lng: number;
  cityName: string;
}

export interface DayTimeline {
  morning: string[];
  afternoon: string[];
  evening: string[];
}

export interface MealPlan {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  notes?: string;
}

export interface TourDay {
  dayNumber: number; // 0 = Flight to UK, 1 = Arrive London, ..., 15 = Depart, 16 = Arrive Home
  isTravelDay?: boolean;
  title: string;
  subTitle: string;
  country: Country;
  countryCode: string; // 'GB', 'IE', etc.
  flag: string;
  coords: LocationCoords;
  destinationName: string;
  highlights: string[];
  timeline: DayTimeline;
  meals: MealPlan;
  hotel: string;
  walkingEffort: 'Easy' | 'Moderate' | 'Active';
  clothingTip: string;
  currency: 'GBP (£)' | 'EUR (€)' | 'In-Flight';
  currencyCode: 'GBP' | 'EUR' | 'AUD';
  drivingTimeApprox?: string;
  didYouKnow: string;
  parentProTip: string;
  photoUrl?: string;
}

export interface MemoryNote {
  id: string;
  dayNumber: number;
  noteText: string;
  photoUrl?: string;
  dateAdded: string;
}

export interface PackingItem {
  id: string;
  category: 'Documents' | 'Clothing' | 'Electronics' | 'Health' | 'Comfort';
  name: string;
  checked: boolean;
  note?: string;
}
