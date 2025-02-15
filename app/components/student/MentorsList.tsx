"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

const mentors = [
  {
    id: 1,
    name: 'Александр Иванов',
    position: 'Senior Frontend Developer',
    company: 'Kaspi Bank',
    expertise: ['React', 'TypeScript', 'Node.js'],
    available: true,
    image: '/mentors/mentor1.jpg'
  },
  {
    id: 2,
    name: 'Мария Петрова',
    position: 'ML Engineer',
    company: 'Kolesa Group',
    expertise: ['Python', 'TensorFlow', 'Computer Vision'],
    available: false,
    image: '/mentors/mentor2.jpg'
  },
  {
    id: 3,
    name: 'Дмитрий Сидоров',
    position: 'Solution Architect',
    company: 'Jusan',
    expertise: ['Cloud', 'DevOps', 'System Design'],
    available: true,
    image: '/mentors/mentor3.jpg'
  }
];

export function MentorsList() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mentors.map((mentor) => (
        <div
          key={mentor.id}
          className={`${getVariantClass('card', 'primary')} p-4 rounded-lg hover:shadow-lg transition-shadow`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className={`font-medium ${getColorClass('text.primary')}`}>
                {mentor.name}
              </h3>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                {mentor.position}
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                {mentor.company}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <button
            className={`w-full py-2 ${
              mentor.available
                ? getVariantClass('button', 'primary')
                : getVariantClass('button', 'outline')
            } rounded-lg text-sm`}
            disabled={!mentor.available}
          >
            {mentor.available ? 'Записаться на консультацию' : 'Нет свободных слотов'}
          </button>
        </div>
      ))}
    </div>
  );
} 