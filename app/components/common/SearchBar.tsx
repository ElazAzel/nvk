"use client";

import { useState } from 'react';
import { useDebounce } from '@/app/hooks/useDebounce';
import { SearchResults } from './SearchResults';
import { motion, AnimatePresence } from 'framer-motion';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Поиск..."
          className="w-64 px-4 py-2 pl-10 rounded-lg bg-gray-50 dark:bg-gray-800 
            border border-gray-200 dark:border-gray-700 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && debouncedQuery && (
          <SearchResults
            query={debouncedQuery}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 