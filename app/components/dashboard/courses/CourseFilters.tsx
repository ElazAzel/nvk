"use client";
import { useState } from "react";

export default function CourseFilters() {
  const [filters, setFilters] = useState({
    category: "",
    level: "",
    duration: "",
    price: ""
  });

  return (
    <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold mb-4">Фильтры</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Категория
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
              <option value="">Все категории</option>
              <option value="programming">Программирование</option>
              <option value="design">Дизайн</option>
              <option value="marketing">Маркетинг</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Уровень
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={filters.level}
              onChange={(e) => setFilters({ ...filters, level: e.target.value })}
            >
              <option value="">Все уровни</option>
              <option value="beginner">Начальный</option>
              <option value="intermediate">Средний</option>
              <option value="advanced">Продвинутый</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Длительность
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={filters.duration}
              onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
            >
              <option value="">Любая длительность</option>
              <option value="0-1">До 1 месяца</option>
              <option value="1-3">1-3 месяца</option>
              <option value="3+">Более 3 месяцев</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Стоимость
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={filters.price}
              onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            >
              <option value="">Любая стоимость</option>
              <option value="free">Бесплатные</option>
              <option value="paid">Платные</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
} 