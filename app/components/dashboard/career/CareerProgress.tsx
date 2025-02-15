"use client";
import { useState } from 'react';

interface Level {
  name: string;
  requiredPoints: number;
  color: string;
}

export default function CareerProgress() {
  const [currentPoints] = useState(350);
  const [currentLevel] = useState(2);

  const levels: Level[] = [
    { name: "Новичок", requiredPoints: 0, color: "bg-gray-500" },
    { name: "Стажер", requiredPoints: 100, color: "bg-blue-500" },
    { name: "Джуниор", requiredPoints: 300, color: "bg-green-500" },
    { name: "Мидл", requiredPoints: 600, color: "bg-yellow-500" },
    { name: "Сеньор", requiredPoints: 1000, color: "bg-purple-500" }
  ];

  const currentLevelData = levels[currentLevel];
  const nextLevelData = levels[currentLevel + 1];
  const progressToNext = ((currentPoints - currentLevelData.requiredPoints) / 
    (nextLevelData.requiredPoints - currentLevelData.requiredPoints)) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Ваш прогресс</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Текущий уровень: {currentLevelData.name}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{currentPoints} XP</div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            До следующего уровня: {nextLevelData.requiredPoints - currentPoints} XP
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${currentLevelData.color} transition-all duration-500`}
          style={{ width: `${progressToNext}%` }}
        />
      </div>

      {/* Level indicators */}
      <div className="mt-8 grid grid-cols-5 gap-4">
        {levels.map((level, index) => (
          <div
            key={index}
            className={`text-center ${
              index === currentLevel
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500'
            }`}
          >
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2
                ${
                  index <= currentLevel
                    ? level.color + ' text-white'
                    : 'bg-gray-200 dark:bg-gray-700'
                }
              `}
            >
              {index + 1}
            </div>
            <div className="text-sm font-medium">{level.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 