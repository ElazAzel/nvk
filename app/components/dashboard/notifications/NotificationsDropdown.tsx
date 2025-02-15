"use client";
import { useState } from 'react';
import Link from 'next/link';

interface Notification {
  id: string;
  type: 'job' | 'course' | 'mentor' | 'system';
  title: string;
  description: string;
  time: string;
  read: boolean;
  link?: string;
}

export default function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'job',
      title: 'Новый отклик на вакансию',
      description: 'Ваше резюме просмотрено компанией TechCorp',
      time: '5 минут назад',
      read: false,
      link: '/dashboard/jobs'
    },
    {
      id: '2',
      type: 'course',
      title: 'Курс завершен',
      description: 'Вы успешно завершили курс "React для начинающих"',
      time: '2 часа назад',
      read: false,
      link: '/dashboard/courses'
    },
    {
      id: '3',
      type: 'mentor',
      title: 'Новое сообщение от ментора',
      description: 'Александр Петров отправил вам сообщение',
      time: '1 день назад',
      read: true,
      link: '/dashboard/mentors'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'job':
        return '💼';
      case 'course':
        return '📚';
      case 'mentor':
        return '👥';
      case 'system':
        return '⚙️';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-700 relative"
      >
        <span className="sr-only">Уведомления</span>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 h-5 w-5 flex items-center justify-center text-xs text-white bg-red-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Уведомления</h3>
              <Link
                href="/dashboard/notifications"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Смотреть все
              </Link>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="text-2xl flex-shrink-0">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {notification.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                Нет новых уведомлений
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              className="w-full px-4 py-2 text-sm text-center text-gray-600 hover:text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 