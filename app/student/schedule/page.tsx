"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { WeekSchedule } from '@/app/components/student/schedule/WeekSchedule';
import { ScheduleFilters } from '@/app/components/student/schedule/ScheduleFilters';
import { Schedule } from '@/app/types/schedule';

export default function SchedulePage() {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [currentWeek, setCurrentWeek] = useState<'current' | 'next'>('current');
  const [view, setView] = useState<'week' | 'list'>('week');

  // Моковые данные расписания
  const schedule: Schedule = {
    currentWeek: [
      {
        day: 'Понедельник',
        date: '2024-05-13',
        classes: [
          {
            id: 1,
            subject: 'Математический анализ',
            type: 'lecture',
            time: { start: '09:00', end: '10:30' },
            location: 'Аудитория 305',
            teacher: 'Иванов И.И.',
            materials: [
              { id: 1, name: 'Лекция 12.pdf', url: '#' }
            ]
          },
          {
            id: 2,
            subject: 'Программирование',
            type: 'practice',
            time: { start: '10:45', end: '12:15' },
            location: 'Компьютерный класс 401',
            teacher: 'Петров П.П.',
            assignment: {
              id: 1,
              title: 'Лабораторная работа №5',
              deadline: '2024-05-20T23:59:59'
            }
          }
        ]
      },
      // Добавьте остальные дни недели
    ],
    nextWeek: [
      // Данные на следующую неделю
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Заголовок */}
        <div>
          <h1 className={`text-2xl font-bold mb-2 ${getColorClass('text.primary')}`}>
            Расписание занятий
          </h1>
          <p className={`${getColorClass('text.secondary')}`}>
            Просматривайте расписание и управляйте своим учебным процессом
          </p>
        </div>

        {/* Фильтры и переключатели */}
        <ScheduleFilters
          currentWeek={currentWeek}
          onWeekChange={setCurrentWeek}
          view={view}
          onViewChange={setView}
        />

        {/* Расписание */}
        <WeekSchedule
          schedule={currentWeek === 'current' ? schedule.currentWeek : schedule.nextWeek}
          view={view}
        />
      </div>
    </div>
  );
} 