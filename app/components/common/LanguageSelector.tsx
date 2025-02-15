"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { THEME_CLASSES } from "@/app/config/theme";

const languages = [
  { code: 'ru', label: 'RU' },
  { code: 'kz', label: 'KZ' },
  { code: 'en', label: 'EN' }
] as const;

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="grid grid-cols-3 gap-1 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`
            px-3 py-1.5 text-sm font-medium rounded-md transition-all
            ${language === code
              ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}; 