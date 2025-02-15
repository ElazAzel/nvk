"use client";

import { StatCard } from "@/app/components/common/StatCard";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useThemeStyles } from "@/app/hooks/useThemeStyles";

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
  status: 'Активный'
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

const currentSemester = [
  {
    subject: 'Алгоритмы и структуры данных',
    code: 'CS301',
    credits: 6,
    grade: 'A',
    progress: 92,
    attendance: 95,
    professor: 'Проф. Смирнов А.А.'
  },
  {
    subject: 'Базы данных',
    code: 'CS302',
    credits: 5,
    grade: 'B+',
    progress: 85,
    attendance: 88,
    professor: 'Доц. Козлова М.В.'
  },
  {
    subject: 'Web Development',
    code: 'CS303',
    credits: 5,
    grade: 'A-',
    progress: 88,
    attendance: 92,
    professor: 'Проф. Волков Д.С.'
  },
  {
    subject: 'Машинное обучение',
    code: 'CS304',
    credits: 6,
    grade: 'B',
    progress: 78,
    attendance: 85,
    professor: 'Проф. Соколов П.Р.'
  }
] as const;

const upcomingEvents = [
  {
    id: 1,
    type: 'exam',
    title: 'Промежуточный экзамен',
    subject: 'Алгоритмы',
    date: '2024-03-24T15:00:00',
    location: 'Аудитория 305'
  },
  {
    id: 2,
    type: 'deadline',
    title: 'Курсовой проект',
    subject: 'Web Development',
    date: '2024-03-25T23:59:59'
  },
  {
    id: 3,
    type: 'consultation',
    title: 'Консультация',
    subject: 'Базы данных',
    date: '2024-03-22T14:30:00',
    location: 'Онлайн'
  }
] as const;

export default function StudentDashboard() {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 3600 * 24));
    
    return {
      full: date.toLocaleString('ru-RU', {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      daysLeft: diffDays
    };
  };

  return (
    <div className={getVariantClass('container', 'primary')}>
      {/* Профиль студента */}
      <div className={`${getVariantClass('card', 'primary')} p-6 mb-8`}>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {studentData.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className={`text-2xl font-bold ${getColorClass('text.primary')}`}>
                  {studentData.name}
                </h1>
                <p className={`mt-1 ${getColorClass('text.secondary')}`}>
                  {studentData.studentId}
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
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-4">
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                <span className="font-medium">Группа:</span> {studentData.group}
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                <span className="font-medium">Специальность:</span> {studentData.major}
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                <span className="font-medium">Курс/Семестр:</span> {studentData.year}/{studentData.semester}
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                <span className="font-medium">Email:</span> {studentData.email}
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                <span className="font-medium">Куратор:</span> {studentData.advisor}
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                <span className="font-medium">Стипендия:</span> {studentData.scholarship}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Академическая статистика */}
      <div className={getVariantClass('grid', 'primary')}>
        {academicStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title.toString()}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Текущий семестр */}
      <div className="mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${getColorClass('text.primary')}`}>
          {t('student.dashboard.currentSemester')}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead>
              <tr className={`border-b ${getColorClass('border.primary')}`}>
                <th className="py-3 px-4 text-left font-medium text-sm">Предмет</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Код</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Кредиты</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Оценка</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Прогресс</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Посещаемость</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Преподаватель</th>
              </tr>
            </thead>
            <tbody>
              {currentSemester.map((subject, index) => (
                <tr 
                  key={subject.code}
                  className={`border-b ${getColorClass('border.primary')} hover:${getColorClass('background.secondary')}`}
                >
                  <td className="py-3 px-4">{subject.subject}</td>
                  <td className="py-3 px-4">{subject.code}</td>
                  <td className="py-3 px-4">{subject.credits}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm
                      ${subject.grade.startsWith('A') ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                        subject.grade.startsWith('B') ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' :
                        'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400'
                      }
                    `}>
                      {subject.grade}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">{subject.attendance}%</td>
                  <td className="py-3 px-4">{subject.professor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ближайшие события */}
      <div className="mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${getColorClass('text.primary')}`}>
          {t('student.dashboard.upcomingEvents')}
        </h2>
        <div className={`${getVariantClass('card', 'primary')} divide-y ${getColorClass('border.primary')}`}>
          {upcomingEvents.map((event) => {
            const date = formatDate(event.date);
            return (
              <div key={event.id} className="p-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-medium ${getColorClass('text.primary')}`}>
                      {event.title}
                    </h3>
                    <span className={`
                      px-2 py-0.5 text-xs rounded-full
                      ${event.type === 'exam' ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400' :
                        event.type === 'deadline' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400' :
                        'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                      }
                    `}>
                      {event.type}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-4">
                    <p className={`text-sm ${getColorClass('text.secondary')}`}>
                      {event.subject}
                    </p>
                    {event.location && (
                      <p className={`text-sm ${getColorClass('text.secondary')}`}>
                        {event.location}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    date.daysLeft <= 2 ? 'text-red-600 dark:text-red-400' :
                    date.daysLeft <= 5 ? 'text-orange-600 dark:text-orange-400' :
                    getColorClass('text.accent')
                  }`}>
                    {date.daysLeft} {t('student.dashboard.daysLeft')}
                  </p>
                  <p className={`text-xs mt-1 ${getColorClass('text.tertiary')}`}>
                    {date.full}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 