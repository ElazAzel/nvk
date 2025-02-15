"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

export function UniversityFaculties() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="space-y-6">
      {/* Заголовок и кнопка добавления */}
      <div className="flex justify-between items-center">
        <h2 className={`text-xl font-semibold ${getColorClass('text.primary')}`}>
          Факультеты
        </h2>
        <button className={`px-4 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}>
          Добавить факультет
        </button>
      </div>

      {/* Сетка факультетов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Карточки факультетов */}
        {faculties.map((faculty) => (
          <div key={faculty.id} className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
            <h3 className={`text-lg font-medium mb-2 ${getColorClass('text.primary')}`}>
              {faculty.name}
            </h3>
            <div className={`text-sm ${getColorClass('text.secondary')} space-y-2`}>
              <p>Студентов: {faculty.studentsCount}</p>
              <p>Специальностей: {faculty.programsCount}</p>
              <p>Средний балл: {faculty.averageGrade}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className={`px-3 py-1 ${getVariantClass('button', 'outline')} rounded-lg text-sm`}>
                Подробнее
              </button>
              <button className={`px-3 py-1 ${getVariantClass('button', 'outline')} rounded-lg text-sm`}>
                Редактировать
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const faculties = [
  {
    id: 1,
    name: 'Факультет информационных технологий',
    studentsCount: 1200,
    programsCount: 5,
    averageGrade: 3.8
  },
  {
    id: 2,
    name: 'Экономический факультет',
    studentsCount: 950,
    programsCount: 4,
    averageGrade: 3.9
  },
  {
    id: 3,
    name: 'Инженерный факультет',
    studentsCount: 800,
    programsCount: 6,
    averageGrade: 3.7
  },
  {
    id: 4,
    name: 'Медицинский факультет',
    studentsCount: 600,
    programsCount: 3,
    averageGrade: 4.1
  },
  {
    id: 5,
    name: 'Факультет педагогики',
    studentsCount: 450,
    programsCount: 4,
    averageGrade: 3.9
  },
  {
    id: 6,
    name: 'Юридический факультет',
    studentsCount: 350,
    programsCount: 2,
    averageGrade: 3.8
  }
]; 