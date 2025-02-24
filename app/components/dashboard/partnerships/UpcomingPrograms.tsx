"use client";

interface Program {
  id: string;
  name: string;
  company: string;
  startDate: string;
  duration: string;
  spots: number;
  applications: number;
  status: 'upcoming' | 'in-progress' | 'completed';
}

export default function UpcomingPrograms() {
  const programs: Program[] = [
    {
      id: "1",
      name: "Frontend Development Internship",
      company: "Kaspi.kz",
      startDate: "2024-03-01",
      duration: "3 месяца",
      spots: 10,
      applications: 45,
      status: 'upcoming'
    },
    {
      id: "2",
      name: "Data Science Mentorship",
      company: "BTS Digital",
      startDate: "2024-03-15",
      duration: "6 месяцев",
      spots: 5,
      applications: 28,
      status: 'upcoming'
    },
    {
      id: "3",
      name: "Backend Development Program",
      company: "Kolesa Group",
      startDate: "2024-04-01",
      duration: "4 месяца",
      spots: 8,
      applications: 32,
      status: 'upcoming'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Предстоящие программы</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Все программы →
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-gray-700">
              <th className="pb-3 font-medium">Программа</th>
              <th className="pb-3 font-medium">Компания</th>
              <th className="pb-3 font-medium">Дата начала</th>
              <th className="pb-3 font-medium">Длительность</th>
              <th className="pb-3 font-medium">Мест</th>
              <th className="pb-3 font-medium">Заявок</th>
              <th className="pb-3 font-medium">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {programs.map((program, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4">
                  <div>
                    <div className="font-medium">{program.name}</div>
                  </div>
                </td>
                <td className="py-4">{program.company}</td>
                <td className="py-4">{new Date(program.startDate).toLocaleDateString()}</td>
                <td className="py-4">{program.duration}</td>
                <td className="py-4">{program.spots}</td>
                <td className="py-4">{program.applications}</td>
                <td className="py-4">
                  <button className="text-blue-600 hover:text-blue-700">
                    Подробнее
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 