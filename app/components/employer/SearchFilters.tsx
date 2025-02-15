"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilter: (filters: any) => void;
  type: 'vacancies' | 'candidates';
}

export function SearchFilters({ onSearch, onFilter, type }: SearchFiltersProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: 'all',
    location: 'all',
    experience: 'all',
    status: 'all'
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder={`Поиск ${type === 'vacancies' ? 'вакансий' : 'кандидатов'}...`}
            className={`w-full px-4 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <button
          type="button"
          className={`px-4 py-2 ${getVariantClass('button', 'outline')} rounded-lg`}
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Фильтры
          </div>
        </button>
      </div>

      {isFiltersOpen && (
        <div className={`${getVariantClass('card', 'primary')} p-4 rounded-lg space-y-4`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {type === 'vacancies' ? (
              <>
                <div>
                  <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                    Тип
                  </label>
                  <select
                    className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  >
                    <option value="all">Все типы</option>
                    <option value="internship">Стажировка</option>
                    <option value="fulltime">Полная занятость</option>
                    <option value="parttime">Частичная занятость</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                    Локация
                  </label>
                  <select
                    className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  >
                    <option value="all">Все локации</option>
                    <option value="remote">Удаленно</option>
                    <option value="office">Офис</option>
                    <option value="hybrid">Гибрид</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                    Статус
                  </label>
                  <select
                    className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  >
                    <option value="all">Все статусы</option>
                    <option value="new">Новые</option>
                    <option value="review">На рассмотрении</option>
                    <option value="interview">Собеседование</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                    Опыт
                  </label>
                  <select
                    className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                    value={filters.experience}
                    onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                  >
                    <option value="all">Любой опыт</option>
                    <option value="intern">Стажер</option>
                    <option value="junior">Junior</option>
                    <option value="middle">Middle</option>
                  </select>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className={`px-4 py-2 ${getVariantClass('button', 'outline')} rounded-lg`}
              onClick={() => {
                setFilters({
                  type: 'all',
                  location: 'all',
                  experience: 'all',
                  status: 'all'
                });
                onFilter({
                  type: 'all',
                  location: 'all',
                  experience: 'all',
                  status: 'all'
                });
              }}
            >
              Сбросить
            </button>
            <button
              type="button"
              className={`px-4 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
              onClick={() => onFilter(filters)}
            >
              Применить
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 