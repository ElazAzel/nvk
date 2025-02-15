"use client";

interface Talent {
  id: string;
  name: string;
  title: string;
  experience: string;
  skills: string[];
  education: string;
  location: string;
  availability: string;
  salary: string;
  match: number;
}

export default function TalentsList() {
  const talents: Talent[] = [
    {
      id: "1",
      name: "Александр Ким",
      title: "Senior Frontend Developer",
      experience: "5+ лет",
      skills: ["React", "TypeScript", "Node.js"],
      education: "КБТУ, Computer Science",
      location: "Алматы",
      availability: "Активный поиск",
      salary: "от 800,000 ₸",
      match: 95
    },
    {
      id: "2",
      name: "Мария Иванова",
      title: "UX/UI Designer",
      experience: "3 года",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      education: "МУИТ, Design",
      location: "Астана",
      availability: "Рассмотрит предложения",
      salary: "от 500,000 ₸",
      match: 88
    },
    {
      id: "3",
      name: "Арман Сатаев",
      title: "DevOps Engineer",
      experience: "4 года",
      skills: ["Docker", "Kubernetes", "AWS"],
      education: "SDU, Information Systems",
      location: "Удаленно",
      availability: "Активный поиск",
      salary: "от 1,000,000 ₸",
      match: 82
    }
  ];

  return (
    <div className="space-y-4">
      {talents.map((talent) => (
        <div
          key={talent.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div>
                <h3 className="font-medium">{talent.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {talent.title}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {talent.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Совпадение</span>
              <span className={`px-2 py-1 text-sm font-medium rounded-full ${
                talent.match >= 90
                  ? 'text-green-700 bg-green-100'
                  : talent.match >= 80
                  ? 'text-yellow-700 bg-yellow-100'
                  : 'text-red-700 bg-red-100'
              }`}>
                {talent.match}%
              </span>
            </div>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Опыт:</span> {talent.experience}
            </div>
            <div>
              <span className="font-medium">Образование:</span> {talent.education}
            </div>
            <div>
              <span className="font-medium">Локация:</span> {talent.location}
            </div>
            <div>
              <span className="font-medium">Зарплата:</span> {talent.salary}
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className={`text-sm ${
              talent.availability === 'Активный поиск'
                ? 'text-green-600'
                : 'text-gray-600'
            }`}>
              {talent.availability}
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700">
                Просмотреть профиль
              </button>
              <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Связаться
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 