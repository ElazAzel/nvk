"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

const resumeData = {
  education: [
    {
      id: 1,
      institution: 'AITU',
      degree: 'Бакалавр компьютерных наук',
      period: '2020 - 2024',
      gpa: '3.8'
    }
  ],
  experience: [
    {
      id: 1,
      company: 'Tech Solutions',
      position: 'Frontend Developer (Стажер)',
      period: 'Июнь 2023 - Август 2023',
      description: 'Разработка пользовательских интерфейсов, работа с React и TypeScript'
    }
  ],
  skills: [
    { id: 1, name: 'React', level: 'Продвинутый' },
    { id: 2, name: 'TypeScript', level: 'Средний' },
    { id: 3, name: 'Node.js', level: 'Начальный' },
    { id: 4, name: 'Python', level: 'Средний' }
  ],
  languages: [
    { id: 1, name: 'Русский', level: 'Родной' },
    { id: 2, name: 'Английский', level: 'B2' },
    { id: 3, name: 'Казахский', level: 'C1' }
  ]
};

export function Resume() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="space-y-8">
      {/* Образование */}
      <section>
        <h3 className={`text-lg font-semibold mb-4 ${getColorClass('text.primary')}`}>
          Образование
        </h3>
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          {resumeData.education.map((edu) => (
            <div key={edu.id} className="flex justify-between items-start">
              <div>
                <h4 className={`font-medium ${getColorClass('text.primary')}`}>
                  {edu.institution}
                </h4>
                <p className={`text-sm ${getColorClass('text.secondary')}`}>
                  {edu.degree}
                </p>
              </div>
              <div className="text-right">
                <p className={`text-sm ${getColorClass('text.secondary')}`}>
                  {edu.period}
                </p>
                <p className={`text-sm font-medium ${getColorClass('text.primary')}`}>
                  GPA: {edu.gpa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Опыт работы */}
      <section>
        <h3 className={`text-lg font-semibold mb-4 ${getColorClass('text.primary')}`}>
          Опыт работы
        </h3>
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg space-y-6`}>
          {resumeData.experience.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className={`font-medium ${getColorClass('text.primary')}`}>
                    {exp.position}
                  </h4>
                  <p className={`text-sm ${getColorClass('text.secondary')}`}>
                    {exp.company}
                  </p>
                </div>
                <p className={`text-sm ${getColorClass('text.secondary')}`}>
                  {exp.period}
                </p>
              </div>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Навыки и языки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h3 className={`text-lg font-semibold mb-4 ${getColorClass('text.primary')}`}>
            Технические навыки
          </h3>
          <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
            <div className="space-y-4">
              {resumeData.skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1">
                    <span className={`text-sm ${getColorClass('text.primary')}`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${getColorClass('text.secondary')}`}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: skill.level === 'Продвинутый' ? '90%' : 
                               skill.level === 'Средний' ? '60%' : '30%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h3 className={`text-lg font-semibold mb-4 ${getColorClass('text.primary')}`}>
            Языки
          </h3>
          <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
            <div className="space-y-4">
              {resumeData.languages.map((lang) => (
                <div key={lang.id} className="flex justify-between items-center">
                  <span className={`${getColorClass('text.primary')}`}>
                    {lang.name}
                  </span>
                  <span className={`px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 