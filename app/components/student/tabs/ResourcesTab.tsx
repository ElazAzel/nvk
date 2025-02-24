"use client";

import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  BookOpenIcon,
  VideoCameraIcon,
  CodeBracketIcon 
} from '@heroicons/react/24/outline';

const resources = [
  {
    title: 'Документация',
    icon: DocumentTextIcon,
    items: [
      { name: 'Python Documentation', link: '#' },
      { name: 'JavaScript MDN', link: '#' },
      { name: 'React Docs', link: '#' }
    ]
  },
  {
    title: 'Учебные материалы',
    icon: BookOpenIcon,
    items: [
      { name: 'Алгоритмы и структуры данных', link: '#' },
      { name: 'Паттерны проектирования', link: '#' },
      { name: 'Clean Code', link: '#' }
    ]
  },
  {
    title: 'Видеоуроки',
    icon: VideoCameraIcon,
    items: [
      { name: 'Git для начинающих', link: '#' },
      { name: 'Docker Basics', link: '#' },
      { name: 'SQL Fundamentals', link: '#' }
    ]
  },
  {
    title: 'Практика',
    icon: CodeBracketIcon,
    items: [
      { name: 'LeetCode Problems', link: '#' },
      { name: 'Codewars Katas', link: '#' },
      { name: 'HackerRank Challenges', link: '#' }
    ]
  }
];

export function ResourcesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
        >
          <div className="flex items-center mb-4">
            <section.icon className="w-5 h-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {section.title}
            </h3>
          </div>
          <ul className="space-y-3">
            {section.items.map(item => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <span className="text-sm">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
} 