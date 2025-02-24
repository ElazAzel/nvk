"use client";

import { useState } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface AuthPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthPopup = ({ isOpen, onClose }: AuthPopupProps) => {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50">
        <div className={`${getVariantClass('card', 'primary')} mx-4 p-6 rounded-xl`}>
          {/* Заголовок */}
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-2xl font-bold ${getColorClass('text.primary')}`}>
              {isLogin ? t('auth.login.title') : t('auth.register.title')}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Форма */}
          <form className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${getColorClass('text.secondary')}`}>
                {t('auth.email')}
              </label>
              <input
                type="email"
                className={`w-full px-4 py-2 rounded-lg border ${getColorClass('border.primary')} bg-transparent`}
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${getColorClass('text.secondary')}`}>
                {t('auth.password')}
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 rounded-lg border ${getColorClass('border.primary')} bg-transparent`}
                placeholder="••••••••"
              />
            </div>
            {!isLogin && (
              <div>
                <label className={`block text-sm font-medium mb-1 ${getColorClass('text.secondary')}`}>
                  {t('auth.confirmPassword')}
                </label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 rounded-lg border ${getColorClass('border.primary')} bg-transparent`}
                  placeholder="••••••••"
                />
              </div>
            )}
            <button
              type="submit"
              className={`w-full py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
            >
              {isLogin ? t('auth.login.submit') : t('auth.register.submit')}
            </button>
          </form>

          {/* Переключатель */}
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className={`text-sm ${getColorClass('text.accent')} hover:underline`}
            >
              {isLogin ? t('auth.login.switchToRegister') : t('auth.register.switchToLogin')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}; 