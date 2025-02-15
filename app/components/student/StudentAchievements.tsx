"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { Achievement } from '@/app/types/achievements';

export function StudentAchievements() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const achievements: Achievement[] = [
    {
      id: 1,
      category: 'education',
      title: 'Отличник',
      description: 'Поддерживайте GPA выше 4.5 в течение семестра',
      progress: 85,
      maxProgress: 100,
      isCompleted: false,
      reward: 'Золотой значок и сертификат',
      icon: '🎓'
    },
    {
      id: 2,
      category: 'courses',
      title: 'Курсомания',
      description: 'Завершите 10 курсов',
      progress: 7,
      maxProgress: 10,
      isCompleted: false,
      reward: 'Специальный бейдж и доступ к премиум курсам',
      icon: '📚'
    },
    {
      id: 3,
      category: 'events',
      title: 'Активист',
      description: 'Посетите 5 мероприятий',
      progress: 5,
      maxProgress: 5,
      isCompleted: true,
      reward: 'Бейдж активиста и приоритетная регистрация',
      icon: '🎯'
    },
    // Добавьте другие достижения
  ];

  const categories = [
    { id: 'all', label: 'Все' },
    { id: 'education', label: 'Обучение' },
    { id: 'courses', label: 'Курсы' },
    { id: 'events', label: 'Мероприятия' },
    { id: 'career', label: 'Карьера' }
  ];

  return (
    <div className="space-y-8">
      {/* Фильтры */}
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg ${getVariantClass('button', 'outline')}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Сетка достижений */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`${getVariantClass('card', 'primary')} p-6 rounded-lg ${
              achievement.isCompleted ? 'border-2 border-green-500' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              {achievement.isCompleted && (
                <span className="px-2 py-1 text-sm bg-green-100 text-green-800 rounded">
                  Получено
                </span>
              )}
            </div>
            <h3 className={`text-lg font-medium mb-2 ${getColorClass('text.primary')}`}>
              {achievement.title}
            </h3>
            <p className={`text-sm mb-4 ${getColorClass('text.secondary')}`}>
              {achievement.description}
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Прогресс</span>
                <span>
                  {achievement.progress}/{achievement.maxProgress}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width: `${(achievement.progress / achievement.maxProgress) * 100}%`
                  }}
                />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm">
                <span className="font-medium">Награда:</span> {achievement.reward}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 