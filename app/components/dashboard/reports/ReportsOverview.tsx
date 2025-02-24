"use client";

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export default function ReportsOverview() {
  const stats: StatCard[] = [
    {
      title: "Сгенерировано отчетов",
      value: "124",
      change: "+12",
      trend: "up"
    },
    {
      title: "Запланировано",
      value: "8",
      change: "+2",
      trend: "up"
    },
    {
      title: "Активные шаблоны",
      value: "15",
      change: "+3",
      trend: "up"
    },
    {
      title: "Экспорты данных",
      value: "256",
      change: "+24",
      trend: "up"
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <h3 className="text-sm text-gray-600 dark:text-gray-400">
            {stat.title}
          </h3>
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
  );
} 