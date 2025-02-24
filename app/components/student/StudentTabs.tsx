"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function StudentTabs() {
  const currentPath = usePathname();

  const tabs = [
    { name: 'Обзор', href: '/student' },
    { name: 'Курсы', href: '/student/courses' },
    { name: 'Расписание', href: '/student/schedule' },
    { name: 'Прогресс', href: '/student/progress' }
  ];

  return (
    <div className="border-b border-gray-800">
      <nav className="flex space-x-8 px-6" aria-label="Tabs">
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${currentPath === tab.href
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </div>
  );
} 