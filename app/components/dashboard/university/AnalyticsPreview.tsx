"use client";
import Link from 'next/link';

export default function AnalyticsPreview() {
  const stats = [
    {
      label: "Всего выпускников",
      value: "1,234",
      change: "+12%",
      trend: "up"
    },
    {
      label: "Трудоустроено",
      value: "987",
      change: "+15%",
      trend: "up"
    },
    {
      label: "Средняя зарплата",
      value: "320,000 ₸",
      change: "+8%",
      trend: "up"
    }
  ];

  return (
    <Link 
      href="/dashboard/analytics"
      className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold">Аналитика выпускников</h2>
        <span className="text-blue-600">Подробнее →</span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-semibold">{stat.value}</span>
              <span
                className={`text-sm ${
                  stat.trend === "up"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-medium mb-2">Быстрый обзор</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>• 75% выпускников работают по специальности</p>
          <p>• Топ отрасль: IT и разработка (35%)</p>
          <p>• Средний срок трудоустройства: 2.5 месяца</p>
        </div>
      </div>
    </Link>
  );
} 