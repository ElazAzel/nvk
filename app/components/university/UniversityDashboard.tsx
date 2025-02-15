"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { StatCard } from '@/app/components/common/StatCard';
import { LineChart } from '@/app/components/charts/LineChart';
import { DoughnutChart } from '@/app/components/charts/DoughnutChart';

export function UniversityDashboard() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const stats = [
    { title: 'Всего студентов', value: '12,345', change: '+10%', trend: 'up' as const },
    { title: 'Средний балл', value: '3.8', change: '+0.2', trend: 'up' as const },
    { title: 'Трудоустройство', value: '89%', change: '+5%', trend: 'up' as const },
    { title: 'Активных курсов', value: '156', change: '+12', trend: 'up' as const }
  ];

  const performanceData = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Средний балл',
        data: [3.5, 3.6, 3.7, 3.8, 3.7, 3.9],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)'
      }
    ]
  };

  const specializationData = {
    labels: ['IT', 'Экономика', 'Инженерия', 'Медицина', 'Другое'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(107, 114, 128, 0.8)'
      ]
    }]
  };

  return (
    <div className="space-y-8">
      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Графики */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Успеваемость по месяцам */}
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Динамика успеваемости
          </h3>
          <LineChart data={performanceData} />
        </div>

        {/* Распределение по специальностям */}
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Распределение по специальностям
          </h3>
          <DoughnutChart data={specializationData} />
        </div>
      </div>

      {/* Последние события */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Последние события
        </h3>
        <div className="space-y-4">
          {/* Здесь список последних событий */}
        </div>
      </div>
    </div>
  );
} 