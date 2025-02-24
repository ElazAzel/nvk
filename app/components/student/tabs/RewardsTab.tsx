"use client";

import { motion } from 'framer-motion';
import { 
  GiftIcon,
  UserPlusIcon,
  TrophyIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const rewards = {
  balance: 15000,
  referrals: 3,
  achievements: [
    {
      id: 1,
      title: 'Быстрый старт',
      description: 'Завершите первый курс за 30 дней',
      progress: 100,
      reward: 5000,
      icon: TrophyIcon,
      completed: true
    },
    {
      id: 2,
      title: 'Активный студент',
      description: 'Поддерживайте серию из 7 дней',
      progress: 70,
      reward: 3000,
      icon: TrophyIcon,
      completed: false
    }
  ],
  referralProgram: {
    code: 'STUDENT123',
    bonus: 10000,
    description: 'Получайте бонус за каждого приглашенного друга'
  }
};

export function RewardsTab() {
  return (
    <div className="space-y-8">
      {/* Баланс и статистика */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Баланс</h3>
            <CurrencyDollarIcon className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-2">
            {rewards.balance.toLocaleString()} ₸
          </div>
          <p className="text-blue-100">Доступно для вывода</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Реферальная программа
            </h3>
            <UserPlusIcon className="w-6 h-6 text-blue-500" />
          </div>
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Ваш код:
              </p>
              <div className="flex items-center justify-between">
                <code className="text-lg font-mono font-semibold text-blue-500">
                  {rewards.referralProgram.code}
                </code>
                <button className="text-blue-500 hover:text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {rewards.referralProgram.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Приглашенные друзья
            </h3>
            <div className="bg-blue-100 dark:bg-blue-900 text-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
              {rewards.referrals}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Вы пригласили {rewards.referrals} {rewards.referrals === 1 ? 'друга' : 'друзей'}
          </p>
        </motion.div>
      </div>

      {/* Достижения */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Достижения
        </h3>
        <div className="space-y-4">
          {rewards.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <achievement.icon 
                className={`w-8 h-8 ${
                  achievement.completed ? 'text-green-500' : 'text-gray-400'
                }`}
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {achievement.title}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.reward.toLocaleString()} ₸
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
                {!achievement.completed && (
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 