"use client";

import { motion } from 'framer-motion';
import { StudentDashboard } from './StudentDashboard';
import { 
  RocketLaunchIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

const CTACards = [
  {
    title: 'Начните обучение',
    description: 'Выберите курс и начните свой путь к успеху уже сегодня',
    icon: RocketLaunchIcon,
    action: 'Выбрать курс',
    href: '/courses',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Найдите ментора',
    description: 'Получите персональную поддержку от экспертов индустрии',
    icon: UserGroupIcon,
    action: 'Найти ментора',
    href: '/mentors',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Получите сертификат',
    description: 'Подтвердите свои навыки официальным сертификатом',
    icon: AcademicCapIcon,
    action: 'Узнать больше',
    href: '/certificates',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Участвуйте в конкурсах',
    description: 'Соревнуйтесь с другими студентами и выигрывайте призы',
    icon: TrophyIcon,
    action: 'Смотреть конкурсы',
    href: '/competitions',
    gradient: 'from-orange-500 to-red-600'
  }
];

export function StudentPageContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero секция */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 pb-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-700/90 dark:from-blue-900/90 dark:to-indigo-900/90" />
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Добро пожаловать в <span className="text-blue-200">NAVYK</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
              Ваша персональная платформа для профессионального роста и развития
            </p>
          </motion.div>
        </div>

        {/* Волнистый разделитель */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 fill-current text-gray-50 dark:text-gray-900"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </motion.div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 pb-12">
        {/* CTA карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {CTACards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`
                relative group overflow-hidden rounded-xl bg-gradient-to-br ${card.gradient}
                p-6 shadow-lg hover:shadow-xl transition-all duration-300
                hover:-translate-y-1
              `}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 
                bg-white/10 rounded-full blur-2xl group-hover:scale-150 
                transition-transform duration-500" 
              />
              <card.icon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                {card.description}
              </p>
              <div className="flex items-center text-white group-hover:gap-2 transition-all duration-300">
                <span className="text-sm font-medium">{card.action}</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Дашборд */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <StudentDashboard />
        </motion.div>
      </div>
    </div>
  );
} 