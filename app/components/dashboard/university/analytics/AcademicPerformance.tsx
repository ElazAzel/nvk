"use client";

interface PerformanceData {
  faculty: string;
  gpa: number;
  attendance: number;
  completion: number;
}

export default function AcademicPerformance() {
  const data: PerformanceData[] = [
    {
      faculty: "Компьютерные науки",
      gpa: 3.6,
      attendance: 92,
      completion: 95
    },
    {
      faculty: "Бизнес",
      gpa: 3.4,
      attendance: 88,
      completion: 92
    },
    {
      faculty: "Инженерия",
      gpa: 3.3,
      attendance: 90,
      completion: 88
    },
    {
      faculty: "Медицина",
      gpa: 3.7,
      attendance: 95,
      completion: 96
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Академическая успеваемость</h2>
        <select className="px-3 py-1 border rounded-lg text-sm">
          <option>По факультетам</option>
          <option>По курсам</option>
          <option>По программам</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-gray-700">
              <th className="pb-3 font-medium">Факультет</th>
              <th className="pb-3 font-medium">GPA</th>
              <th className="pb-3 font-medium">Посещаемость</th>
              <th className="pb-3 font-medium">Завершаемость</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4">{item.faculty}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.gpa >= 3.5
                      ? 'text-green-700 bg-green-100'
                      : item.gpa >= 3.0
                      ? 'text-yellow-700 bg-yellow-100'
                      : 'text-red-700 bg-red-100'
                  }`}>
                    {item.gpa}
                  </span>
                </td>
                <td className="py-4">{item.attendance}%</td>
                <td className="py-4">{item.completion}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 