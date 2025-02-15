"use client";

export default function ActiveVacancies() {
  const vacancies = [
    {
      id: 1,
      title: "Frontend Developer",
      responses: 25,
      views: 150,
      status: "active",
      posted: "3 дня назад"
    },
    {
      id: 2,
      title: "UX Designer",
      responses: 18,
      views: 120,
      status: "active",
      posted: "5 дней назад"
    },
    {
      id: 3,
      title: "Project Manager",
      responses: 30,
      views: 200,
      status: "active",
      posted: "1 неделю назад"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Активные вакансии</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          + Добавить вакансию
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b dark:border-gray-700">
              <th className="pb-3 font-medium">Вакансия</th>
              <th className="pb-3 font-medium">Отклики</th>
              <th className="pb-3 font-medium">Просмотры</th>
              <th className="pb-3 font-medium">Опубликовано</th>
              <th className="pb-3 font-medium">Действия</th>
            </tr>
          </thead>
          <tbody>
            {vacancies.map(vacancy => (
              <tr key={vacancy.id} className="border-b dark:border-gray-700">
                <td className="py-4">
                  <div className="font-medium">{vacancy.title}</div>
                </td>
                <td className="py-4">{vacancy.responses}</td>
                <td className="py-4">{vacancy.views}</td>
                <td className="py-4">{vacancy.posted}</td>
                <td className="py-4">
                  <button className="text-blue-600 hover:text-blue-700 mr-3">
                    Редактировать
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    Архивировать
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