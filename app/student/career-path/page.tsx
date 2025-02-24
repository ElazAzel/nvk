"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { LineChart } from '@/app/components/charts/LineChart';
import { StatCard } from '@/app/components/common/StatCard';

export default function CareerPathPage() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="space-y-8">
      {/* Статистика */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Пройдено этапов"
          value="3/5"
          change={{ value: 1, type: 'increase' }}
          trend="up"
        />
        <StatCard
          title="Собеседований"
          value="5"
          change={{ value: 2, type: 'increase' }}
          trend="up"
        />
        <StatCard
          title="Стажировок"
          value="2"
          change={{ value: 1, type: 'increase' }}
          trend="up"
        />
        <StatCard
          title="Предложений"
          value="1"
          change={{ value: 1, type: 'increase' }}
          trend="up"
        />
      </div>

      {/* Графики */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Прогресс карьерного развития
          </h3>
          <div className="h-[300px]">
            <LineChart data={{
              labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
              datasets: [{
                label: 'Прогресс',
                data: [20, 35, 45, 60, 75, 85],
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
              }]
            }} />
          </div>
        </div>

        {/* Добавьте другие графики по необходимости */}
      </div>
    </div>
  );
} 