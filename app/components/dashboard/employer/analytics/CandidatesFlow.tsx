"use client";

interface StageData {
  stage: string;
  total: number;
  change: number;
}

export default function CandidatesFlow() {
  const stages: StageData[] = [
    {
      stage: "Новые заявки",
      total: 245,
      change: 12
    },
    {
      stage: "Рассмотрение резюме",
      total: 180,
      change: 8
    },
    {
      stage: "Тестовое задание",
      total: 120,
      change: -5
    },
    {
      stage: "Интервью",
      total: 85,
      change: 3
    },
    {
      stage: "Технический этап",
      total: 45,
      change: 2
    },
    {
      stage: "Оффер",
      total: 28,
      change: 5
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Воронка кандидатов</h2>
        <select className="px-3 py-1 border rounded-lg text-sm">
          <option>За месяц</option>
          <option>За квартал</option>
          <option>За год</option>
        </select>
      </div>

      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{stage.stage}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{stage.total}</span>
                <span
                  className={`text-xs ${
                    stage.change >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stage.change >= 0 ? "+" : ""}{stage.change}
                </span>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{
                  width: `${(stage.total / stages[0].total) * 100}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Конверсия: 11.4%</span>
          <span>Среднее время: 18 дней</span>
        </div>
      </div>
    </div>
  );
} 