"use client";
import { useState } from 'react';

export default function MentorFilters() {
  const [filters, setFilters] = useState({
    specialization: "",
    experience: "",
    price: "",
    availability: ""
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Фильтры</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Специализация
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={filters.specialization}
            onChange={(e) => setFilters({ ...filters, specialization: e.target.value })}
          >
            <option value="">Все специализации</option>
            <option value="frontend">Frontend разработка</option>
            <option value="backend">Backend разработка</option>
            <option value="design">UI/UX дизайн</option>
            <option value="mobile">Мобильная разработка</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Опыт работы
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={filters.experience}
            onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
          >
            <option value="">Любой опыт</option>
            <option value="3-5">3-5 лет</option>
            <option value="5-10">5-10 лет</option>
            <option value="10+">Более 10 лет</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Стоимость сессии
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          >
            <option value="">Любая стоимость</option>
            <option value="0-5000">До 5000 ₸</option>
            <option value="5000-10000">5000-10000 ₸</option>
            <option value="10000+">От 10000 ₸</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Доступность
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={filters.availability}
            onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
          >
            <option value="">Любая доступность</option>
            <option value="available">Сейчас доступен</option>
            <option value="this-week">На этой неделе</option>
            <option value="next-week">На следующей неделе</option>
          </select>
        </div>
      </div>
    </div>
  );
} 