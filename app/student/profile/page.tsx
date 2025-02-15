"use client";

import { ProfileLayout } from '@/app/components/common/ProfileLayout';
import { StatsGrid } from '@/app/components/common/StatsGrid';
import { InfoSection } from '@/app/components/common/InfoSection';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

// Моковые данные студента (в реальном приложении будут из API)
const studentData = {
  name: 'Александр Петров',
  group: 'CS-2021',
  major: 'Компьютерные науки',
  year: 3,
  semester: 6,
  studentId: '2021CS0123',
  email: 'a.petrov@university.edu',
  advisor: 'Проф. Иванов И.И.',
  scholarship: 'Повышенная',
  status: 'Активный',
  personalInfo: {
    birthDate: '2000-05-15',
    phone: '+7 (777) 123-45-67',
    address: 'г. Астана, ул. Примерная, 123',
    citizenship: 'Казахстан'
  },
  education: {
    admissionYear: 2021,
    graduationYear: 2025,
    degree: 'Бакалавр',
    faculty: 'Факультет информационных технологий',
    studyForm: 'Очная'
  }
} as const;

const academicStats = [
  {
    title: 'student.stats.gpa',
    value: '3.8',
    change: '+0.2 за семестр',
    trend: 'up'
  },
  {
    title: 'student.stats.credits',
    value: '87/129',
    change: '42 осталось',
    trend: 'up'
  },
  {
    title: 'student.stats.rank',
    value: 'Топ 15%',
    change: '+5 позиций',
    trend: 'up'
  },
  {
    title: 'student.stats.attendance',
    value: '92%',
    change: '12 пропусков',
    trend: 'down'
  }
] as const;

export default function StudentProfile() {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <ProfileLayout
      header={{
        title: studentData.name,
        subtitle: `${studentData.major} • ${studentData.group}`
      }}
    >
      {/* Основная информация */}
      <div className={`${getVariantClass('card', 'primary')} p-6`}>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {studentData.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className={`text-sm ${getColorClass('text.secondary')}`}>
                  ID: {studentData.studentId}
                </p>
                <p className={`mt-1 ${getColorClass('text.secondary')}`}>
                  {studentData.email}
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full ${
                studentData.status === 'Активный' 
                  ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                  : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400'
              }`}>
                {studentData.status}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Академическая статистика */}
      <StatsGrid items={academicStats} />

      {/* Личная информация */}
      <InfoSection title={t('student.profile.personalInfo')}>
        <div className={`${getVariantClass('card', 'primary')} p-6`}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-sm font-medium mb-4 ${getColorClass('text.secondary')}`}>
                {t('student.profile.contacts')}
              </h3>
              <div className="space-y-3">
                <p className={getColorClass('text.primary')}>
                  <span className={`block text-sm ${getColorClass('text.secondary')}`}>
                    {t('student.profile.phone')}
                  </span>
                  {studentData.personalInfo.phone}
                </p>
                <p className={getColorClass('text.primary')}>
                  <span className={`block text-sm ${getColorClass('text.secondary')}`}>
                    {t('student.profile.address')}
                  </span>
                  {studentData.personalInfo.address}
                </p>
              </div>
            </div>
            <div>
              <h3 className={`text-sm font-medium mb-4 ${getColorClass('text.secondary')}`}>
                {t('student.profile.additional')}
              </h3>
              <div className="space-y-3">
                <p className={getColorClass('text.primary')}>
                  <span className={`block text-sm ${getColorClass('text.secondary')}`}>
                    {t('student.profile.birthDate')}
                  </span>
                  {new Date(studentData.personalInfo.birthDate).toLocaleDateString()}
                </p>
                <p className={getColorClass('text.primary')}>
                  <span className={`block text-sm ${getColorClass('text.secondary')}`}>
                    {t('student.profile.citizenship')}
                  </span>
                  {studentData.personalInfo.citizenship}
                </p>
              </div>
            </div>
          </div>
        </div>
      </InfoSection>

      {/* Информация об обучении */}
      <InfoSection title={t('student.profile.education')}>
        <div className={`${getVariantClass('card', 'primary')} p-6`}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className={getColorClass('text.primary')}>
                <span className={`block text-sm ${getColorClass('text.secondary')}`}>
                  {t('student.profile.faculty')}
                </span>
                {studentData.education.faculty}
              </p>
              <p className={getColorClass('text.primary')}>
                <span className={`block text-sm ${getColorClass('text.secondary')}`}>
                  {t('student.profile.degree')}
                </span>
                {studentData.education.degree}
              </p>
            </div>
            <div className="space-y-3">
              <p className={getColorClass('text.primary')}>
                <span className={`block text-sm ${getColorClass('text.secondary')}`}>
                  {t('student.profile.studyPeriod')}
                </span>
                {studentData.education.admissionYear} - {studentData.education.graduationYear}
              </p>
              <p className={getColorClass('text.primary')}>
                <span className={`block text-sm ${getColorClass('text.secondary')}`}>
                  {t('student.profile.studyForm')}
                </span>
                {studentData.education.studyForm}
              </p>
            </div>
          </div>
        </div>
      </InfoSection>
    </ProfileLayout>
  );
} 