"use client";

interface Skill {
  name: string;
  required: number;
  actual: number;
}

export default function SkillsGap() {
  const skills: Skill[] = [
    { name: "JavaScript", required: 85, actual: 75 },
    { name: "Python", required: 70, actual: 65 },
    { name: "SQL", required: 80, actual: 60 },
    { name: "DevOps", required: 60, actual: 40 },
    { name: "Soft Skills", required: 90, actual: 70 }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Анализ навыков</h2>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-600">
                Разрыв: {skill.required - skill.actual}%
              </span>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full">
              <div
                className="absolute h-2 bg-blue-500 rounded-full"
                style={{ width: `${skill.actual}%` }}
              />
              <div
                className="absolute h-2 bg-red-500 rounded-full opacity-30"
                style={{
                  left: `${skill.actual}%`,
                  width: `${skill.required - skill.actual}%`
                }}
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500">
              <span>Текущий уровень: {skill.actual}%</span>
              <span>Требуемый: {skill.required}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-medium mb-2">Рекомендации</h3>
        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
          <li>• Усилить подготовку по DevOps</li>
          <li>• Добавить больше практики SQL</li>
          <li>• Развивать soft skills через проектную работу</li>
        </ul>
      </div>
    </div>
  );
} 