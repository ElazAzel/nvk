"use client";

interface FacultyData {
  name: string;
  students: number;
  publications: number;
  rating: number;
  projects: number;
}

export default function FacultyAnalytics() {
  const data: FacultyData[] = [
    {
      name: "Компьютерные науки",
      students: 850,
      publications: 45,
      rating: 4.8,
      projects: 28
    },
    {
      name: "Бизнес школа",
      students: 720,
      publications: 38,
      rating: 4.6,
      projects: 22
    },
    {
      name: "Инженерный факультет",
      students: 680,
      publications: 42,
      rating: 4.5,
      projects: 25
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Аналитика факультетов</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Подробнее →
        </button>
      </div>

      <div className="space-y-6">
        {data.map((faculty, index) => (
          <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{faculty.name}</h3>
                <div className="mt-2 grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <span>Студентов: {faculty.students}</span>
                  <span>Публикаций: {faculty.publications}</span>
                  <span>Проектов: {faculty.projects}</span>
                  <span>Рейтинг: {faculty.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-medium">{faculty.rating}</span>
              </div>
            </div>
            <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{
                  width: `${(faculty.rating / 5) * 100}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 