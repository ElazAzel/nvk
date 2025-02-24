"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

type Course = {
  id: number;
  title: string;
  type: 'free' | 'premium' | 'partner';
  provider: string;
  progress: number;
  nextLesson: string;
  instructor: string;
  studentsCount: number;
  rating: number;
  description: string;
  duration: string;
  lessons: number;
  image: string;
  price?: number;
  referralBonus?: number;
};

interface CoursesTabProps {
  courses: Course[];
}

export function CoursesTab({ courses }: CoursesTabProps) {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-6">
      {/* Фильтры */}
      <div className="flex space-x-4">
        {['all', 'free', 'premium', 'partner'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === type 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {type === 'all' ? 'Все курсы' :
             type === 'free' ? 'Бесплатные' :
             type === 'premium' ? 'Премиум' : 'Партнерские'}
          </button>
        ))}
      </div>

      {/* Список курсов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses
          .filter(course => filter === 'all' || course.type === filter)
          .map(course => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.type === 'free' 
                      ? 'bg-green-500 text-white' 
                      : course.type === 'premium'
                      ? 'bg-purple-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {course.type === 'free' ? 'Бесплатно' :
                     `${course.price?.toLocaleString()} ₸`}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {course.provider}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm font-medium">
                      {course.rating}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{course.duration}</span>
                  <span>{course.lessons} уроков</span>
                </div>
                
                {course.progress > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">
                        Прогресс
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}
                
                <button
                  className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {course.progress > 0 ? 'Продолжить' : 'Начать обучение'}
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
} 