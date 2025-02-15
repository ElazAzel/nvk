"use client";

import { Line, Doughnut } from 'react-chartjs-2';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface EmploymentAnalyticsProps {
  data: {
    totalGraduates: number;
    employedGraduates: number;
    employmentRate: number;
    byIndustry: {
      industry: string;
      count: number;
    }[];
    threeYearTrend: {
      year: string;
      employmentRate: number;
    }[];
  };
}

export function EmploymentAnalytics({ data }: EmploymentAnalyticsProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const trendData = {
    labels: data.threeYearTrend.map(item => item.year),
    datasets: [
      {
        label: 'Процент трудоустройства',
        data: data.threeYearTrend.map(item => item.employmentRate),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3
      }
    ]
  };

  const industryData = {
    labels: data.byIndustry.map(item => item.industry),
    datasets: [
      {
        data: data.byIndustry.map(item => item.count),
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(249, 115, 22, 0.5)',
          'rgba(99, 102, 241, 0.5)',
          'rgba(236, 72, 153, 0.5)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(34, 197, 94)',
          'rgb(249, 115, 22)',
          'rgb(99, 102, 241)',
          'rgb(236, 72, 153)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Всего выпускников
          </h3>
          <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
            {data.totalGraduates}
          </p>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            За последние 3 года
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Трудоустроено
          </h3>
          <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
            {data.employedGraduates}
          </p>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            По специальности
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Процент трудоустройства
          </h3>
          <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
            {data.employmentRate}%
          </p>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            Текущий показатель
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Динамика трудоустройства
          </h3>
          <div className="h-64">
            <Line
              data={trendData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100
                  }
                }
              }}
            />
          </div>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            По отраслям
          </h3>
          <div className="h-64">
            <Doughnut
              data={industryData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right'
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 