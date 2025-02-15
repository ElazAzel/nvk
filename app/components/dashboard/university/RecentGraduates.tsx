"use client";

interface Graduate {
  name: string;
  specialization: string;
  company: string;
  position: string;
  avatar: string;
}

export default function RecentGraduates() {
  const graduates: Graduate[] = [
    {
      name: "Алексей Смирнов",
      specialization: "Computer Science",
      company: "Kaspi.kz",
      position: "Frontend Developer",
      avatar: "/avatars/graduate1.jpg"
    },
    {
      name: "Мария Ким",
      specialization: "Data Science",
      company: "BTS Digital",
      position: "Data Analyst",
      avatar: "/avatars/graduate2.jpg"
    },
    {
      name: "Арман Сатаев",
      specialization: "Software Engineering",
      company: "Kolesa Group",
      position: "Backend Developer",
      avatar: "/avatars/graduate3.jpg"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold">Недавние выпускники</h2>
        <button className="text-blue-600">Все выпускники →</button>
      </div>

      <div className="space-y-4">
        {graduates.map((graduate, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <h3 className="font-medium">{graduate.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {graduate.specialization}
              </p>
              <p className="text-sm text-gray-500">
                {graduate.position} в {graduate.company}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-medium mb-2">Статистика трудоустройства</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>• 85% трудоустроены в первые 3 месяца</p>
          <p>• 70% работают по специальности</p>
          <p>• Средняя зарплата: 320,000 ₸</p>
        </div>
      </div>
    </div>
  );
} 