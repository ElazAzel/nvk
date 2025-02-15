"use client";

interface ProgramMetric {
  name: string;
  value: string;
  target: string;
  progress: number;
}

export default function ProgramEffectiveness() {
  const metrics: ProgramMetric[] = [
    {
      name: "Посещаемость",
      value: "92%",
      target: "95%",
      progress: 92
    },
    {
      name: "Выполнение заданий",
      value: "87%",
      target: "90%",
      progress: 87
    },
    {
      name: "Удовлетворенность",
      value: "4.5",
      target: "4.8",
      progress: 85
    },
    {
      name: "Практическое применение",
      value: "78%",
      target: "80%",
      progress: 78
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Эффективность программ</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Подробнее →
        </button>
      </div>

      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium">{metric.name}</span>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{metric.value}</span>
                <span className="mx-1">/</span>
                <span>цель: {metric.target}</span>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  metric.progress >= 90
                    ? 'bg-green-500'
                    : metric.progress >= 70
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${metric.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 