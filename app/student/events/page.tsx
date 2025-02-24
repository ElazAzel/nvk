"use client";

import { motion } from 'framer-motion';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

export default function EventsPage() {
  const { getColorClass } = useThemeStyles();

  const events = [
    {
      id: 1,
      title: 'Карьерный форум IT',
      date: '2024-04-15',
      time: '10:00',
      location: 'Главный кампус',
      type: 'Офлайн',
      participants: 120,
    },
    // Добавьте больше мероприятий
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Мероприятия</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2">
            <option>Все типы</option>
            <option>Офлайн</option>
            <option>Онлайн</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Календарь
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ x: 4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {new Date(event.date).toLocaleDateString()} в {event.time}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{event.location}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {event.type}
                </span>
                <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {event.participants} участников
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Зарегистрироваться
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 