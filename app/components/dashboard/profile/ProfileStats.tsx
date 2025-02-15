export default function ProfileStats() {
  const stats = [
    { label: "Уровень", value: "Джуниор", icon: "📊" },
    { label: "XP", value: "350", icon: "⭐" },
    { label: "Курсов пройдено", value: "5", icon: "📚" },
    { label: "Достижений", value: "8", icon: "🏆" }
  ];

  const achievements = [
    { name: "Первые шаги", description: "Заполнил профиль", date: "15.01.2024" },
    { name: "Студент года", description: "Прошел 5 курсов", date: "01.02.2024" },
    { name: "Сетевой гений", description: "10 контактов", date: "10.02.2024" }
  ];

  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {stat.label}
            </div>
            <div className="text-lg font-semibold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Recent achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Последние достижения</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-2xl">🏆</div>
              <div>
                <div className="font-medium">{achievement.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {achievement.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 