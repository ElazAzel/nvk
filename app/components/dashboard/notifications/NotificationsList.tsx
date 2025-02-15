"use client";
import { useState } from 'react';

interface Notification {
  id: string;
  type: 'job' | 'course' | 'mentor' | 'system';
  title: string;
  description: string;
  time: string;
  read: boolean;
  link?: string;
}

export default function NotificationsList() {
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
    },
    // Добавьте больше уведомлений здесь
  ]);

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
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
              !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
            }`}
          >
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{notification.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {notification.description}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {notification.time}
                  </span>
                </div>
                {notification.link && (
                  <a
                    href={notification.link}
                    className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700"
                  >
                    Подробнее →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 