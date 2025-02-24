"use client";

interface Industry {
  name: string;
  percentage: number;
  color: string;
}

export default function IndustryDistribution() {
  const industries: Industry[] = [
    { name: "IT и разработка", percentage: 35, color: "bg-blue-500" },
    { name: "Финансы и банкинг", percentage: 20, color: "bg-green-500" },
    { name: "Телекоммуникации", percentage: 15, color: "bg-yellow-500" },
    { name: "Образование", percentage: 10, color: "bg-purple-500" },
    { name: "Другие отрасли", percentage: 20, color: "bg-gray-500" }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Распределение по отраслям</h2>

      <div className="space-y-4">
        {industries.map((industry, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{industry.name}</span>
              <span className="text-sm text-gray-600">{industry.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 ${industry.color} rounded-full`}
                style={{ width: `${industry.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-medium mb-2">Тренды</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>↑ IT сектор: рост на 5%</p>
          <p>↑ Финтех: рост на 3%</p>
          <p>↓ Телеком: снижение на 2%</p>
        </div>
      </div>
    </div>
  );
} 