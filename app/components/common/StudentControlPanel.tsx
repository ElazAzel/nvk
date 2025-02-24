"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

// Моковые данные студента (в реальном приложении будут из API)
const studentData = {
  name: 'Александр Петров',
  studentId: '2021CS0123',
  notifications: 3,
  nextClass: {
    subject: 'Web Development',
    time: '10:30',
    room: '305'
  },
  todayClasses: 3,
  activeAssignments: 5
} as const;

export const StudentControlPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="relative">
      {/* Кнопка управления */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-50"
        aria-label={t('student.control.toggle')}
      >
        <div className="relative">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {studentData.notifications > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {studentData.notifications}
            </span>
          )}
        </div>
      </button>

      {/* Панель управления */}
      {isOpen && (
        <div className="fixed top-16 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          {/* Информация о студенте */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {studentData.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className={`font-medium ${getColorClass('text.primary')}`}>
                  {studentData.name}
                </h3>
                <p className={`text-sm ${getColorClass('text.secondary')}`}>
                  ID: {studentData.studentId}
                </p>
              </div>
            </div>
          </div>

          {/* Следующее занятие */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h4 className={`text-sm font-medium mb-2 ${getColorClass('text.secondary')}`}>
              {t('student.control.nextClass')}
            </h4>
            <div className={`${getVariantClass('card', 'secondary')} p-3`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className={`font-medium ${getColorClass('text.primary')}`}>
                    {studentData.nextClass.subject}
                  </p>
                  <p className={`text-sm mt-1 ${getColorClass('text.secondary')}`}>
                    {t('student.control.room')} {studentData.nextClass.room}
                  </p>
                </div>
                <span className={`px-2 py-1 text-sm rounded-md ${getColorClass('background.accent')} ${getColorClass('text.accent')}`}>
                  {studentData.nextClass.time}
                </span>
              </div>
            </div>
          </div>

          {/* Быстрая статистика */}
          <div className="p-4 grid grid-cols-2 gap-4">
            <div className={`${getVariantClass('card', 'secondary')} p-3 text-center`}>
              <p className={`text-2xl font-bold ${getColorClass('text.primary')}`}>
                {studentData.todayClasses}
              </p>
              <p className={`text-sm mt-1 ${getColorClass('text.secondary')}`}>
                {t('student.control.todayClasses')}
              </p>
            </div>
            <div className={`${getVariantClass('card', 'secondary')} p-3 text-center`}>
              <p className={`text-2xl font-bold ${getColorClass('text.primary')}`}>
                {studentData.activeAssignments}
              </p>
              <p className={`text-sm mt-1 ${getColorClass('text.secondary')}`}>
                {t('student.control.activeAssignments')}
              </p>
            </div>
          </div>

          {/* Быстрые действия */}
          <div className="p-4 grid grid-cols-2 gap-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/student/schedule"
              className={`${getVariantClass('button', 'outline')} py-2 px-4 rounded-lg text-center text-sm`}
            >
              {t('student.control.viewSchedule')}
            </Link>
            <Link
              href="/student/assignments"
              className={`${getVariantClass('button', 'primary')} py-2 px-4 rounded-lg text-center text-sm`}
            >
              {t('student.control.viewAssignments')}
            </Link>
          </div>
        </div>
      )}

      {/* Затемнение фона */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}; 