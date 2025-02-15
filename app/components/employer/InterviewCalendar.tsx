"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface Interview {
  id: number;
  candidateName: string;
  position: string;
  date: string;
  time: string;
  duration: number; // в минутах
  status: 'scheduled' | 'completed' | 'cancelled';
  type: 'technical' | 'hr' | 'final';
}

interface InterviewCalendarProps {
  onSchedule?: () => void;
}

const mockInterviews: Interview[] = [
  {
    id: 1,
    candidateName: 'Александр Иванов',
    position: 'Frontend Developer',
    date: '2024-03-20',
    time: '10:00',
    duration: 60,
    status: 'scheduled',
    type: 'technical'
  },
  {
    id: 2,
    candidateName: 'Мария Петрова',
    position: 'Backend Developer',
    date: '2024-03-20',
    time: '14:00',
    duration: 45,
    status: 'scheduled',
    type: 'hr'
  }
];

export function InterviewCalendar({ onSchedule }: InterviewCalendarProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const getStatusColor = (status: Interview['status']) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    }
  };

  const getTypeColor = (type: Interview['type']) => {
    switch (type) {
      case 'technical':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'hr':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'final':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    }
  };

  const getTypeLabel = (type: Interview['type']) => {
    switch (type) {
      case 'technical':
        return 'Техническое';
      case 'hr':
        return 'HR';
      case 'final':
        return 'Финальное';
    }
  };

  return (
    <div className="space-y-6">
      {/* Заголовок и фильтры */}
      <div className="flex justify-between items-center">
        <h2 className={`text-xl font-semibold ${getColorClass('text.primary')}`}>
          Календарь собеседований
        </h2>
        <div className="flex gap-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={`px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
          />
          <button
            type="button"
            onClick={onSchedule}
            className={`px-4 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
          >
            Запланировать
          </button>
        </div>
      </div>

      {/* Временная шкала */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <div className="grid grid-cols-1 gap-4">
          {mockInterviews
            .filter(interview => interview.date === selectedDate)
            .sort((a, b) => a.time.localeCompare(b.time))
            .map(interview => (
              <div
                key={interview.id}
                className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-20 text-center">
                  <div className={`text-sm font-medium ${getColorClass('text.primary')}`}>
                    {interview.time}
                  </div>
                  <div className={`text-xs ${getColorClass('text.secondary')}`}>
                    {interview.duration} мин
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`font-medium ${getColorClass('text.primary')}`}>
                        {interview.candidateName}
                      </h3>
                      <p className={`text-sm ${getColorClass('text.secondary')}`}>
                        {interview.position}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(interview.type)}`}>
                        {getTypeLabel(interview.type)}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(interview.status)}`}>
                        {interview.status === 'scheduled' ? 'Запланировано' : 
                         interview.status === 'completed' ? 'Завершено' : 'Отменено'}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`px-3 py-1 text-sm ${getVariantClass('button', 'outline')} rounded-lg`}
                    >
                      Присоединиться
                    </button>
                    <button
                      type="button"
                      className={`px-3 py-1 text-sm ${getVariantClass('button', 'outline')} rounded-lg`}
                    >
                      Перенести
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1 text-sm text-red-600 hover:text-red-700 rounded-lg"
                    >
                      Отменить
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 