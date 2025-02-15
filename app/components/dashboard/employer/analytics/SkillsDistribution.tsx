"use client";

interface SkillData {
  name: string;
  demand: number;
  supply: number;
}

export default function SkillsDistribution() {
  const skills: SkillData[] = [
    {
      name: "JavaScript/TypeScript",
      demand: 85,
      supply: 75
    },
    {
      name: "React/Next.js",
      demand: 90,
      supply: 65
    },
    {
      name: "Node.js",
      demand: 70,
      supply: 55
    },
    {
      name: "Python",
      demand: 60,
      supply: 80
    },
    {
      name: "DevOps",
      demand: 75,
      supply: 45
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Распределение навыков</h2>
        <select className="px-3 py-1 border rounded-lg text-sm">
          <option>Все отделы</option>
          <option>Разработка</option>
          <option>Дизайн</option>
        </select>
      </div>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-gray-600">
                Разрыв: {skill.demand - skill.supply}%
              </span>
            </div>
            <div className="relative h-4 bg-gray-100 rounded-full">
              <div
                className="absolute h-full bg-blue-600 rounded-full"
                style={{ width: `${skill.supply}%` }}
              />
              <div
                className="absolute h-full w-0.5 bg-red-500"
                style={{ left: `${skill.demand}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Доступно: {skill.supply}%</span>
              <span>Требуется: {skill.demand}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 