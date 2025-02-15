"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import RoleSelectPopup from '@/app/components/common/RoleSelectPopup';
import { AuthPopup } from '@/app/components/common/AuthPopup';
import { UniversityRequestPopup } from '@/app/components/common/UniversityRequestPopup';
// Временно закомментируем импорт аналитики
// import { UniversityAnalytics } from '@/app/components/university/UniversityAnalytics';

const features = [
  {
    icon: 'academic',
    title: 'landing.features.academic.title',
    description: 'landing.features.academic.description'
  },
  {
    icon: 'career',
    title: 'landing.features.career.title',
    description: 'landing.features.career.description'
  },
  {
    icon: 'analytics',
    title: 'landing.features.analytics.title',
    description: 'landing.features.analytics.description'
  }
] as const;

const statistics = [
  {
    value: '10,000+',
    label: 'landing.stats.students'
  },
  {
    value: '50+',
    label: 'landing.stats.universities'
  },
  {
    value: '200+',
    label: 'landing.stats.employers'
  }
] as const;

const tabs = [
  { id: 'dashboard', label: 'Дашборд' },
  { id: 'analytics', label: 'Аналитика университета' },
];

const studentActivity = [
  { month: 'Янв', activeUsers: 120, eventParticipation: 80, internshipApplications: 30 },
  { month: 'Фев', activeUsers: 150, eventParticipation: 90, internshipApplications: 40 },
  { month: 'Мар', activeUsers: 180, eventParticipation: 100, internshipApplications: 50 },
  // добавьте данные за другие месяцы...
];

const eventsData = {
  totalEvents: 25,
  participatedStudents: 200,
  certificatesIssued: 150,
  eventsByType: [
    { type: 'Вебинар', count: 10 },
    { type: 'Мастер-класс', count: 8 },
    { type: 'Конференция', count: 7 },
  ],
};

const internshipStats = {
  totalInternships: 15,
  activeInterns: 10,
  bySpecialty: [
    { specialty: 'Программирование', count: 5 },
    { specialty: 'Дизайн', count: 3 },
    { specialty: 'Маркетинг', count: 2 },
  ],
  byCompany: [
    { company: 'Компания A', count: 5 },
    { company: 'Компания B', count: 4 },
    { company: 'Компания C', count: 3 },
  ],
  byDirection: [
    { direction: 'IT', count: 8 },
    { direction: 'Дизайн', count: 4 },
    { direction: 'Маркетинг', count: 3 },
  ],
};

const employmentStats = {
  totalGraduates: 100,
  employedGraduates: 75,
  employmentRate: 75,
  byIndustry: [
    { industry: 'IT', count: 30 },
    { industry: 'Дизайн', count: 20 },
    { industry: 'Маркетинг', count: 15 },
  ],
  threeYearTrend: [
    { year: '2021', employmentRate: 70 },
    { year: '2022', employmentRate: 75 },
    { year: '2023', employmentRate: 80 },
  ],
};

const universityRanking = {
  employmentRank: 5,
  totalUniversities: 50,
  eventParticipationRank: 10,
  comparisonData: [
    { metric: 'Трудоустройство', value: 85, averageValue: 75 },
    { metric: 'Посещение мероприятий', value: 70, averageValue: 60 },
    { metric: 'Стажировки', value: 90, averageValue: 80 },
  ],
};

export default function LandingPage() {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [isRolePopupOpen, setIsRolePopupOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isUniversityRequestOpen, setIsUniversityRequestOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="text-center">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4">
                NAVYK
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
                {t('landing.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsRolePopupOpen(true)}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  {t('landing.hero.tryDemo')}
                </button>
                <button
                  onClick={() => setIsAuthPopupOpen(true)}
                  className="px-8 py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-400 transition-colors"
                >
                  {t('landing.hero.getStarted')}
                </button>
                <button
                  onClick={() => setIsUniversityRequestOpen(true)}
                  className="px-8 py-4 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  {t('landing.hero.connectUniversity')}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Декоративный фон */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none" />
      </div>

      {/* Статистика */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${getColorClass('text.primary')}`}>
                  {stat.value}
                </div>
                <div className={getColorClass('text.secondary')}>
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Особенности */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${getColorClass('text.primary')}`}>
            {t('landing.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${getVariantClass('card', 'primary')} p-6 text-center`}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  {/* Иконки особенностей */}
                  {feature.icon === 'academic' && (
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                    </svg>
                  )}
                  {/* Добавьте другие иконки для career и analytics */}
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${getColorClass('text.primary')}`}>
                  {t(feature.title)}
                </h3>
                <p className={getColorClass('text.secondary')}>
                  {t(feature.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('landing.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('landing.cta.description')}
          </p>
          <Link
            href="/auth/register"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            {t('landing.cta.button')}
          </Link>
        </div>
      </div>

      {/* Модальные окна */}
      <RoleSelectPopup 
        isOpen={isRolePopupOpen}
        onClose={() => setIsRolePopupOpen(false)}
      />
      <AuthPopup 
        isOpen={isAuthPopupOpen}
        onClose={() => setIsAuthPopupOpen(false)}
      />
      <UniversityRequestPopup
        isOpen={isUniversityRequestOpen}
        onClose={() => setIsUniversityRequestOpen(false)}
      />

      {/* В зависимости от активной вкладки отображаем соответствующий контент */}
      {activeTab === 'analytics' && (
        // Временно скроем компонент аналитики
        // <UniversityAnalytics />
      )}
    </div>
  );
}
