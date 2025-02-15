"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface RoleSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RoleOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  demoCredentials: {
    email: string;
    password: string;
  };
}

export default function RoleSelectModal({ isOpen, onClose }: RoleSelectModalProps) {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles: RoleOption[] = [
    {
      id: 'student',
      title: 'Студент',
      description: 'Доступ к вакансиям, курсам и карьерному трекеру',
      icon: '👨‍🎓',
      demoCredentials: {
        email: 'student@demo.navyk.kz',
        password: 'demo123'
      }
    },
    {
      id: 'university',
      title: 'Университет',
      description: 'Аналитика и управление данными выпускников',
      icon: '🏛️',
      demoCredentials: {
        email: 'university@demo.navyk.kz',
        password: 'demo123'
      }
    },
    {
      id: 'employer',
      title: 'Работодатель',
      description: 'Доступ к базе талантов и публикация вакансий',
      icon: '💼',
      demoCredentials: {
        email: 'employer@demo.navyk.kz',
        password: 'demo123'
      }
    }
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    // В зависимости от выбранной роли перенаправляем на соответствующий дашборд
    const routes = {
      student: '/dashboard',
      university: '/university/dashboard',
      employer: '/employer/dashboard'
    };
    
    setTimeout(() => {
      onClose();
      router.push(routes[roleId as keyof typeof routes]);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Выберите роль для демо-доступа</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="grid gap-4">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className={`p-4 border rounded-lg cursor-pointer transition-all
                ${
                  selectedRole === role.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                }
              `}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{role.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{role.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {role.description}
                  </p>
                  {selectedRole === role.id && (
                    <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded-lg text-sm">
                      <p className="font-medium mb-1">Демо-доступ:</p>
                      <p>Email: {role.demoCredentials.email}</p>
                      <p>Пароль: {role.demoCredentials.password}</p>
                    </div>
                  )}
                </div>
                <div className="w-6 h-6 border-2 rounded-full flex items-center justify-center">
                  {selectedRole === role.id && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Демо-версия предоставляет ограниченный доступ к функционалу платформы
        </div>
      </div>
    </div>
  );
} 