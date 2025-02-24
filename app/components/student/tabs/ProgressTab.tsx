"use client";

import { motion } from 'framer-motion';
import { 
  AcademicCapIcon,
  ClockIcon,
  FireIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import { ProgressData } from '../types';

interface ProgressTabProps {
  progress: ProgressData;
}

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export function ProgressTab({ progress }: ProgressTabProps) {
  return (
    <div className="space-y-8">
      {/* Общий прогресс */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Общий прогресс
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <BookOpenIcon className="w-5 h-5 text-blue-500" />
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Завершено курсов</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                {progress.courses.completed}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <ClockIcon className="w-5 h-5 text-purple-500" />
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">В процессе</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                {progress.courses.inProgress}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <AcademicCapIcon className="w-5 h-5 text-green-500" />
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Запланировано</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                {progress.courses.planned}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <FireIcon className="w-5 h-5 text-orange-500" />
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Серия активности</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                {progress.activity.streak} дней
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Активность за неделю */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Активность за неделю
        </h3>
        <div className="grid grid-cols-7 gap-2 h-32">
          {progress.activity.lastWeek.map((hours, index) => {
            const maxHours = Math.max(...progress.activity.lastWeek);
            const height = maxHours > 0 ? (hours / maxHours) * 100 : 0;
            
            return (
              <div key={`day-${index}`} className="flex flex-col items-center">
                <motion.div 
                  className="w-full bg-blue-500 rounded-t-lg"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: index * 0.1 }}
                />
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  {weekDays[index]}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {hours}ч
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Навыки */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Развитие навыков
        </h3>
        <div className="space-y-6">
          {progress.skills.map(skill => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 