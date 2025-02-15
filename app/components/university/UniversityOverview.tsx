"use client";

import { useState } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { StatCard } from '@/app/components/common/StatCard';
import { CreateEventModal } from '@/app/components/university/modals/CreateEventModal';
import { CreateMailingModal } from '@/app/components/university/modals/CreateMailingModal';
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  BuildingLibraryIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

interface UniversityInfo {
  stats: {
    students: number;
    faculty: number;
    programs: number;
    faculties: number;
    events: number;
    publications: number;
  };
  contacts: {
    address: string;
    phone: string;
    email: string;
    website: string;
  };
}

export function UniversityOverview() {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isMailingModalOpen, setIsMailingModalOpen] = useState(false);

  // Моковые данные университета
  const universityInfo: UniversityInfo = {
    stats: {
      students: 38000,
      faculty: 11000,
      programs: 380,
      faculties: 40,
      events: 520,
      publications: 12500
    },
    contacts: {
      address: "119991, Москва, Ленинские горы, д. 1",
      phone: "+7 (495) 939-10-00",
      email: "info@msu.ru",
      website: "www.msu.ru"
    }
  };

  const handleExportAnalytics = () => {
    // Логика экспорта аналитики в PDF
    console.log('Экспорт аналитики в PDF');
  };

  return (
    <div className="space-y-8">
      {/* Основная информация */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className={`text-2xl font-bold mb-2 ${getColorClass('text.primary')}`}>
              {t("Московский Государственный Университет")}
            </h1>
            <p className={`${getColorClass('text.secondary')} max-w-2xl`}>
              {t("О университете")}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsEventModalOpen(true)}
              className={`flex items-center gap-2 px-4 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
            >
              <CalendarIcon className="w-5 h-5" />
              {t("Создать событие")}
            </button>
            <button
              onClick={() => setIsMailingModalOpen(true)}
              className={`flex items-center gap-2 px-4 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
            >
              <EnvelopeIcon className="w-5 h-5" />
              {t("Отправить сообщение")}
            </button>
            <button
              onClick={handleExportAnalytics}
              className={`flex items-center gap-2 px-4 py-2 ${getVariantClass('button', 'outline')} rounded-lg`}
            >
              <DocumentTextIcon className="w-5 h-5" />
              {t("Скачать отчёт")}
            </button>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard
            icon={<UserGroupIcon className="w-6 h-6" />}
            title={t("Количество студентов")}
            value={universityInfo.stats.students.toLocaleString()}
          />
          <StatCard
            icon={<AcademicCapIcon className="w-6 h-6" />}
            title={t("Количество преподавателей")}
            value={universityInfo.stats.faculty.toLocaleString()}
          />
          <StatCard
            icon={<DocumentTextIcon className="w-6 h-6" />}
            title={t("Образовательные программы")}
            value={universityInfo.stats.programs.toLocaleString()}
          />
          <StatCard
            icon={<BuildingLibraryIcon className="w-6 h-6" />}
            title={t("Факультеты")}
            value={universityInfo.stats.faculties.toLocaleString()}
          />
          <StatCard
            icon={<CalendarIcon className="w-6 h-6" />}
            title={t("Мероприятия")}
            value={universityInfo.stats.events.toLocaleString()}
          />
          <StatCard
            icon={<DocumentTextIcon className="w-6 h-6" />}
            title={t("Научные публикации")}
            value={universityInfo.stats.publications.toLocaleString()}
          />
        </div>
      </div>

      {/* Контактная информация */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h2 className={`text-xl font-bold mb-4 ${getColorClass('text.primary')}`}>
          {t("Контактные данные")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className={`mb-2 ${getColorClass('text.secondary')}`}>
              <span className="font-medium">{t("Адрес")}:</span> {universityInfo.contacts.address}
            </p>
            <p className={`mb-2 ${getColorClass('text.secondary')}`}>
              <span className="font-medium">{t("Телефон")}:</span> {universityInfo.contacts.phone}
            </p>
          </div>
          <div>
            <p className={`mb-2 ${getColorClass('text.secondary')}`}>
              <span className="font-medium">{t("Электронная почта")}:</span> {universityInfo.contacts.email}
            </p>
            <p className={`mb-2 ${getColorClass('text.secondary')}`}>
              <span className="font-medium">{t("Веб-сайт")}:</span> {universityInfo.contacts.website}
            </p>
          </div>
        </div>
      </div>

      {/* Модальные окна */}
      {isEventModalOpen && (
        <CreateEventModal
          isOpen={isEventModalOpen}
          onClose={() => setIsEventModalOpen(false)}
        />
      )}

      {isMailingModalOpen && (
        <CreateMailingModal
          isOpen={isMailingModalOpen}
          onClose={() => setIsMailingModalOpen(false)}
        />
      )}
    </div>
  );
} 