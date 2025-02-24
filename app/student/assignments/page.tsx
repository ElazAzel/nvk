"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { AssignmentList } from '@/app/components/student/assignments/AssignmentList';
import { AssignmentFilters } from '@/app/components/student/assignments/AssignmentFilters';
import { Assignment } from '@/app/types/assignments';

export default function AssignmentsPage() {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed' | 'overdue'>('all');
  const [search, setSearch] = useState('');

  // Моковые данные заданий
  const assignments: Assignment[] = [
    {
      id: 1,
      title: 'Курсовая работа по программированию',
      subject: 'Программирование',
      description: 'Разработка веб-приложения с использованием React и Node.js',
      deadline: '2024-05-20T23:59:59',
      status: 'active',
      progress: 65,
      priority: 'high',
      type: 'project',
      attachments: [
        { id: 1, name: 'Техническое задание.pdf', url: '#' },
        { id: 2, name: 'Примеры работ.zip', url: '#' }
      ]
    },
    {
      id: 2,
      title: 'Лабораторная работа №5',
      subject: 'Физика',
      description: 'Исследование колебательных процессов',
      deadline: '2024-05-15T23:59:59',
      status: 'completed',
      progress: 100,
      priority: 'medium',
      type: 'laboratory',
      grade: 95
    },
    // Добавьте другие задания
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Заголовок и статистика */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className={`text-2xl font-bold mb-2 ${getColorClass('text.primary')}`}>
              Задания
            </h1>
            <p className={`${getColorClass('text.secondary')}`}>
              Управляйте своими заданиями и отслеживайте прогресс
            </p>
          </div>
          <div className="flex gap-4">
            <div className={`${getVariantClass('card', 'primary')} p-4 rounded-lg text-center`}>
              <div className="text-2xl font-bold text-green-500">12</div>
              <div className={`text-sm ${getColorClass('text.secondary')}`}>Выполнено</div>
            </div>
            <div className={`${getVariantClass('card', 'primary')} p-4 rounded-lg text-center`}>
              <div className="text-2xl font-bold text-yellow-500">5</div>
              <div className={`text-sm ${getColorClass('text.secondary')}`}>В процессе</div>
            </div>
            <div className={`${getVariantClass('card', 'primary')} p-4 rounded-lg text-center`}>
              <div className="text-2xl font-bold text-red-500">2</div>
              <div className={`text-sm ${getColorClass('text.secondary')}`}>Просрочено</div>
            </div>
          </div>
        </div>

        {/* Фильтры и поиск */}
        <AssignmentFilters
          filter={filter}
          onFilterChange={setFilter}
          search={search}
          onSearchChange={setSearch}
        />

        {/* Список заданий */}
        <AssignmentList assignments={assignments} filter={filter} search={search} />
      </div>
    </div>
  );
} 