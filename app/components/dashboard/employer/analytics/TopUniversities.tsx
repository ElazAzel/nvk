"use client";

interface UniversityData {
  name: string;
  candidates: number;
  hired: number;
  retention: number;
}

export default function TopUniversities() {
  const universities: UniversityData[] = [
    {
      name: "КБТУ",
      candidates: 45,
      hired: 12,
      retention: 95
    },
    {
      name: "МУИТ",
      candidates: 38,
      hired: 8,
      retention: 92
    },
    {
      name: "SDU",
      candidates: 32,
      hired: 7,
      retention: 88
    },
    {
      name: "AIU",
      candidates: 28,
      hired: 6,
      retention: 90
    },
    {
      name: "Satbayev University",
      candidates: 25,
      hired: 5,
      retention: 85
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Топ университетов</h2>
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
              <th className="pb-3 font-medium">Университет</th>
              <th className="pb-3 font-medium">Кандидаты</th>
              <th className="pb-3 font-medium">Наняты</th>
              <th className="pb-3 font-medium">Удержание</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {universities.map((uni, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3">{uni.name}</td>
                <td className="py-3">{uni.candidates}</td>
                <td className="py-3">{uni.hired}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    uni.retention >= 90
                      ? 'text-green-700 bg-green-100'
                      : uni.retention >= 80
                      ? 'text-yellow-700 bg-yellow-100'
                      : 'text-red-700 bg-red-100'
                  }`}>
                    {uni.retention}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 