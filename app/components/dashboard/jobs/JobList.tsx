"use client";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  logo: string;
  posted: string;
  skills: string[];
  match: number;
}

export default function JobList() {
  const jobs: Job[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Алматы",
      salary: "от 600 000 ₸",
      type: "Полная занятость",
      logo: "/company-logos/tech-corp.png",
      posted: "2 дня назад",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      match: 95
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "Удаленно",
      salary: "от 450 000 ₸",
      type: "Частичная занятость",
      logo: "/company-logos/design-studio.png",
      posted: "1 неделю назад",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      match: 85
    }
  ];

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0" />
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                </div>
                <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                  {job.match}% совпадение
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span>{job.location}</span>
                <span>{job.salary}</span>
                <span>{job.type}</span>
                <span>{job.posted}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Откликнуться
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 