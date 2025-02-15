"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RoleLayout } from '@/app/components/common/RoleLayout';
import { CoursesList } from '@/app/components/student/CoursesList';
import { EventsList } from '@/app/components/student/EventsList';
import { MentorsList } from '@/app/components/student/MentorsList';
import { Resume } from '@/app/components/student/Resume';
import { Certificates } from '@/app/components/student/Certificates';
import { FAQ } from '@/app/components/student/FAQ';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { StudentDashboard } from '@/app/components/student/StudentDashboard';
import { StudentRoadmap } from '@/app/components/student/StudentRoadmap';
import { StudentAchievements } from '@/app/components/student/StudentAchievements';
import { StudentAnalytics } from '@/app/components/student/StudentAnalytics';

const studentStats = [
  {
    label: 'Активные курсы',
    value: '6',
    change: '+2',
    trend: 'up' as const
  },
  {
    label: 'Средний балл',
    value: '3.8',
    change: '+0.2',
    trend: 'up' as const
  },
  {
    label: 'Посещаемость',
    value: '92%',
    change: '-3%',
    trend: 'down' as const
  },
  {
    label: 'Выполнено заданий',
    value: '24/30',
  }
];

const studentActions = [
  {
    label: 'Расписание',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>`,
    onClick: () => {}
  },
  {
    label: 'Уведомления',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>`,
    onClick: () => {}
  }
];

// Моковые данные для рекомендаций
const recommendations = [
  {
    id: 1,
    type: 'vacancy',
    title: 'Junior Frontend Developer',
    company: 'Kaspi Bank',
    match: 90,
    image: '/companies/kaspi.png'
  },
  {
    id: 2,
    type: 'course',
    title: 'React Advanced',
    provider: 'Coursera',
    match: 85,
    image: '/courses/react.png'
  },
  {
    id: 3,
    type: 'event',
    title: 'Tech Conference 2024',
    organizer: 'AITU',
    match: 75,
    image: '/events/conf.png'
  }
];

// Моковые данные для уведомлений
const notifications = [
  {
    id: 1,
    text: 'Новая вакансия в Kaspi Bank',
    time: '2 часа назад',
    icon: 'briefcase'
  },
  {
    id: 2,
    text: 'Дедлайн по проекту через 2 дня',
    time: '5 часов назад',
    icon: 'clock'
  },
  {
    id: 3,
    text: 'Новый курс по вашему профилю',
    time: '1 день назад',
    icon: 'academic'
  }
];

type TabType = 'dashboard' | 'roadmap' | 'achievements' | 'analytics';

export default function StudentPage() {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const tabs = [
    { id: 'dashboard', label: 'Дашборд' },
    { id: 'roadmap', label: 'Карьерный путь' },
    { id: 'achievements', label: 'Достижения' },
    { id: 'analytics', label: 'Аналитика' }
  ];

  return (
    <RoleLayout
      role="student"
      stats={studentStats}
      actions={studentActions}
    >
      {/* Приветствие и прогресс */}
      <div className="mb-8 animate-fadeIn">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-2xl font-bold ${getColorClass('text.primary')}`}>
              Привет, Александр! 👋
            </h2>
            <button
              type="button"
              className={`px-4 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
            >
              Посмотреть все задачи
            </button>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{ width: '50%' }}
            />
          </div>
          <p className={getColorClass('text.secondary')}>
            Вы выполнили 5 из 10 задач на этой неделе
          </p>
        </div>
      </div>

      {/* Табы */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`${
                  activeTab === tab.id
                    ? `${getColorClass('text.accent')} border-b-2 border-blue-500`
                    : getColorClass('text.secondary')
                } whitespace-nowrap py-4 px-1 font-medium hover:text-blue-600 hover:border-blue-300`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Контент табов */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <StudentDashboard />}
        {activeTab === 'roadmap' && <StudentRoadmap />}
        {activeTab === 'achievements' && <StudentAchievements />}
        {activeTab === 'analytics' && <StudentAnalytics />}
      </div>
    </RoleLayout>
  );
} 