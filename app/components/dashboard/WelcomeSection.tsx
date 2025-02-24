"use client";
import { useState } from "react";

export default function WelcomeSection() {
  const [progress, setProgress] = useState(50); // В реальном приложении будет получаться с бэкенда

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Привет, Иван! 👋</h1>
        <button className="text-blue-600 hover:text-blue-700">
          Посмотреть все задачи
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-300">
            Прогресс выполнения задач
          </span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-sm text-gray-500">
          Выполнено 5 из 10 задач
        </div>
      </div>
    </div>
  );
} 