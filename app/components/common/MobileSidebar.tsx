"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

const studentNavItems = [
  { path: '/student/dashboard', icon: 'home', label: 'nav.dashboard' },
  { path: '/student/courses', icon: 'book', label: 'nav.courses' },
  { path: '/student/progress', icon: 'chart', label: 'nav.progress' },
  { path: '/student/profile', icon: 'user', label: 'nav.profile' }
];

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  const { getColorClass } = useThemeStyles();

  // Закрываем меню при изменении маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Блокируем прокрутку body когда меню открыто
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Кнопка бургер-меню */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-50"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Затемнение фона */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Боковое меню */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 
          transform transition-transform duration-300 ease-in-out z-50 lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          border-r border-gray-200 dark:border-gray-700`}
      >
        {/* Шапка меню */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className={`text-lg font-medium ${getColorClass('text.primary')}`}>
            {t('common.menu')}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Навигация */}
        <nav className="p-4">
          <ul className="space-y-2">
            {studentNavItems.map(({ path, icon, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${pathname === path 
                      ? `${getColorClass('background.accent')} ${getColorClass('text.accent')}`
                      : `${getColorClass('text.secondary')} hover:${getColorClass('text.primary')} hover:${getColorClass('background.secondary')}`
                    }
                  `}
                >
                  <span className="w-6 h-6">
                    {/* Иконки из MobileNavigation */}
                    {icon === 'home' && (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {/* ... остальные иконки как в MobileNavigation */}
                  </span>
                  <span>{t(label)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}; 