"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { LineChart } from '@/app/components/charts/LineChart';
import { DoughnutChart } from '@/app/components/charts/DoughnutChart';

export function StudentDashboard() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  // Моковые данные для графиков
  const attendanceData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
    datasets: [
      {
        label: 'Посещаемость',
        data: [95, 100, 90, 95, 85],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)'
      }
    ]
  };

  const assignmentsData = {
    labels: ['Выполнено', 'В процессе', 'Просрочено'],
    datasets: [{
      data: [12, 5, 2],
      backgroundColor: [
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ]
    }]
  };

  return (
    <div className="space-y-8">
      {/* Основные показатели */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Следующее занятие
          </h3>
          <div className="text-2xl font-bold mb-2">10:00</div>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            Математический анализ
          </p>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            Аудитория 305
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Задания
          </h3>
          <div className="text-2xl font-bold mb-2">5</div>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            Активных заданий
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Уведомления
          </h3>
          <div className="text-2xl font-bold mb-2">3</div>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            Новых уведомления
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Достижения
          </h3>
          <div className="text-2xl font-bold mb-2">8/12</div>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            Получено наград
          </p>
        </div>
      </div>

      {/* Графики */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Посещаемость за неделю
          </h3>
          <LineChart data={attendanceData} />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Статус заданий
          </h3>
          <DoughnutChart data={assignmentsData} />
        </div>
      </div>

      {/* Ближайшие события */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Ближайшие события
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full bg-blue-500`} />
            <div>
              <p className={`font-medium ${getColorClass('text.primary')}`}>
                Лекция по программированию
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                Завтра, 9:00 - Аудитория 401
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full bg-green-500`} />
            <div>
              <p className={`font-medium ${getColorClass('text.primary')}`}>
                Дедлайн проекта
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                Послезавтра, 23:59
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className={`w-2 h-2 rounded-full bg-yellow-500`} />
            <div>
              <p className={`font-medium ${getColorClass('text.primary')}`}>
                Консультация
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                25 мая, 15:00 - Онлайн
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 