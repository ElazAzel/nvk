"use client";

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  specialization: string[];
  experience: string;
  price: string;
  availability: string;
  description: string;
}

export default function MentorList() {
  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Александр Петров",
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      avatar: "/avatars/mentor1.jpg",
      rating: 4.9,
      reviewsCount: 124,
      specialization: ["React", "TypeScript", "Next.js"],
      experience: "8 лет опыта",
      price: "8000 ₸/час",
      availability: "Доступен сегодня",
      description: "Помогаю разработчикам улучшить их навыки в frontend разработке. Специализируюсь на React и современных JavaScript фреймворках."
    },
    {
      id: 2,
      name: "Елена Смирнова",
      title: "UX/UI Design Lead",
      company: "Design Studio",
      avatar: "/avatars/mentor2.jpg",
      rating: 4.8,
      reviewsCount: 89,
      specialization: ["Figma", "UI Design", "UX Research"],
      experience: "6 лет опыта",
      price: "7000 ₸/час",
      availability: "На этой неделе",
      description: "Помогаю дизайнерам создавать удобные и красивые интерфейсы. Большой опыт в проведении UX-исследований и работе с крупными проектами."
    }
  ];

  return (
    <div className="space-y-6">
      {mentors.map((mentor) => (
        <div
          key={mentor.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0" />

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{mentor.title}</p>
                  <p className="text-sm text-gray-500">{mentor.company}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span className="font-medium">{mentor.rating}</span>
                    <span className="text-gray-500">({mentor.reviewsCount})</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {mentor.experience}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {mentor.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {mentor.specialization.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-green-600">{mentor.availability}</span>
                  <span className="font-medium">{mentor.price}</span>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Записаться
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 