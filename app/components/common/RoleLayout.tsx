"use client";

import { ReactNode } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { useTranslation } from '@/app/hooks/useTranslation';

interface RoleLayoutProps {
  children: ReactNode;
  role: 'student' | 'university' | 'employer';
  stats: {
    label: string;
    value: string;
    change?: string;
    trend?: 'up' | 'down';
  }[];
  actions: {
    label: string;
    icon: string;
    onClick: () => void;
  }[];
}

export function RoleLayout({ children, role, stats, actions }: RoleLayoutProps) {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Верхняя панель */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className={`text-2xl font-bold ${getColorClass('text.primary')}`}>
              {t(`roles.${role}.title`)}
            </h1>
            <div className="flex items-center gap-4">
              {actions.map((action) => (
                <button
                  key={action.label}
                  onClick={action.onClick}
                  className={`p-2 rounded-lg ${getVariantClass('button', 'outline')}`}
                >
                  <span className="sr-only">{action.label}</span>
                  <span className="w-5 h-5" dangerouslySetInnerHTML={{ __html: action.icon }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Статистика */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${getVariantClass('card', 'primary')} p-4 rounded-lg`}
            >
              <div className="flex items-center justify-between">
                <p className={`text-sm ${getColorClass('text.secondary')}`}>
                  {stat.label}
                </p>
                {stat.trend && (
                  <span className={`text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                )}
              </div>
              <p className={`text-2xl font-semibold mt-2 ${getColorClass('text.primary')}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Основной контент */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
} 