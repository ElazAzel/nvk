"use client";
import { useState } from 'react';

interface RecommendedCourse {
  id: number;
  title: string;
  provider: string;
  thumbnail: string;
  duration: string;
  match: number;
  category: string;
}

export default function RecommendedCourses() {
  const [courses] = useState<RecommendedCourse[]>([
    {
      id: 1,
      title: "Python для Data Science",
      provider: "Data Academy",
      thumbnail: "/course-thumbnails/python.jpg",
      duration: "3 месяца",
      match: 98,
      category: "Data Science"
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      provider: "Web School",
      thumbnail: "/course-thumbnails/js.jpg",
      duration: "2 месяца",
      match: 95,
      category: "Web Development"
    },
    {
      id: 3,
      title: "Product Management",
      provider: "PM School",
      thumbnail: "/course-thumbnails/pm.jpg",
      duration: "4 месяца",
      match: 90,
      category: "Management"
    }
  ]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Рекомендуемые курсы</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Смотреть все
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group relative bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-gray-200 relative">
              <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-sm rounded-full">
                {course.match}% совпадение
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                {course.category}
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {course.provider}
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {course.duration}
                </span>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Подробнее →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 