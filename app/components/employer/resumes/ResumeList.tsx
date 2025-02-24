"use client";

import Image from 'next/image'

interface Resume {
  id: number;
  name: string;
  age: number;
  photo: string;
  specialization: string;
  skills: string[];
  experience: string;
  education: string;
  rating: number;
}

export default function ResumeList() {
  const resumes: Resume[] = [
    {
      id: 1,
      name: "Александр Ким",
      age: 22,
      photo: "/avatars/1.jpg",
      specialization: "Frontend Developer",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      experience: "1 год",
      education: "Бакалавриат",
      rating: 4.8
    },
    {
      id: 2,
      name: "Анна Ли",
      age: 23,
      photo: "/avatars/2.jpg",
      specialization: "UX/UI Designer",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      experience: "2 года",
      education: "Магистратура",
      rating: 4.9
    },
    {
      id: 3,
      name: "Максим Пак",
      age: 21,
      photo: "/avatars/3.jpg",
      specialization: "Backend Developer",
      skills: ["Python", "Django", "PostgreSQL"],
      experience: "6 месяцев",
      education: "Бакалавриат",
      rating: 4.5
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumes.map((resume) => (
        <div 
          key={resume.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <Image
                src={resume.photo}
                alt={resume.name}
                width={64}
                height={64}
                layout="responsive"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{resume.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {resume.age} лет, {resume.specialization}
              </p>
              <div className="flex items-center gap-1 text-sm text-yellow-500 mt-1">
                {"★".repeat(Math.floor(resume.rating))}
                <span className="text-gray-600 dark:text-gray-300 ml-1">
                  {resume.rating}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Опыт работы: {resume.experience}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Образование: {resume.education}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <button className="w-full mt-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
            Посмотреть подробнее →
          </button>
        </div>
      ))}
    </div>
  );
} 