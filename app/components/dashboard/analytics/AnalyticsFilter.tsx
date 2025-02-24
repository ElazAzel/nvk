"use client";
import { useState } from 'react';

interface FilterState {
  year: string;
  faculty: string;
  specialization: string;
  employmentStatus: string;
  period: string;
}

export default function AnalyticsFilter() {
  const [filters, setFilters] = useState<FilterState>({
    year: '2023',
    faculty: 'all',
    specialization: 'all',
    employmentStatus: 'all',
    period: 'year'
  });

  const faculties = [
    "Все факультеты",
    "Информационные технологии",
    "Экономика и бизнес",
    "Инженерия",
    "Естественные науки"
  ];

  const specializations = [
    "Все специальности",
    "Computer Science",
    "Software Engineering",
    "Data Science",
    "Информационные системы"
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Год выпуска</label>
          <select
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Факультет</label>
          <select
            value={filters.faculty}
            onChange={(e) => setFilters({ ...filters, faculty: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            {faculties.map((faculty) => (
              <option key={faculty} value={faculty.toLowerCase()}>
                {faculty}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Специальность</label>
          <select
            value={filters.specialization}
            onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            {specializations.map((spec) => (
              <option key={spec} value={spec.toLowerCase()}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Статус</label>
          <select
            value={filters.employmentStatus}
            onChange={(e) => setFilters({ ...filters, employmentStatus: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Все статусы</option>
            <option value="employed">Трудоустроены</option>
            <option value="searching">Ищут работу</option>
            <option value="studying">Продолжают обучение</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Период</label>
          <select
            value={filters.period}
            onChange={(e) => setFilters({ ...filters, period: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="year">За год</option>
            <option value="6months">За 6 месяцев</option>
            <option value="3months">За 3 месяца</option>
            <option value="month">За месяц</option>
          </select>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Найдено выпускников: 1,234
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setFilters({
                year: '2023',
                faculty: 'all',
                specialization: 'all',
                employmentStatus: 'all',
                period: 'year'
              })}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Сбросить фильтры
            </button>
            <button
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Применить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 