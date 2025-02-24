"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const tasks = [
  {
    id: 1,
    title: 'Лабораторная работа №5',
    subject: 'Математический анализ',
    deadline: '2024-03-25',
    status: 'active',
    priority: 'high',
    xp: 100
  },
  // Добавьте больше задач
];

export default function TasksPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Функция форматирования даты
  const formatDate = (dateString: string) => {
    if (!mounted) return dateString; // Возвращаем строку даты до монтирования
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold dark:text-white">Все задачи</h1>
        <div className="flex gap-4 w-full sm:w-auto">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="all">Все задачи</option>
            <option value="active">Активные</option>
            <option value="completed">Завершенные</option>
            <option value="overdue">Просроченные</option>
          </select>
          <button 
            onClick={() => router.back()}
            className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Назад
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {tasks.map(task => (
          <div 
            key={task.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {task.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{task.subject}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {task.xp} XP
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  task.priority === 'high' 
                    ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {task.priority === 'high' ? 'Высокий приоритет' : 'Средний приоритет'}
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Дедлайн: {formatDate(task.deadline)}
              </p>
              <button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105">
                Открыть задачу
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 