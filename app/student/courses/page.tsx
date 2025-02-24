"use client";

import { motion } from 'framer-motion';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

export default function CoursesPage() {
  const { getColorClass } = useThemeStyles();

  const courses = [
    {
      id: 1,
      title: 'Основы Python',
      description: 'Базовый курс программирования на Python',
      duration: '8 недель',
      price: '15000 ₸',
      level: 'Начинающий',
      rating: 4.8,
    },
    // Добавьте больше курсов
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Курсы</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2">
            <option>Все уровни</option>
            <option>Начинающий</option>
            <option>Средний</option>
            <option>Продвинутый</option>
          </select>
          <select className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2">
            <option>Все категории</option>
            <option>Программирование</option>
            <option>Дизайн</option>
            <option>Бизнес</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <h3 className="text-lg font-medium">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{course.description}</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Длительность:</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Уровень:</span>
                <span>{course.level}</span>
              </div>
              <div className="flex justify-between">
                <span>Рейтинг:</span>
                <span>{course.rating}/5</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-bold">{course.price}</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Записаться
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 