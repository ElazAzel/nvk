"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { LineChart } from '@/app/components/charts/LineChart';
import { DoughnutChart } from '@/app/components/charts/DoughnutChart';
import { BarChart } from '@/app/components/charts/BarChart';
import { StatCard } from '@/app/components/common/StatCard';

export default function StudentAnalyticsPage() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const progressData = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [{
      label: 'Успеваемость',
      data: [75, 78, 82, 79, 85, 88],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }]
  };

  const skillsData = {
    labels: ['Технические', 'Soft Skills', 'Языки', 'Лидерство'],
    datasets: [{
      data: [85, 75, 65, 70],
      backgroundColor: [
        'rgba(59, 130, 246, 0.5)',
        'rgba(16, 185, 129, 0.5)',
        'rgba(245, 158, 11, 0.5)',
        'rgba(139, 92, 246, 0.5)',
      ],
    }]
  };

  return (
    <div className="space-y-8">
      {/* Статистика */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Средний балл"
          value="4.2"
          change={{ value: 0.3, type: 'increase' }}
          trend="up"
        />
        <StatCard
          title="Рейтинг в группе"
          value="5/25"
          change={{ value: 2, type: 'increase' }}
          trend="up"
        />
        <StatCard
          title="Выполнено заданий"
          value="85%"
          change={{ value: 5, type: 'increase' }}
          trend="up"
        />
        <StatCard
          title="Посещаемость"
          value="92%"
          change={{ value: 3, type: 'decrease' }}
          trend="down"
        />
      </div>

      {/* Графики */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Прогресс обучения */}
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Прогресс обучения
          </h3>
          <div className="h-[300px]">
            <LineChart data={progressData} />
          </div>
        </div>

        {/* Навыки */}
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Развитие навыков
          </h3>
          <div className="h-[300px] flex items-center justify-center">
            <DoughnutChart data={skillsData} />
          </div>
        </div>
      </div>

      {/* Дополнительная статистика */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Активность на платформе
          </h3>
          <div className="h-[300px]">
            <BarChart data={{
              labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
              datasets: [{
                label: 'Часы активности',
                data: [4, 5, 3, 6, 4, 2, 1],
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgb(59, 130, 246)',
              }]
            }} />
          </div>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Распределение времени
          </h3>
          <div className="h-[300px] flex items-center justify-center">
            <DoughnutChart data={{
              labels: ['Лекции', 'Практика', 'Проекты', 'Самообучение'],
              datasets: [{
                data: [30, 25, 25, 20],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.5)',
                  'rgba(16, 185, 129, 0.5)',
                  'rgba(245, 158, 11, 0.5)',
                  'rgba(139, 92, 246, 0.5)',
                ],
              }]
            }} />
          </div>
        </div>
      </div>
    </div>
  );
} 