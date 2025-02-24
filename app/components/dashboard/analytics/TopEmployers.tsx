"use client";

interface Employer {
  name: string;
  count: number;
  logo: string;
}

export default function TopEmployers() {
  const employers: Employer[] = [
    { name: "Kaspi.kz", count: 45, logo: "/logos/kaspi.png" },
    { name: "BTS Digital", count: 32, logo: "/logos/bts.png" },
    { name: "Halyk Bank", count: 28, logo: "/logos/halyk.png" },
    { name: "Kolesa Group", count: 25, logo: "/logos/kolesa.png" },
    { name: "Chocofamily", count: 20, logo: "/logos/chocofa.png" }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Топ работодателей</h2>

      <div className="space-y-4">
        {employers.map((employer, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg" />
              <div>
                <h3 className="font-medium">{employer.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {employer.count} выпускников
                </p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              Подробнее →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-medium mb-2">Партнерская программа</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          15 новых компаний присоединились к программе в этом году
        </p>
      </div>
    </div>
  );
} 