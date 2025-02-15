"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { RoadmapStage } from '@/app/types/roadmap';

export function StudentRoadmap() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const roadmapStages: RoadmapStage[] = [
    {
      id: 1,
      title: 'Начало пути',
      description: 'Заполните профиль и определите карьерные цели',
      tasks: [
        { id: 1, title: 'Заполнить профиль', completed: true },
        { id: 2, title: 'Пройти карьерное тестирование', completed: true },
        { id: 3, title: 'Выбрать направление развития', completed: false }
      ],
      isCompleted: false,
      icon: '🎯'
    },
    {
      id: 2,
      title: 'Развитие навыков',
      description: 'Пройдите необходимые курсы и получите базовые навыки',
      tasks: [
        { id: 4, title: 'Пройти курс по основам профессии', completed: false },
        { id: 5, title: 'Выполнить практические задания', completed: false },
        { id: 6, title: 'Получить сертификат', completed: false }
      ],
      isCompleted: false,
      icon: '📚'
    },
    // Добавьте другие этапы
  ];

  return (
    <div className="space-y-8">
      {/* Прогресс */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h2 className={`text-xl font-semibold mb-4 ${getColorClass('text.primary')}`}>
          Ваш прогресс
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: '45%' }}
          />
        </div>
        <p className={`mt-2 text-sm ${getColorClass('text.secondary')}`}>
          45% пути пройдено
        </p>
      </div>

      {/* Этапы развития */}
      <div className="relative">
        {roadmapStages.map((stage, index) => (
          <div key={stage.id} className="mb-8 relative">
            {/* Линия соединения */}
            {index < roadmapStages.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
            )}
            
            <div className="flex gap-6">
              {/* Иконка этапа */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl
                  ${stage.isCompleted ? 'bg-green-100' : 'bg-blue-100'}`}
              >
                {stage.icon}
              </div>

              {/* Контент этапа */}
              <div className={`flex-1 ${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
                <h3 className={`text-lg font-medium mb-2 ${getColorClass('text.primary')}`}>
                  {stage.title}
                </h3>
                <p className={`text-sm mb-4 ${getColorClass('text.secondary')}`}>
                  {stage.description}
                </p>

                {/* Задачи этапа */}
                <div className="space-y-2">
                  {stage.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        readOnly
                        className="rounded text-blue-600"
                      />
                      <span className={task.completed ? 'line-through' : ''}>
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 