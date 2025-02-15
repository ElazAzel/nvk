"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

export function UniversityAnalytics() {
  const { getColorClass } = useThemeStyles();

  return (
    <div className="space-y-8">
      <div className={`p-6 ${getColorClass('background.primary')} rounded-lg`}>
        <h2 className={`text-xl font-bold ${getColorClass('text.primary')}`}>
          Аналитика
        </h2>
        <p className={`mt-2 ${getColorClass('text.secondary')}`}>
          Графики временно недоступны. Мы работаем над их добавлением.
        </p>
      </div>
    </div>
  );
} 