"use client";

import { motion } from 'framer-motion';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

export default function MentorsPage() {
  const { getColorClass } = useThemeStyles();

  const mentors = [
    {
      id: 1,
      name: 'Александр Петров',
      position: 'Senior Software Engineer',
      company: 'Google',
      experience: '8 лет',
      specialization: 'Backend Development',
      price: '25000 ₸/час',
      rating: 4.9,
      available: true,
    },
    // Добавьте больше менторов
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Менторы</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2">
            <option>Все специализации</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Mobile</option>
          </select>
          <select className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2">
            <option>Любой опыт</option>
            <option>3-5 лет</option>
            <option>5-8 лет</option>
            <option>8+ лет</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentors.map((mentor) => (
          <motion.div
            key={mentor.id}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{mentor.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{mentor.position} at {mentor.company}</p>
                <div className="mt-2 space-y-1">
                  <p>Опыт: {mentor.experience}</p>
                  <p>Специализация: {mentor.specialization}</p>
                  <p>Рейтинг: {mentor.rating}/5</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold">{mentor.price}</span>
              <button 
                className={`px-4 py-2 rounded-lg ${
                  mentor.available
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700'
                }`}
                disabled={!mentor.available}
              >
                {mentor.available ? 'Забронировать' : 'Нет свободных слотов'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 