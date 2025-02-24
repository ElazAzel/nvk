"use client";

import { motion } from 'framer-motion';
import { Tooltip } from './Tooltip';
import { InfoButton } from './InfoButton';

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  trend: 'up' | 'down' | 'neutral';
};

export function StatCard({ title, value, change, icon: Icon, trend }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm
        hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`
            p-3 rounded-lg
            ${trend === 'up' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
              trend === 'down' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
              'bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400'}
          `}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
          </div>
        </div>
        <div className={`
          text-sm font-medium
          ${trend === 'up' ? 'text-green-600 dark:text-green-400' :
            trend === 'down' ? 'text-red-600 dark:text-red-400' :
            'text-gray-600 dark:text-gray-400'}
        `}>
          {change}
        </div>
      </div>
    </motion.div>
  );
} 