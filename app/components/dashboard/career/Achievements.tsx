"use client";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string | null;
  points: number;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Первые шаги",
      description: "Заполните профиль и загрузите резюме",
      icon: "🎯",
      unlockedAt: "2024-01-15",
      points: 50
    },
    {
      id: 2,
      title: "Студент года",
      description: "Пройдите 5 курсов с отличием",
      icon: "🎓",
      unlockedAt: null,
      points: 100
    },
    {
      id: 3,
      title: "Сетевой гений",
      description: "Установите 10 профессиональных контактов",
      icon: "🤝",
      unlockedAt: "2024-02-01",
      points: 75
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Достижения</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-4 rounded-lg border ${
              achievement.unlockedAt
                ? 'border-blue-200 dark:border-blue-900'
                : 'border-gray-200 dark:border-gray-700 opacity-60'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">{achievement.icon}</div>
              <div>
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {achievement.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    +{achievement.points} XP
                  </span>
                  {achievement.unlockedAt && (
                    <span className="text-sm text-gray-500">
                      Получено: {new Date(achievement.unlockedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 