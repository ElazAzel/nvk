"use client";

import { useState } from 'react';
import AnalyticsSummary from "@/app/components/university/AnalyticsSummary";
import UniversityNotifications from "@/app/components/university/UniversityNotifications";
import QuickLinks from "@/app/components/university/QuickLinks";
import UpcomingPrograms from "@/app/components/dashboard/partnerships/UpcomingPrograms";

export default function UniversityDashboard() {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Панель управления университета</h1>
      
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 ${activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('analytics')}
        >
          Аналитика
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'notifications' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('notifications')}
        >
          Уведомления
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'quickLinks' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('quickLinks')}
        >
          Быстрые ссылки
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'upcomingPrograms' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('upcomingPrograms')}
        >
          Предстоящие программы
        </button>
      </div>

      {activeTab === 'analytics' && <AnalyticsSummary />}
      {activeTab === 'notifications' && <UniversityNotifications />}
      {activeTab === 'quickLinks' && <QuickLinks />}
      {activeTab === 'upcomingPrograms' && <UpcomingPrograms />}
    </div>
  );
} 