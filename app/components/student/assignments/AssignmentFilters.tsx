"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface AssignmentFiltersProps {
  filter: 'all' | 'active' | 'completed' | 'overdue';
  onFilterChange: (filter: 'all' | 'active' | 'completed' | 'overdue') => void;
  search: string;
  onSearchChange: (search: string) => void;
}

export function AssignmentFilters({
  filter,
  onFilterChange,
  search,
  onSearchChange
}: AssignmentFiltersProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between">
      <div className="flex gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-lg text-sm ${
            filter === 'all' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Все
        </button>
        <button
          onClick={() => onFilterChange('active')}
          className={`px-4 py-2 rounded-lg text-sm ${
            filter === 'active' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Активные
        </button>
        <button
          onClick={() => onFilterChange('completed')}
          className={`px-4 py-2 rounded-lg text-sm ${
            filter === 'completed' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Выполненные
        </button>
        <button
          onClick={() => onFilterChange('overdue')}
          className={`px-4 py-2 rounded-lg text-sm ${
            filter === 'overdue' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Просроченные
        </button>
      </div>
      <input
        type="search"
        placeholder="Поиск заданий..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`px-4 py-2 rounded-lg text-sm ${getVariantClass('input', 'primary')}`}
      />
    </div>
  );
} 