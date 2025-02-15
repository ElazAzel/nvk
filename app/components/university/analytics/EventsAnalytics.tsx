"use client";

import { Bar, Doughnut } from 'react-chartjs-2';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface EventsAnalyticsProps {
  data: {
    totalEvents: number;
    participatedStudents: number;
    certificatesIssued: number;
    eventsByType: {
      type: string;
      count: number;
    }[];
  };
}

export function EventsAnalytics({ data }: EventsAnalyticsProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const eventTypeData = {
    labels: data.eventsByType.map(item => item.type),
    datasets: [
      {
        data: data.eventsByType.map(item => item.count),
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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Всего мероприятий
          </h3>
          <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
            {data.totalEvents}
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Участников
          </h3>
          <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
            {data.participatedStudents}
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Выдано сертификатов
          </h3>
          <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
            {data.certificatesIssued}
          </p>
          <button
            className={`mt-4 px-4 py-2 text-sm ${getVariantClass('button', 'outline')} rounded-lg`}
          >
            Скачать отчет
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Типы мероприятий
          </h3>
          <div className="h-64">
            <Doughnut
              data={eventTypeData}
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

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Распределение по месяцам
          </h3>
          <div className="h-64">
            <Bar
              data={{
                labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
                datasets: [
                  {
                    label: 'Количество мероприятий',
                    data: [12, 19, 15, 25, 22, 30],
                    backgroundColor: 'rgba(59, 130, 246, 0.5)',
                    borderColor: 'rgb(59, 130, 246)',
                    borderWidth: 1
                  }
                ]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true
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