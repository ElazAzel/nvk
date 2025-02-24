"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(200, 200, 200, 0.1)'
      }
    },
    x: {
      grid: {
        color: 'rgba(200, 200, 200, 0.1)'
      }
    }
  }
};

export function StatisticsCharts() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const gpaData = {
    labels: ['Сен', 'Окт', 'Ноя', 'Дек', 'Янв', 'Фев'],
    datasets: [
      {
        label: 'Средний GPA',
        data: [3.2, 3.3, 3.4, 3.4, 3.5, 3.6],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3
      }
    ]
  };

  const attendanceData = {
    labels: ['Сен', 'Окт', 'Ноя', 'Дек', 'Янв', 'Фев'],
    datasets: [
      {
        label: 'Посещаемость (%)',
        data: [85, 87, 82, 88, 90, 89],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.3
      }
    ]
  };

  const internshipData = {
    labels: ['Стажировка', 'Работа', 'В поиске'],
    datasets: [
      {
        label: 'Количество студентов',
        data: [250, 180, 320],
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(249, 115, 22, 0.5)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(249, 115, 22)'
        ],
        borderWidth: 1
      }
    ]
  };

  const activitiesData = {
    labels: ['Курсы', 'Мероприятия', 'Проекты'],
    datasets: [
      {
        label: 'Участие студентов',
        data: [450, 380, 290],
        backgroundColor: [
          'rgba(99, 102, 241, 0.5)',
          'rgba(236, 72, 153, 0.5)',
          'rgba(234, 179, 8, 0.5)'
        ],
        borderColor: [
          'rgb(99, 102, 241)',
          'rgb(236, 72, 153)',
          'rgb(234, 179, 8)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* График GPA */}
      <div>
        <h3 className={`text-sm font-medium mb-2 ${getColorClass('text.secondary')}`}>
          Динамика среднего GPA
        </h3>
        <div className={`h-48 ${getVariantClass('card', 'primary')} rounded-lg p-4`}>
          <Line data={gpaData} options={chartOptions} />
        </div>
      </div>

      {/* График посещаемости */}
      <div>
        <h3 className={`text-sm font-medium mb-2 ${getColorClass('text.secondary')}`}>
          Посещаемость
        </h3>
        <div className={`h-48 ${getVariantClass('card', 'primary')} rounded-lg p-4`}>
          <Line data={attendanceData} options={chartOptions} />
        </div>
      </div>

      {/* График стажировок и работы */}
      <div>
        <h3 className={`text-sm font-medium mb-2 ${getColorClass('text.secondary')}`}>
          Трудоустройство студентов
        </h3>
        <div className={`h-48 ${getVariantClass('card', 'primary')} rounded-lg p-4`}>
          <Bar data={internshipData} options={chartOptions} />
        </div>
      </div>

      {/* График активности */}
      <div>
        <h3 className={`text-sm font-medium mb-2 ${getColorClass('text.secondary')}`}>
          Участие в активностях
        </h3>
        <div className={`h-48 ${getVariantClass('card', 'primary')} rounded-lg p-4`}>
          <Bar data={activitiesData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
} 