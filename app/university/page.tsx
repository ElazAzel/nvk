"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { UniversityOverview } from '@/app/components/university/UniversityOverview';
import { UniversityAnalytics } from '@/app/components/university/UniversityAnalytics';
import { Tab } from '@headlessui/react';

export default function UniversityPage() {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'analytics', label: 'Аналитика' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          {/* Вкладки */}
          <Tab.List className="flex space-x-2 rounded-xl bg-blue-900/20 p-1 mb-8">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                  ${
                    selected
                      ? 'bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 shadow'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-blue-600'
                  }
                `}
              >
                {tab.label}
              </Tab>
            ))}
          </Tab.List>

          {/* Содержимое вкладок */}
          <Tab.Panels>
            <Tab.Panel>
              <UniversityOverview />
            </Tab.Panel>
            <Tab.Panel>
              <UniversityAnalytics />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
} 