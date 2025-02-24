"use client";
import { useState } from "react";

export default function UniversityNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Новый запрос на партнерство от компании Tech Corp",
      time: "2 часа назад",
      type: "partnership"
    },
    {
      id: 2,
      text: "Обновлена статистика трудоустройства выпускников",
      time: "5 часов назад",
      type: "analytics"
    },
    {
      id: 3,
      text: "10 новых студентов зарегистрировались на платформе",
      time: "1 день назад",
      type: "students"
    }
  ]);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Уведомления</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          Показать все
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map(notification => (
          <div 
            key={notification.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
          >
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {notification.text}
              </p>
              <span className="text-xs text-gray-500 mt-1 block">
                {notification.time}
              </span>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 