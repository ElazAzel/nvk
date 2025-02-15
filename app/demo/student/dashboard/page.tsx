"use client";

import { StatCard } from "@/app/components/common/StatCard";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useThemeStyles } from "@/app/hooks/useThemeStyles";
import UpcomingPrograms from '@/app/components/dashboard/partnerships/UpcomingPrograms';

const demoStats = [
  {
    title: 'student.stats.courses',
    value: '4',
    change: 'Демо-версия',
    trend: 'up'
  },
  {
    title: 'student.stats.progress',
    value: '78%',
    change: 'Демо-версия',
    trend: 'up'
  },
  {
    title: 'student.stats.assignments',
    value: '12/15',
    change: 'Демо-версия',
    trend: 'down'
  },
  {
    title: 'student.stats.attendance',
    value: '92%',
    change: 'Демо-версия',
    trend: 'down'
  }
] as const;

const demoCourses = [
  {
    name: 'Web Development',
    category: 'Frontend',
    progress: 78
  },
  {
    name: 'Python Basics',
    category: 'Programming',
    progress: 65
  }
] as const;

export default function StudentDashboard() {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className={getVariantClass('container', 'primary')}>
      {/* Демо-баннер */}
      <div className={`${getVariantClass('card', 'primary')} p-6 mb-8 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700`}>
        <h1 className="text-white text-2xl font-bold mb-2">
          Демо-версия платформы
        </h1>
        <p className="text-white/90">
          Это демонстрационная версия дашборда студента. Для доступа к полному функционалу необходимо авторизоваться.
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
          Войти в систему
        </button>
      </div>

      {/* Статистика */}
      <div className={getVariantClass('grid', 'primary')}>
        {demoStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={t(stat.title)}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Демо-курсы */}
      <div className="mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${getColorClass('text.primary')}`}>
          {t('student.dashboard.currentCourses')}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {demoCourses.map((course, index) => (
            <div key={index} className={`${getVariantClass('card', 'primary')} p-4`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-medium ${getColorClass('text.primary')}`}>
                    {course.name}
                  </h3>
                  <p className={`mt-1 text-sm ${getColorClass('text.secondary')}`}>
                    {course.category}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${getColorClass('background.accent')} ${getColorClass('text.accent')}`}>
                  {course.progress}%
                </span>
              </div>
              <div className="mt-4">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Демо-ограничение */}
      <div className={`mt-8 ${getVariantClass('card', 'primary')} p-6 text-center`}>
        <h3 className={`text-lg font-medium mb-2 ${getColorClass('text.primary')}`}>
          Хотите увидеть больше?
        </h3>
        <p className={`mb-4 ${getColorClass('text.secondary')}`}>
          Зарегистрируйтесь для доступа к полному функционалу платформы
        </p>
        <div className="flex gap-4 justify-center">
          <button className={`px-6 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}>
            Регистрация
          </button>
          <button className={`px-6 py-2 ${getVariantClass('button', 'outline')} rounded-lg`}>
            Узнать больше
          </button>
        </div>
      </div>

      <UpcomingPrograms />
    </div>
  );
} 