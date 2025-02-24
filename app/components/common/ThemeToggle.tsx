"use client";

import { useTheme } from "@/app/contexts/ThemeContext";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useThemeStyles } from "@/app/hooks/useThemeStyles";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const { getVariantClass } = useThemeStyles();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-9 w-16 items-center rounded-full
        transition-colors duration-300 focus:outline-none
        ${theme === 'dark' 
          ? 'bg-blue-600 hover:bg-blue-700' 
          : 'bg-gray-200 hover:bg-gray-300'
        }
      `}
      aria-label={t('common.theme.select')}
    >
      <span
        className={`
          inline-block h-7 w-7 transform rounded-full
          transition-transform duration-300
          ${theme === 'dark' 
            ? 'translate-x-8 bg-gray-900' 
            : 'translate-x-1 bg-white'
          }
        `}
      >
        {theme === 'light' ? (
          <svg
            className="h-7 w-7 p-1 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
            />
          </svg>
        ) : (
          <svg
            className="h-7 w-7 p-1.5 text-blue-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </span>
    </button>
  );
}; 