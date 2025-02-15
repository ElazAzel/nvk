"use client";
import { useState } from 'react';

interface FilterState {
  skills: string[];
  experience: string;
  education: string;
  location: string;
  availability: string;
  salary: string;
}

export default function TalentsFilter() {
  const [filters, setFilters] = useState<FilterState>({
    skills: [],
    experience: 'all',
    education: 'all',
    location: 'all',
    availability: 'all',
    salary: 'all'
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Навыки</label>
          <input
            type="text"
            placeholder="Например: React, TypeScript"
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Опыт работы</label>
          <select
            value={filters.experience}
            onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Любой опыт</option>
            <option value="0-1">До 1 года</option>
            <option value="1-3">1-3 года</option>
            <option value="3-5">3-5 лет</option>
            <option value="5+">Более 5 лет</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Образование</label>
          <select
            value={filters.education}
            onChange={(e) => setFilters({ ...filters, education: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Любое образование</option>
            <option value="bachelor">Бакалавриат</option>
            <option value="master">Магистратура</option>
            <option value="phd">PhD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Локация</label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Все города</option>
            <option value="almaty">Алматы</option>
            <option value="astana">Астана</option>
            <option value="remote">Удаленно</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Доступность</label>
          <select
            value={filters.availability}
            onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Любая доступность</option>
            <option value="active">Активный поиск</option>
            <option value="passive">Рассмотрит предложения</option>
            <option value="employed">Трудоустроен</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Зарплатные ожидания</label>
          <select
            value={filters.salary}
            onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Любая зарплата</option>
            <option value="0-200">До 200,000 ₸</option>
            <option value="200-500">200,000 - 500,000 ₸</option>
            <option value="500-1000">500,000 - 1,000,000 ₸</option>
            <option value="1000+">Более 1,000,000 ₸</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="text-sm text-gray-600">
          Найдено кандидатов: 342
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setFilters({
              skills: [],
              experience: 'all',
              education: 'all',
              location: 'all',
              availability: 'all',
              salary: 'all'
            })}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Сбросить
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Применить
          </button>
        </div>
      </div>
    </div>
  );
} 