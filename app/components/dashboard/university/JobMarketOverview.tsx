"use client";

interface JobTrend {
  position: string;
  demand: number;
  change: string;
  trend: 'up' | 'down';
}

export default function JobMarketOverview() {
  const trends: JobTrend[] = [
    {
      position: "Frontend Developer",
      demand: 150,
      change: "+12%",
      trend: "up"
    },
    {
      position: "Data Analyst",
      demand: 120,
      change: "+15%",
      trend: "up"
    },
    {
      position: "DevOps Engineer",
      demand: 80,
      change: "+20%",
      trend: "up"
    },
    {
      position: "Project Manager",
      demand: 60,
      change: "-5%",
      trend: "down"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold">Обзор рынка труда</h2>
        <button className="text-blue-600">Подробнее →</button>
      </div>

      <div className="space-y-4">
        {trends.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div>
              <h3 className="font-medium">{item.position}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.demand} вакансий
              </p>
            </div>
            <span
              className={`text-sm ${
                item.trend === "up"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-medium mb-2">Тренды</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>• Растущий спрос на IT специалистов</p>
          <p>• Высокая потребность в Data специалистах</p>
          <p>• Новые требования: soft skills</p>
        </div>
      </div>
    </div>
  );
} 