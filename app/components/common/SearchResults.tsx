"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export function SearchResults({ query, onClose }: SearchResultsProps) {
  // Здесь будет логика поиска
  const results = [
    {
      id: 1,
      title: 'Аналитика успеваемости',
      category: 'Отчеты',
      href: '/university/reports/academic',
    },
    {
      id: 2,
      title: 'Статистика трудоустройства',
      category: 'Аналитика',
      href: '/university/analytics/employment',
    },
  ].filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2"
    >
      {results.length > 0 ? (
        <div>
          {results.map((result) => (
            <Link
              key={result.id}
              href={result.href}
              onClick={onClose}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{result.title}</span>
                <span className="text-xs text-gray-500">{result.category}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-4 py-2 text-sm text-gray-500">
          Ничего не найдено
        </div>
      )}
    </motion.div>
  );
} 