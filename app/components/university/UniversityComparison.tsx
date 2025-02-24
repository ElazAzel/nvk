"use client";

import { motion } from 'framer-motion';
import { LineChart } from '../charts/LineChart';

export function UniversityComparison() {
  const comparisonData = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Ваш университет',
        data: [75, 78, 82, 85, 88, 90],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4
      },
      {
        label: 'Средний показатель',
        data: [70, 72, 75, 76, 78, 80],
        borderColor: 'rgb(156, 163, 175)',
        tension: 0.4
      }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Сравнение с другими университетами
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <LineChart data={comparisonData} />
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Ваши преимущества
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span>✓</span>
                <span>На 15% выше средней активности студентов</span>
              </li>
              <li className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span>✓</span>
                <span>На 20% больше трудоустроенных выпускников</span>
              </li>
              <li className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span>✓</span>
                <span>Топ-3 по количеству успешных стажировок</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              Рекомендации по улучшению
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Увеличить количество практических занятий</li>
              <li>• Расширить программу менторства</li>
              <li>• Добавить больше курсов по soft skills</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 