"use client";
import { useState } from "react";

export default function NotificationsSection() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: "💼",
      text: "Новая вакансия в Kaspi Bank",
      time: "2 часа назад",
      isRead: false
    },
    {
      id: 2,
      icon: "📚",
      text: "Новый курс по React доступен",
      time: "5 часов назад",
      isRead: false
    }
  ]);

  const hideNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Уведомления</h2>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
          >
            <span className="text-2xl">{notification.icon}</span>
            
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {notification.text}
              </p>
              <span className="text-xs text-gray-500">
                {notification.time}
              </span>
            </div>
            
            <button 
              onClick={() => hideNotification(notification.id)}
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