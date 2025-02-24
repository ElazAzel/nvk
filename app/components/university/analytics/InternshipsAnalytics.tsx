"use client";

import { Bar, Doughnut } from 'react-chartjs-2';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface InternshipsAnalyticsProps {
  data: {
    totalInternships: number;
    activeInterns: number;
    bySpecialty: {
      specialty: string;
      count: number;
    }[];
    byCompany: {
      company: string;
      count: number;
    }[];
    byDirection: {
      direction: string;
      count: number;
    }[];
  };
}

export function InternshipsAnalytics({ data }: InternshipsAnalyticsProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const specialtyData = {
    labels: data.bySpecialty.map(item => item.specialty),
    datasets: [
      {
        label: 'Количество стажеров',
        data: data.bySpecialty.map(item => item.count),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      }
    ]
  };

  const companyData = {
    labels: data.byCompany.map(item => item.company),
    datasets: [
      {
        data: data.byCompany.map(item => item.count),
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

  const directionData = {
    labels: data.byDirection.map(item => item.direction),
    datasets: [
      {
        label: 'Количество стажировок',
        data: data.byDirection.map(item => item.count),
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Всего стажировок
          </h3>
          <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
            {data.totalInternships}
          </p>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            За все время
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Активные стажеры
          </h3>
          <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
            {data.activeInterns}
          </p>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            В текущем месяце
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            По специальностям
          </h3>
          <div className="h-64">
            <Bar
              data={specialtyData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y' as const,
                scales: {
                  x: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            По компаниям
          </h3>
          <div className="h-64">
            <Doughnut
              data={companyData}
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

      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          По направлениям
        </h3>
        <div className="h-64">
          <Bar
            data={directionData}
            options={{
              responsive: true,
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    </div>
  );
} 