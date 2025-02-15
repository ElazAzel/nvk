"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

export function UniversityAnalytics() {
  const { getColorClass } = useThemeStyles();

  const data = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май'],
    datasets: [
      {
        label: 'Пример данных',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div className={`p-6 ${getColorClass('background.primary')} rounded-lg`}>
        <h2 className={`text-xl font-bold ${getColorClass('text.primary')}`}>
          Аналитика
        </h2>
        <Bar data={data} />
        <Line data={data} />
        <Doughnut data={data} />
      </div>
    </div>
  );
} 