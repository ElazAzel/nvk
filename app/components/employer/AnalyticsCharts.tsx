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

interface AnalyticsChartsProps {
  monthlyStats: {
    month: string;
    applications: number;
    hires: number;
  }[];
  sourceStats: {
    source: string;
    count: number;
  }[];
}

export function AnalyticsCharts({ monthlyStats, sourceStats }: AnalyticsChartsProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const applicationsData = {
    labels: monthlyStats.map(stat => stat.month),
    datasets: [
      {
        label: 'Заявки',
        data: monthlyStats.map(stat => stat.applications),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3
      },
      {
        label: 'Наймы',
        data: monthlyStats.map(stat => stat.hires),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.3
      }
    ]
  };

  const sourceData = {
    labels: sourceStats.map(stat => stat.source),
    datasets: [
      {
        label: 'Количество кандидатов',
        data: sourceStats.map(stat => stat.count),
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(249, 115, 22, 0.5)',
          'rgba(99, 102, 241, 0.5)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(249, 115, 22)',
          'rgb(99, 102, 241)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Динамика заявок и найма
        </h3>
        <div className="h-64">
          <Line data={applicationsData} options={options} />
        </div>
      </div>

      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Источники кандидатов
        </h3>
        <div className="h-64">
          <Bar data={sourceData} options={options} />
        </div>
      </div>
    </div>
  );
} 