"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpenIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  ClockIcon,
  StarIcon,
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { CoursesTab } from './tabs/CoursesTab';
import { MentorsTab } from './tabs/MentorsTab';
import { ScheduleTab } from './tabs/ScheduleTab';
import { ProgressTab } from './tabs/ProgressTab';
import { ResourcesTab } from './tabs/ResourcesTab';
import { CommunityTab } from './tabs/CommunityTab';
import { ProjectsTab } from './tabs/ProjectsTab';
import { RewardsTab } from './tabs/RewardsTab';
import { Course, Mentor, ScheduleDay, ProgressData } from './types';

const tabs = [
  { 
    id: 'courses', 
    name: 'Мои курсы', 
    icon: BookOpenIcon,
    description: 'Активные и доступные курсы'
  },
  { 
    id: 'mentors', 
    name: 'Менторы', 
    icon: UserGroupIcon,
    description: 'Найти ментора и записаться на консультацию'
  },
  { 
    id: 'schedule', 
    name: 'Расписание', 
    icon: ClockIcon,
    description: 'Календарь занятий и событий'
  },
  { 
    id: 'progress', 
    name: 'Прогресс', 
    icon: AcademicCapIcon,
    description: 'Ваши достижения и статистика'
  },
  { 
    id: 'resources', 
    name: 'Ресурсы', 
    icon: DocumentTextIcon,
    description: 'Полезные материалы и документация'
  },
  { 
    id: 'community', 
    name: 'Сообщество', 
    icon: ChatBubbleLeftIcon,
    description: 'Общение с другими студентами'
  },
  { 
    id: 'projects', 
    name: 'Проекты', 
    icon: StarIcon,
    description: 'Ваши учебные и реальные проекты'
  },
  { 
    id: 'rewards', 
    name: 'Награды', 
    icon: CurrencyDollarIcon,
    description: 'Бонусы и реферальная программа'
  }
];

// Обновляем моковые данные
const courses: Course[] = [
  {
    id: 1,
    title: 'Основы Python',
    type: 'free',
    provider: 'NAVYK',
    progress: 75,
    nextLesson: 'Работа с API',
    instructor: 'Александр Иванов',
    studentsCount: 234,
    rating: 4.8,
    description: 'Научитесь создавать backend приложения с нуля',
    duration: '2 месяца',
    lessons: 24,
    image: '/courses/python.jpg'
  },
  {
    id: 2,
    title: 'JavaScript Pro',
    type: 'premium',
    provider: 'NAVYK',
    progress: 45,
    nextLesson: 'React Hooks',
    instructor: 'Мария Петрова',
    studentsCount: 456,
    rating: 4.9,
    description: 'Продвинутый курс по современному JavaScript и React',
    duration: '3 месяца',
    lessons: 36,
    image: '/courses/javascript.jpg',
    price: 49900
  },
  {
    id: 3,
    title: 'Data Science',
    type: 'partner',
    provider: 'Yandex',
    progress: 15,
    nextLesson: 'Pandas Basics',
    instructor: 'Дмитрий Сидоров',
    studentsCount: 789,
    rating: 4.7,
    description: 'От анализа данных до машинного обучения',
    duration: '6 месяцев',
    lessons: 48,
    image: '/courses/data-science.jpg',
    price: 89900,
    referralBonus: 5000
  }
];

const mentors: Mentor[] = [
  {
    id: 1,
    name: 'Александр Иванов',
    position: 'Senior Python Developer',
    company: 'Yandex',
    available: true,
    rating: 4.9,
    reviews: 128,
    expertise: ['Python', 'Django', 'FastAPI'],
    price: '5000 ₸/час',
    experience: '8 лет',
    languages: ['Русский', 'English'],
    education: 'МГУ, Компьютерные науки',
    bio: 'Опытный разработчик с фокусом на backend разработку',
    achievements: ['Top-rated ментор', '500+ успешных студентов'],
    schedule: {
      'Пн': ['10:00', '14:00', '18:00'],
      'Ср': ['11:00', '15:00', '19:00'],
      'Пт': ['09:00', '13:00', '17:00']
    },
    avatar: '/mentors/1.jpg'
  },
  {
    id: 2,
    name: 'Мария Петрова',
    position: 'Lead Frontend Developer',
    company: 'Kaspi',
    available: true,
    rating: 4.8,
    reviews: 95,
    expertise: ['JavaScript', 'React', 'TypeScript'],
    price: '6000 ₸/час',
    experience: '6 лет',
    languages: ['Русский', 'Қазақ'],
    education: 'КБТУ, Информационные системы',
    bio: 'Специализируюсь на современной frontend разработке',
    achievements: ['Google Developer Expert', '300+ менти'],
    schedule: {
      'Вт': ['09:00', '13:00', '17:00'],
      'Чт': ['10:00', '14:00', '18:00'],
      'Сб': ['11:00', '15:00']
    },
    avatar: '/mentors/2.jpg'
  }
];

const schedule: ScheduleDay[] = [
  {
    date: '2024-03-18',
    weekday: 'Понедельник',
    events: [
      {
        time: '09:00 - 10:30',
        type: 'lesson',
        title: 'Python: Работа с API',
        course: 'Основы Python',
        instructor: 'Александр Иванов',
        location: 'Онлайн',
        link: '/meeting/123'
      },
      {
        time: '15:00 - 16:00',
        type: 'mentoring',
        title: 'Консультация по React',
        mentor: 'Мария Петрова',
        location: 'Онлайн',
        link: '/meeting/456'
      }
    ]
  },
  {
    date: '2024-03-19',
    weekday: 'Вторник',
    events: [
      {
        time: '11:00 - 12:30',
        type: 'lesson',
        title: 'React Hooks',
        course: 'JavaScript Pro',
        instructor: 'Мария Петрова',
        location: 'Онлайн',
        link: '/meeting/789'
      },
      {
        time: '18:00 - 19:30',
        type: 'event',
        title: 'Мастер-класс: Карьера в IT',
        location: 'Онлайн',
        link: '/event/101'
      }
    ]
  }
];

const progressData: ProgressData = {
  overall: 68,
  courses: {
    completed: 3,
    inProgress: 2,
    total: 8
  },
  skills: [
    { name: 'Python', level: 75 },
    { name: 'JavaScript', level: 60 },
    { name: 'SQL', level: 45 },
    { name: 'React', level: 55 },
    { name: 'TypeScript', level: 40 },
    { name: 'Git', level: 65 }
  ],
  certificates: [
    {
      name: 'Python Developer',
      date: '2024-02-15',
      issuer: 'NAVYK'
    },
    {
      name: 'JavaScript Fundamentals',
      date: '2024-01-20',
      issuer: 'NAVYK'
    },
    {
      name: 'Git & GitHub',
      date: '2023-12-10',
      issuer: 'NAVYK'
    }
  ],
  activity: {
    streak: 7,
    lastWeek: [2, 3, 4, 2, 3, 1, 2],
    totalHours: 127
  }
};

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('courses');
  const [showTabInfo, setShowTabInfo] = useState(false);
  const [hoveredTab, setHoveredTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Верхняя панель */}
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Логотип */}
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                NAVYK
              </span>
            </div>

            {/* Мобильное меню и переключатель темы */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>

              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          >
            <nav className="px-4 py-2 space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center px-3 py-2 text-sm font-medium
                    rounded-lg transition-all duration-200
                    ${activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                      : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                    }
                  `}
                >
                  <tab.icon className="w-5 h-5 mr-3" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Боковая навигация (десктоп) */}
          <div className="hidden lg:block col-span-3">
            <nav className="sticky top-24 space-y-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => {
                    setHoveredTab(tab.id);
                    setShowTabInfo(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredTab('');
                    setShowTabInfo(false);
                  }}
                  className={`
                    relative w-full flex items-center px-3 py-2 text-sm font-medium
                    rounded-lg transition-all duration-200
                    ${activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                      : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                    }
                  `}
                >
                  <tab.icon className="w-5 h-5 mr-3" />
                  {tab.name}
                  
                  {/* Всплывающая подсказка */}
                  {showTabInfo && hoveredTab === tab.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50"
                    >
                      {tab.description}
                    </motion.div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Контент вкладок */}
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                {activeTab === 'courses' && <CoursesTab courses={courses} />}
                {activeTab === 'mentors' && <MentorsTab mentors={mentors} />}
                {activeTab === 'schedule' && <ScheduleTab schedule={schedule} />}
                {activeTab === 'progress' && <ProgressTab progress={progressData} />}
                {activeTab === 'resources' && <ResourcesTab />}
                {activeTab === 'community' && <CommunityTab />}
                {activeTab === 'projects' && <ProjectsTab />}
                {activeTab === 'rewards' && <RewardsTab />}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 