"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AnalyticsSummary() {
  const employmentData = {
    labels: ['Трудоустроены', 'В поиске', 'Продолжают обучение'],
    datasets: [
      {
        data: [80, 15, 5],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(234, 179, 8, 0.8)',
          'rgba(59, 130, 246, 0.8)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(59, 130, 246, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const metrics = [
    {
      label: "Трудоустройство через 6 месяцев",
      value: "80%",
      change: "+5%",
      trend: "up"
    },
    {
      label: "Средняя зарплата выпускников",
      value: "450 000 ₸",
      change: "+12%",
      trend: "up"
    },
    {
      label: "Количество партнеров-работодателей",
      value: "156",
      change: "+23",
      trend: "up"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Краткая аналитика</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="max-w-[300px] mx-auto">
            <Doughnut 
              data={employmentData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {metric.label}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className={`text-sm ${
                  metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 