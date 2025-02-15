"use client";

import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface WeatherData {
  temp: number;
  city: string;
}

export const Header: React.FC = () => {
  const [time, setTime] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language } = useLanguage();
  const { getColorClass } = useThemeStyles();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString(language, {
        hour: '2-digit',
        minute: '2-digit'
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    const getWeather = async () => {
      // Здесь будет реальный API запрос
      setWeather({
        temp: 23,
        city: 'Астана'
      });
    };

    getWeather();
  }, []);

  return (
    <header className={`
      fixed top-0 left-0 right-0 h-16 z-50
      ${getColorClass('background.primary')}
      border-b ${getColorClass('border.primary')}
    `}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-end">
        <div className="flex items-center gap-6">
          {weather && (
            <div className={`flex items-center gap-2 text-sm ${getColorClass('text.secondary')}`}>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <span>{weather.temp}°C</span>
              <span className={`${getColorClass('text.tertiary')}`}>|</span>
              <span>{weather.city}</span>
            </div>
          )}

          {time && (
            <div className={`text-sm ${getColorClass('text.secondary')}`}>
              {time}
            </div>
          )}

          <ThemeToggle />

          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className={`
                flex items-center gap-1 text-sm
                ${getColorClass('text.secondary')}
                ${getColorClass('hover.text')}
              `}
            >
              <span className="uppercase">{language}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isLanguageOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-40 py-2">
                <LanguageSelector />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}; 