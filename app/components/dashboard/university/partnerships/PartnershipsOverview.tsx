"use client";

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export default function PartnershipsOverview() {
  const stats: StatCard[] = [
    {
      title: "Активные партнеры",
      value: "28",
      change: "+3",
      trend: "up"
    },
    {
      title: "Студенты на стажировках",
      value: "156",
      change: "+12",
      trend: "up"
    },
    {
      title: "Успешные трудоустройства",
      value: "45",
      change: "+8",
      trend: "up"
    },
    {
      title: "Средняя оценка программ",
      value: "4.8",
      change: "+0.2",
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