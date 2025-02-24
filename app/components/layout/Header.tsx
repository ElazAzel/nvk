"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { 
  SunIcon, 
  MoonIcon, 
  BellIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [notifications] = useState(3); // В реальном приложении из API

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              NAVYK
            </span>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Уведомления */}
            <button className="relative p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors">
              <BellIcon className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* Переключатель темы */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors"
              aria-label="Переключить тему"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>

            {/* Профиль */}
            <button className="flex items-center space-x-2 p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors">
              <UserCircleIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Профиль</span>
            </button>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню (выпадающее) */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="px-4 py-2 space-y-1">
          <button className="w-full flex items-center space-x-2 p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors">
            <BellIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Уведомления</span>
            {notifications > 0 && (
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {notifications}
              </span>
            )}
          </button>
          
          <button className="w-full flex items-center space-x-2 p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors">
            <UserCircleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Профиль</span>
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-full flex items-center space-x-2 p-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 rounded-lg transition-colors"
          >
            {theme === 'dark' ? (
              <>
                <SunIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Светлая тема</span>
              </>
            ) : (
              <>
                <MoonIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Темная тема</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </header>
  );
} 