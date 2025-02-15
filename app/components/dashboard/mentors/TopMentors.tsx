"use client";

interface TopMentor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  specialization: string;
  availability: string;
}

export default function TopMentors() {
  const topMentors: TopMentor[] = [
    {
      id: 1,
      name: "Михаил Иванов",
      title: "Tech Lead",
      avatar: "/avatars/top1.jpg",
      rating: 4.9,
      specialization: "Full Stack Development",
      availability: "Сейчас онлайн"
    },
    {
      id: 2,
      name: "Анна Козлова",
      title: "Product Designer",
      avatar: "/avatars/top2.jpg",
      rating: 4.8,
      specialization: "UI/UX Design",
      availability: "Доступна сегодня"
    },
    {
      id: 3,
      name: "Дмитрий Соколов",
      title: "Senior Developer",
      avatar: "/avatars/top3.jpg",
      rating: 4.9,
      specialization: "Mobile Development",
      availability: "Онлайн через 2 часа"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Топ менторов</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Смотреть всех
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200" />
              <div>
                <h3 className="font-medium">{mentor.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {mentor.title}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span>⭐</span>
                  <span className="text-sm">{mentor.rating}</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {mentor.specialization}
              </p>
              <p className="text-sm text-green-600 mt-1">
                {mentor.availability}
              </p>
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Записаться
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 