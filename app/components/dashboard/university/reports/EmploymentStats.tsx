"use client";

interface EmploymentData {
  field: string;
  employed: number;
  total: number;
  avgSalary: string;
  companies: string[];
}

export default function EmploymentStats() {
  const stats: EmploymentData[] = [
    {
      field: "Разработка ПО",
      employed: 85,
      total: 95,
      avgSalary: "850,000 ₸",
      companies: ["Kaspi.kz", "BTS Digital", "Kolesa Group"]
    },
    {
      field: "Аналитика данных",
      employed: 45,
      total: 55,
      avgSalary: "650,000 ₸",
      companies: ["Jusan", "Halyk Bank", "Air Astana"]
    },
    {
      field: "UX/UI Дизайн",
      employed: 28,
      total: 35,
      avgSalary: "550,000 ₸",
      companies: ["Chocofamily", "DAR", "Zero.kz"]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Статистика трудоустройства</h2>
        <select className="px-3 py-1 border rounded-lg text-sm">
          <option>За год</option>
          <option>За 2 года</option>
          <option>За 3 года</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-gray-700">
              <th className="pb-3 font-medium">Направление</th>
              <th className="pb-3 font-medium">Трудоустроено</th>
              <th className="pb-3 font-medium">Процент</th>
              <th className="pb-3 font-medium">Средняя ЗП</th>
              <th className="pb-3 font-medium">Топ компании</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {stats.map((stat, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4">{stat.field}</td>
                <td className="py-4">
                  {stat.employed} из {stat.total}
                </td>
                <td className="py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    (stat.employed / stat.total) * 100 >= 90
                      ? 'text-green-700 bg-green-100'
                      : (stat.employed / stat.total) * 100 >= 70
                      ? 'text-yellow-700 bg-yellow-100'
                      : 'text-red-700 bg-red-100'
                  }`}>
                    {Math.round((stat.employed / stat.total) * 100)}%
                  </span>
                </td>
                <td className="py-4">{stat.avgSalary}</td>
                <td className="py-4">
                  <div className="flex flex-wrap gap-1">
                    {stat.companies.map((company, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 