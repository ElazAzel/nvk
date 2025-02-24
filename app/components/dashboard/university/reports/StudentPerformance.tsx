"use client";

interface PerformanceData {
  category: string;
  value: number;
  total: number;
  change: number;
}

export default function StudentPerformance() {
  const performanceData: PerformanceData[] = [
    {
      category: "Отличники",
      value: 245,
      total: 1000,
      change: 12
    },
    {
      category: "Хорошисты",
      value: 485,
      total: 1000,
      change: 8
    },
    {
      category: "Средний уровень",
      value: 215,
      total: 1000,
      change: -5
    },
    {
      category: "Требуется поддержка",
      value: 55,
      total: 1000,
      change: -15
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Успеваемость студентов</h2>
        <select className="px-3 py-1 border rounded-lg text-sm">
          <option>За семестр</option>
          <option>За год</option>
          <option>За все время</option>
        </select>
      </div>

      <div className="space-y-4">
        {performanceData.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{item.category}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{item.value}</span>
                <span
                  className={`text-xs ${
                    item.change >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.change >= 0 ? "+" : ""}{item.change}
                </span>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{
                  width: `${(item.value / item.total) * 100}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 