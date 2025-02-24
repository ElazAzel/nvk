"use client";
import { useState } from 'react';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export default function NotificationSettings() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: 'new-jobs',
      title: 'Новые вакансии',
      description: 'Уведомления о новых вакансиях, соответствующих вашему профилю',
      enabled: true
    },
    {
      id: 'course-updates',
      title: 'Обновления курсов',
      description: 'Уведомления об обновлениях в курсах, на которые вы записаны',
      enabled: true
    },
    {
      id: 'mentor-messages',
      title: 'Сообщения от менторов',
      description: 'Уведомления о новых сообщениях от ваших менторов',
      enabled: true
    },
    {
      id: 'achievement',
      title: 'Достижения',
      description: 'Уведомления о полученных достижениях и наградах',
      enabled: false
    }
  ]);

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting =>
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Уведомления</h2>

      <div className="space-y-6">
        {settings.map((setting) => (
          <div key={setting.id} className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-medium">{setting.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {setting.description}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={setting.enabled}
                onChange={() => toggleSetting(setting.id)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
} 