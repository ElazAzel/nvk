"use client";

interface Course {
  id: number;
  title: string;
  provider: string;
  thumbnail: string;
  level: string;
  duration: string;
  price: string;
  rating: number;
  studentsCount: number;
  skills: string[];
}

export default function CourseList() {
  const courses: Course[] = [
    {
      id: 1,
      title: "React для начинающих",
      provider: "Tech Academy",
      thumbnail: "/course-thumbnails/react.jpg",
      level: "Начальный",
      duration: "2 месяца",
      price: "45 000 ₸",
      rating: 4.8,
      studentsCount: 1250,
      skills: ["React", "JavaScript", "HTML/CSS"]
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      provider: "Design School",
      thumbnail: "/course-thumbnails/design.jpg",
      level: "Начальный",
      duration: "3 месяца",
      price: "60 000 ₸",
      rating: 4.9,
      studentsCount: 850,
      skills: ["Figma", "UI Design", "UX Research"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-video bg-gray-100" />
          
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{course.provider}</p>

            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <span>{course.level}</span>
              <span>{course.duration}</span>
              <div className="flex items-center gap-1">
                <span>⭐</span>
                <span>{course.rating}</span>
                <span>({course.studentsCount})</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {course.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-semibold">{course.price}</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Записаться
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 