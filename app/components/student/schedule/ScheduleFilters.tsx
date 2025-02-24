"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface ScheduleFiltersProps {
  currentWeek: 'current' | 'next';
  onWeekChange: (week: 'current' | 'next') => void;
  view: 'week' | 'list';
  onViewChange: (view: 'week' | 'list') => void;
}

function CalendarIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor" 
      className="w-5 h-5"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

export function ScheduleFilters({
  currentWeek,
  onWeekChange,
  view,
  onViewChange
}: ScheduleFiltersProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div className="flex gap-2">
        <button
          onClick={() => onWeekChange('current')}
          className={`px-4 py-2 rounded-lg text-sm ${
            currentWeek === 'current' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Текущая неделя
        </button>
        <button
          onClick={() => onWeekChange('next')}
          className={`px-4 py-2 rounded-lg text-sm ${
            currentWeek === 'next' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Следующая неделя
        </button>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onViewChange('week')}
          className={`p-2 rounded-lg ${
            view === 'week' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
          title="Вид календаря"
        >
          <CalendarIcon />
        </button>
        <button
          onClick={() => onViewChange('list')}
          className={`p-2 rounded-lg ${
            view === 'list' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
          title="Списком"
        >
          <ListIcon />
        </button>
      </div>
    </div>
  );
} 