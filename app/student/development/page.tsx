"use client";

import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

export default function DevelopmentPage() {
  const { getColorClass } = useThemeStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Развитие</h1>
      </div>

      <Tab.Group onChange={setSelectedTab}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {['Курсы', 'Мероприятия', 'Менторство'].map((category) => (
            <Tab
              key={category}
              className={({ selected }) => `
                w-full rounded-lg py-2.5 text-sm font-medium leading-5
                ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400
                focus:outline-none focus:ring-2
                ${selected 
                  ? 'bg-white shadow text-blue-700'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                }
              `}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-6">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="space-y-4">
              {events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <MentorCard key={mentor.id} {...mentor} />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

// Компонент карточки курса
function CourseCard({ title, description, duration, price, level, rating }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
    >
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <span>Длительность:</span>
          <span>{duration}</span>
        </div>
        <div className="flex justify-between">
          <span>Уровень:</span>
          <span>{level}</span>
        </div>
        <div className="flex justify-between">
          <span>Рейтинг:</span>
          <span>{rating}/5</span>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-lg font-bold">{price}</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Записаться
        </button>
      </div>
    </motion.div>
  );
}

// Компонент карточки мероприятия
function EventCard({ title, date, time, location, type, participants }: any) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {new Date(date).toLocaleDateString()} в {time}
          </p>
          <p className="text-gray-600 dark:text-gray-300">{location}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {type}
          </span>
          <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {participants} участников
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Зарегистрироваться
        </button>
      </div>
    </motion.div>
  );
}

// Компонент карточки ментора
function MentorCard({ name, position, company, experience, specialization, price, rating, available }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700" />
        <div className="flex-1">
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{position} at {company}</p>
          <div className="mt-2 space-y-1">
            <p>Опыт: {experience}</p>
            <p>Специализация: {specialization}</p>
            <p>Рейтинг: {rating}/5</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold">{price}</span>
        <button 
          className={`px-4 py-2 rounded-lg ${
            available
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700'
          }`}
          disabled={!available}
        >
          {available ? 'Забронировать' : 'Нет свободных слотов'}
        </button>
      </div>
    </motion.div>
  );
}

// Моковые данные
const courses = [
  {
    id: 1,
    title: 'Основы Python',
    description: 'Базовый курс программирования на Python',
    duration: '8 недель',
    price: '15000 ₸',
    level: 'Начинающий',
    rating: 4.8,
  },
  // ... другие курсы
];

const events = [
  {
    id: 1,
    title: 'Карьерный форум IT',
    date: '2024-04-15',
    time: '10:00',
    location: 'Главный кампус',
    type: 'Офлайн',
    participants: 120,
  },
  // ... другие мероприятия
];

const mentors = [
  {
    id: 1,
    name: 'Александр Петров',
    position: 'Senior Software Engineer',
    company: 'Google',
    experience: '8 лет',
    specialization: 'Backend Development',
    price: '25000 ₸/час',
    rating: 4.9,
    available: true,
  },
  // ... другие менторы
]; 