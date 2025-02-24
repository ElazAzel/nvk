"use client";

import { motion } from 'framer-motion';
import { 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const communityFeatures = [
  {
    title: 'Учебные группы',
    icon: UserGroupIcon,
    description: 'Присоединяйтесь к группам по интересам и обсуждайте учебные материалы',
    action: 'Найти группу',
    link: '#'
  },
  {
    title: 'Форум',
    icon: ChatBubbleLeftRightIcon,
    description: 'Задавайте вопросы и делитесь опытом с сообществом',
    action: 'Перейти на форум',
    link: '#'
  },
  {
    title: 'Вебинары',
    icon: VideoCameraIcon,
    description: 'Участвуйте в онлайн-встречах с экспертами и другими студентами',
    action: 'Расписание вебинаров',
    link: '#'
  },
  {
    title: 'Мероприятия',
    icon: CalendarIcon,
    description: 'Хакатоны, воркшопы и другие офлайн-события',
    action: 'Календарь событий',
    link: '#'
  }
];

export function CommunityTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {communityFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <feature.icon className="w-6 h-6 text-blue-500" />
              <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {feature.description}
            </p>
            <a
              href={feature.link}
              className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {feature.action}
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 