"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

const events = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    date: '2024-03-15T10:00:00',
    location: 'AITU, Главный зал',
    type: 'Конференция',
    registered: true,
    image: '/events/conf.png'
  },
  {
    id: 2,
    title: 'Хакатон AI Solutions',
    date: '2024-03-20T09:00:00',
    location: 'Online',
    type: 'Хакатон',
    registered: false,
    image: '/events/hackathon.png'
  },
  {
    id: 3,
    title: 'Workshop: Cloud Native',
    date: '2024-03-25T14:00:00',
    location: 'AITU, Аудитория 305',
    type: 'Воркшоп',
    registered: false,
    image: '/events/workshop.png'
  }
];

export function EventsList() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className={`${getVariantClass('card', 'primary')} p-4 rounded-lg hover:shadow-lg transition-shadow`}
        >
          <div className="flex gap-4">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className={`font-medium ${getColorClass('text.primary')}`}>
                    {event.title}
                  </h3>
                  <p className={`text-sm ${getColorClass('text.secondary')}`}>
                    {event.type}
                  </p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  event.registered 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {event.registered ? 'Зарегистрированы' : 'Регистрация открыта'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className={`text-xs ${getColorClass('text.secondary')}`}>
                    Дата и время
                  </p>
                  <p className={`text-sm font-medium ${getColorClass('text.primary')}`}>
                    {new Date(event.date).toLocaleString('ru', {
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div>
                  <p className={`text-xs ${getColorClass('text.secondary')}`}>
                    Место проведения
                  </p>
                  <p className={`text-sm font-medium ${getColorClass('text.primary')}`}>
                    {event.location}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <button
                  className={`px-4 py-2 ${
                    event.registered
                      ? getVariantClass('button', 'outline')
                      : getVariantClass('button', 'primary')
                  } rounded-lg text-sm`}
                >
                  {event.registered ? 'Отменить регистрацию' : 'Зарегистрироваться'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 