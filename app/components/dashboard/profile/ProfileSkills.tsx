export default function ProfileSkills() {
  const skills = {
    technical: [
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "TypeScript", level: 65 },
      { name: "HTML/CSS", level: 90 },
      { name: "Node.js", level: 60 }
    ],
    languages: [
      { name: "Русский", level: 100 },
      { name: "Английский", level: 85 },
      { name: "Казахский", level: 90 }
    ],
    soft: ["Командная работа", "Коммуникабельность", "Обучаемость", "Организованность"]
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Навыки</h2>

      <div className="space-y-8">
        {/* Technical skills */}
        <div>
          <h3 className="font-semibold mb-4">Технические навыки</h3>
          <div className="space-y-4">
            {skills.technical.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="font-semibold mb-4">Языки</h3>
          <div className="space-y-4">
            {skills.languages.map((language, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{language.name}</span>
                  <span className="text-sm text-gray-500">{language.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-600 rounded-full"
                    style={{ width: `${language.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <div>
          <h3 className="font-semibold mb-4">Soft skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 