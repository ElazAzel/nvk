"use client";

export default function EmployerAnalytics() {
  const metrics = [
    {
      label: "Новых резюме",
      value: "50",
      period: "за неделю",
      icon: "📄",
      trend: "+15%"
    },
    {
      label: "Активных вакансий",
      value: "12",
      period: "сейчас",
      icon: "💼",
      trend: "+2"
    },
    {
      label: "Просмотров вакансий",
      value: "1,250",
      period: "за месяц",
      icon: "👁️",
      trend: "+25%"
    },
    {
      label: "Отклики на вакансии",
      value: "85",
      period: "за месяц",
      icon: "✉️",
      trend: "+10%"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Краткая аналитика</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{metric.icon}</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {metric.label}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">{metric.value}</span>
              <span className="text-sm text-green-500">{metric.trend}</span>
            </div>
            <span className="text-xs text-gray-500 mt-1 block">
              {metric.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 