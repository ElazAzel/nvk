"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

const roles = [
  {
    id: 'student',
    icon: 'academic',
    title: 'landing.roles.student.title',
    description: 'landing.roles.student.description',
    path: '/student',
    demoInfo: {
      name: 'Александр Петров',
      group: 'CS-2021',
      courses: 4,
      progress: '78%'
    }
  },
  {
    id: 'university',
    icon: 'university',
    title: 'landing.roles.university.title',
    description: 'landing.roles.university.description',
    path: '/university',
    demoInfo: {
      name: 'Технический университет',
      students: 12000,
      faculty: 8,
      courses: 150
    }
  },
  {
    id: 'employer',
    icon: 'briefcase',
    title: 'landing.roles.employer.title',
    description: 'landing.roles.employer.description',
    path: '/employer',
    demoInfo: {
      name: 'IT Solutions Corp',
      vacancies: 15,
      applications: 45,
      interns: 8
    }
  }
] as const;

interface RoleSelectPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RoleSelectPopup({ isOpen, onClose }: RoleSelectPopupProps) {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRoleSelect = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      {/* Затемнение фона */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Модальное окно */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50">
        <div className={`${getVariantClass('card', 'primary')} mx-4 p-6 rounded-xl`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-2xl font-bold ${getColorClass('text.primary')}`}>
              {t('landing.roles.title')}
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

          <div className="grid gap-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`p-4 rounded-lg cursor-pointer transition-all
                  ${selectedRole === role.id 
                    ? 'bg-blue-50 dark:bg-blue-900/50 border-2 border-blue-500'
                    : 'border-2 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    {role.icon === 'academic' && (
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      </svg>
                    )}
                    {role.icon === 'university' && (
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {role.icon === 'briefcase' && (
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-medium mb-1 ${getColorClass('text.primary')}`}>
                      {t(role.title)}
                    </h3>
                    <p className={`text-sm mb-2 ${getColorClass('text.secondary')}`}>
                      {t(role.description)}
                    </p>
                    {selectedRole === role.id && (
                      <div className={`mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 ${getColorClass('text.secondary')}`}>
                        <div className="text-sm font-medium mb-2">Демо-аккаунт:</div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {Object.entries(role.demoInfo).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-2">
                              <span className="opacity-70">{key}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={onClose}
              className={`px-4 py-2 ${getVariantClass('button', 'outline')} rounded-lg`}
            >
              {t('common.close')}
            </button>
            <button
              onClick={() => selectedRole && handleRoleSelect(roles.find(r => r.id === selectedRole)?.path || '')}
              disabled={!selectedRole}
              className={`px-6 py-2 ${getVariantClass('button', 'primary')} rounded-lg disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {t('landing.roles.continue')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 