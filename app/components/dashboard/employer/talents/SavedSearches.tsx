"use client";

interface SavedSearch {
  id: string;
  name: string;
  filters: {
    skills: string[];
    experience: string;
    location: string;
    other: string;
  };
  results: number;
  lastRun: string;
}

export default function SavedSearches() {
  const searches: SavedSearch[] = [
    {
      id: "1",
      name: "Senior Frontend Developers",
      filters: {
        skills: ["React", "TypeScript", "Node.js"],
        experience: "5+ лет",
        location: "Алматы",
        other: "Активный поиск"
      },
      results: 24,
      lastRun: "2024-02-15"
    },
    {
      id: "2",
      name: "UX/UI Designers",
      filters: {
        skills: ["Figma", "Adobe XD", "Prototyping"],
        experience: "3+ года",
        location: "Любая",
        other: "Удаленная работа"
      },
      results: 18,
      lastRun: "2024-02-14"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Сохраненные поиски</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Управление →
        </button>
      </div>

      <div className="space-y-4">
        {searches.map((search) => (
          <div
            key={search.id}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{search.name}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {search.filters.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {search.filters.experience} • {search.filters.location} • {search.filters.other}
                </p>
              </div>
              <div className="text-sm text-gray-600">
                <p>Найдено: {search.results}</p>
                <p className="mt-1">
                  Обновлено: {new Date(search.lastRun).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
                Редактировать
              </button>
              <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700">
                Запустить поиск
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 