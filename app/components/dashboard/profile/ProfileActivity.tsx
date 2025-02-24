export default function ProfileActivity() {
  const activities = [
    {
      type: "course",
      title: "Завершил курс React для начинающих",
      date: "2 дня назад",
      icon: "📚"
    },
    {
      type: "job",
      title: "Откликнулся на вакансию Frontend Developer",
      date: "4 дня назад",
      icon: "💼"
    },
    {
      type: "achievement",
      title: "Получил достижение Студент года",
      date: "1 неделю назад",
      icon: "🏆"
    },
    {
      type: "mentor",
      title: "Записался на сессию с ментором",
      date: "2 недели назад",
      icon: "👥"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Активность</h2>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            <div className="text-2xl">{activity.icon}</div>
            <div>
              <div className="font-medium">{activity.title}</div>
              <div className="text-sm text-gray-500">{activity.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 