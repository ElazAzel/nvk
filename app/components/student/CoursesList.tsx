"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

const courses = [
  {
    id: 1,
    title: 'React Advanced',
    instructor: 'Александр Иванов',
    progress: 65,
    nextLesson: '2024-02-15T14:00:00',
    image: '/courses/react.png'
  },
  {
    id: 2,
    title: 'Machine Learning Basics',
    instructor: 'Мария Петрова',
    progress: 30,
    nextLesson: '2024-02-16T10:00:00',
    image: '/courses/ml.png'
  },
  {
    id: 3,
    title: 'Cloud Computing',
    instructor: 'Дмитрий Сидоров',
    progress: 85,
    nextLesson: '2024-02-14T16:00:00',
    image: '/courses/cloud.png'
  }
];

export function CoursesList() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className={`${getVariantClass('card', 'primary')} p-4 rounded-lg hover:shadow-lg transition-shadow`}
        >
          <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2">
              <h3 className="text-white font-medium">{course.title}</h3>
              <p className="text-white/80 text-sm">{course.instructor}</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className={getColorClass('text.secondary')}>Прогресс</span>
                <span className={getColorClass('text.primary')}>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className={`text-xs ${getColorClass('text.secondary')}`}>
                  Следующее занятие
                </p>
                <p className={`text-sm font-medium ${getColorClass('text.primary')}`}>
                  {new Date(course.nextLesson).toLocaleString('ru', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <button
                className={`px-3 py-1 ${getVariantClass('button', 'outline')} rounded-lg text-sm`}
              >
                Продолжить
              </button>
            </div>
          </div>
        </div>
      ))}
      <div
        className={`${getVariantClass('card', 'primary')} p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors flex flex-col items-center justify-center text-center cursor-pointer`}
      >
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-2">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className={`font-medium ${getColorClass('text.primary')}`}>
          Записаться на новый курс
        </h3>
        <p className={`text-sm ${getColorClass('text.secondary')}`}>
          Выберите из каталога курсов
        </p>
      </div>
    </div>
  );
} 