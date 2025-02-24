"use client";
import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  points: number;
  category: string;
  completed: boolean;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Создать профессиональное резюме",
      description: "Составить резюме с описанием навыков и опыта",
      points: 50,
      category: "Документы",
      completed: true
    },
    {
      id: 2,
      title: "Пройти курс по JavaScript",
      description: "Завершить базовый курс на платформе",
      points: 100,
      category: "Обучение",
      completed: false
    },
    {
      id: 3,
      title: "Создать пробный проект",
      description: "Разработать pet-project для портфолио",
      points: 150,
      category: "Практика",
      completed: false
    }
  ]);

  const handleTaskToggle = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Текущие задачи</h2>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {tasks.filter(t => t.completed).length} из {tasks.length} выполнено
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded-lg border transition-colors ${
              task.completed
                ? 'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskToggle(task.id)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <h3 className="font-medium">{task.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {task.description}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    +{task.points} XP
                  </span>
                  <span className="text-sm text-gray-500">
                    {task.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 