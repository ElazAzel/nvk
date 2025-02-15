"use client";
import { useState } from 'react';

export default function NotificationsFilter() {
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all',
    period: 'all'
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="font-semibold mb-4">Фильтры</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Тип</label>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Все типы</option>
            <option value="job">Вакансии</option>
            <option value="course">Курсы</option>
            <option value="mentor">Менторы</option>
            <option value="system">Системные</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Статус</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Все</option>
            <option value="unread">Непрочитанные</option>
            <option value="read">Прочитанные</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Период</label>
          <select
            value={filters.period}
            onChange={(e) => setFilters({ ...filters, period: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="all">Все время</option>
            <option value="today">Сегодня</option>
            <option value="week">За неделю</option>
            <option value="month">За месяц</option>
          </select>
        </div>
      </div>
    </div>
  );
} 