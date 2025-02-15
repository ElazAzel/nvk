"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RoleLayout } from '@/app/components/common/RoleLayout';
import { SearchFilters } from '@/app/components/employer/SearchFilters';
import { InterviewCalendar } from '@/app/components/employer/InterviewCalendar';
import { InterviewScheduleModal } from '@/app/components/employer/InterviewScheduleModal';
import { InternshipForm } from '@/app/components/employer/InternshipForm';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { AnalyticsCharts } from '@/app/components/employer/AnalyticsCharts';

const employerStats = [
  {
    label: 'Активные вакансии',
    value: '12',
    change: '+3',
    trend: 'up' as const
  },
  {
    label: 'Отклики',
    value: '156',
    change: '+28',
    trend: 'up' as const
  },
  {
    label: 'Стажеры',
    value: '8',
    change: '+2',
    trend: 'up' as const
  },
  {
    label: 'Партнерские программы',
    value: '3',
  }
];

const employerActions = [
  {
    label: 'Добавить вакансию',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>`,
    onClick: () => {}
  },
  {
    label: 'Календарь собеседований',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>`,
    onClick: () => {}
  }
];

// Моковые данные для вакансий
const vacancies = [
  {
    id: 1,
    title: 'Frontend Developer',
    type: 'Стажировка',
    location: 'Гибрид',
    responses: 45,
    views: 230,
    status: 'active'
  },
  {
    id: 2,
    title: 'Backend Developer',
    type: 'Полная занятость',
    location: 'Офис',
    responses: 32,
    views: 180,
    status: 'active'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    type: 'Стажировка',
    location: 'Удаленно',
    responses: 28,
    views: 150,
    status: 'active'
  }
];

// Моковые данные для кандидатов
const candidates = [
  {
    id: 1,
    name: 'Александр Иванов',
    position: 'Frontend Developer',
    university: 'AITU',
    gpa: 3.8,
    status: 'interview',
    avatar: '/avatars/1.jpg'
  },
  {
    id: 2,
    name: 'Мария Петрова',
    position: 'Backend Developer',
    university: 'AITU',
    gpa: 3.9,
    status: 'review',
    avatar: '/avatars/2.jpg'
  },
  {
    id: 3,
    name: 'Дмитрий Сидоров',
    position: 'UI/UX Designer',
    university: 'AITU',
    gpa: 3.7,
    status: 'new',
    avatar: '/avatars/3.jpg'
  }
];

// Добавим моковые данные для стажировок
const internships = [
  {
    id: 1,
    title: 'Программа стажировки Frontend',
    duration: '3 месяца',
    startDate: '2024-06-01',
    spots: 5,
    applications: 28,
    status: 'active',
    mentors: ['Александр Иванов', 'Мария Петрова']
  },
  {
    id: 2,
    title: 'Backend Development',
    duration: '6 месяцев',
    startDate: '2024-07-01',
    spots: 3,
    applications: 15,
    status: 'draft',
    mentors: ['Дмитрий Сидоров']
  }
];

// Добавим моковые данные для аналитики
const analytics = {
  monthlyStats: [
    { month: 'Янв', applications: 45, hires: 3 },
    { month: 'Фев', applications: 52, hires: 4 },
    { month: 'Мар', applications: 68, hires: 5 },
    { month: 'Апр', applications: 75, hires: 6 }
  ],
  sourceStats: [
    { source: 'Университеты', count: 156 },
    { source: 'LinkedIn', count: 89 },
    { source: 'Рекомендации', count: 45 },
    { source: 'Другое', count: 23 }
  ]
};

// Определите типы вместо any
interface FilterData {
  keyword: string;
  location: string;
  // ... другие поля
}

export default function EmployerPage() {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('vacancies');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isInternshipFormOpen, setIsInternshipFormOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const tabs = [
    { id: 'vacancies', label: 'Вакансии' },
    { id: 'candidates', label: 'Кандидаты' },
    { id: 'interviews', label: 'Собеседования' },
    { id: 'internships', label: 'Стажировки' },
    { id: 'analytics', label: 'Аналитика' }
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  // Используйте типизированные параметры
  const handleFilterChange = (filters: FilterData) => {
    console.log('Applied filters:', filters);
  };

  const handleScheduleInterview = (data: any) => {
    console.log('Schedule interview:', data);
    setIsScheduleModalOpen(false);
  };

  const handleCreateInternship = (data: any) => {
    console.log('Create internship:', data);
    setIsInternshipFormOpen(false);
  };

  return (
    <RoleLayout
      role="employer"
      stats={employerStats}
      actions={employerActions}
    >
      <div className="min-h-screen p-6">
        {/* Статистика */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {employerStats.map((stat, index) => (
            <div
              key={index}
              className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-sm font-medium ${getColorClass('text.secondary')}`}>
                  {stat.label}
                </h3>
                {stat.trend && (
                  <span className={`px-2 py-1 text-sm rounded-full ${
                    stat.trend === 'up' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {stat.change}
                  </span>
                )}
              </div>
              <p className={`text-2xl font-semibold ${getColorClass('text.primary')}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Табы */}
        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Контент табов */}
        <div className="space-y-6">
          {/* Поиск и фильтры */}
          {(activeTab === 'vacancies' || activeTab === 'candidates') && (
            <SearchFilters
              type={activeTab === 'vacancies' ? 'vacancies' : 'candidates'}
              onSearch={handleSearch}
              onFilter={handleFilterChange}
            />
          )}

          {/* Собеседования */}
          {activeTab === 'interviews' && (
            <InterviewCalendar 
              onSchedule={() => setIsScheduleModalOpen(true)} 
            />
          )}

          {/* Стажировки */}
          {activeTab === 'internships' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className={`text-xl font-semibold ${getColorClass('text.primary')}`}>
                  Программы стажировок
                </h2>
                <button
                  type="button"
                  onClick={() => setIsInternshipFormOpen(true)}
                  className={`px-4 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
                >
                  Создать программу
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internships.map((internship) => (
                  <div
                    key={internship.id}
                    className={`${getVariantClass('card', 'primary')} p-6 rounded-lg hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`font-medium ${getColorClass('text.primary')}`}>
                          {internship.title}
                        </h3>
                        <div className="flex gap-2 mt-1">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {internship.duration}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            internship.status === 'active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                          }`}>
                            {internship.status === 'active' ? 'Активна' : 'Черновик'}
                          </span>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-500">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className={`text-sm ${getColorClass('text.secondary')}`}>
                          Начало
                        </p>
                        <p className={`font-medium ${getColorClass('text.primary')}`}>
                          {new Date(internship.startDate).toLocaleDateString('ru', {
                            day: 'numeric',
                            month: 'long'
                          })}
                        </p>
                      </div>
                      <div>
                        <p className={`text-sm ${getColorClass('text.secondary')}`}>
                          Мест
                        </p>
                        <p className={`font-medium ${getColorClass('text.primary')}`}>
                          {internship.spots}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className={`text-sm ${getColorClass('text.secondary')} mb-1`}>
                        Менторы
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {internship.mentors.map((mentor, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                          >
                            {mentor}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className={`text-sm ${getColorClass('text.secondary')}`}>
                          Заявок
                        </p>
                        <p className={`font-medium ${getColorClass('text.primary')}`}>
                          {internship.applications}
                        </p>
                      </div>
                      <button
                        className={`px-4 py-2 ${
                          internship.status === 'active'
                            ? getVariantClass('button', 'primary')
                            : getVariantClass('button', 'outline')
                        } rounded-lg text-sm`}
                      >
                        {internship.status === 'active' ? 'Просмотр заявок' : 'Опубликовать'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Аналитика */}
          {activeTab === 'analytics' && (
            <AnalyticsCharts
              monthlyStats={analytics.monthlyStats}
              sourceStats={analytics.sourceStats}
            />
          )}
        </div>

        {/* Модальные окна */}
        {isScheduleModalOpen && (
          <InterviewScheduleModal
            isOpen={isScheduleModalOpen}
            onClose={() => setIsScheduleModalOpen(false)}
            onSubmit={handleScheduleInterview}
            candidates={candidates}
          />
        )}

        {isInternshipFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-xl font-semibold ${getColorClass('text.primary')}`}>
                  Создание программы стажировки
                </h2>
                <button
                  onClick={() => setIsInternshipFormOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <InternshipForm
                onSubmit={handleCreateInternship}
                onCancel={() => setIsInternshipFormOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </RoleLayout>
  );
} 