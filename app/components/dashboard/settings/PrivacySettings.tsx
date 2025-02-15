"use client";
import { useState } from 'react';

interface PrivacySetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export default function PrivacySettings() {
  const [settings, setSettings] = useState<PrivacySetting[]>([
    {
      id: 'profile-visibility',
      title: 'Видимость профиля',
      description: 'Разрешить другим пользователям видеть ваш профиль',
      enabled: true
    },
    {
      id: 'show-email',
      title: 'Показывать email',
      description: 'Отображать ваш email в публичном профиле',
      enabled: false
    },
    {
      id: 'show-phone',
      title: 'Показывать телефон',
      description: 'Отображать ваш номер телефона в публичном профиле',
      enabled: false
    },
    {
      id: 'activity-visibility',
      title: 'Видимость активности',
      description: 'Показывать вашу активность другим пользователям',
      enabled: true
    },
    {
      id: 'search-visibility',
      title: 'Видимость в поиске',
      description: 'Разрешить находить ваш профиль через поиск',
      enabled: true
    }
  ]);

  const toggleSetting = (id: string) => {
    setSettings(settings.map(setting =>
      setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Конфиденциальность</h2>

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

      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
          Важное примечание
        </h3>
        <p className="text-sm text-yellow-700 dark:text-yellow-300">
          Изменение этих настроек влияет на то, как другие пользователи видят ваш профиль. 
          Некоторые данные могут быть доступны работодателям и менторам даже при отключенных настройках.
        </p>
      </div>
    </div>
  );
} 