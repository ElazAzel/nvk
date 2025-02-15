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
      title: "Средний балл",
      value: "3.8",
      change: "+0.2",
      trend: "up"
    },
    {
      title: "Успеваемость",
      value: "87%",
      change: "+5%",
      trend: "up"
    },
    {
      title: "Трудоустройство",
      value: "76%",
      change: "+8%",
      trend: "up"
    },
    {
      title: "Завершение программ",
      value: "92%",
      change: "+3%",
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