"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { StarIcon, ClockIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

type Mentor = {
  id: number;
  name: string;
  position: string;
  company: string;
  available: boolean;
  rating: number;
  reviews: number;
  expertise: string[];
  price: string;
  experience: string;
  languages: string[];
  education: string;
  bio: string;
  achievements: string[];
  schedule: Record<string, string[]>;
  avatar: string;
};

interface MentorsTabProps {
  mentors: Mentor[];
}

export function MentorsTab({ mentors }: MentorsTabProps) {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredMentors = mentors.filter(mentor => {
    if (filter === 'available') return mentor.available;
    if (filter === 'top_rated') return mentor.rating >= 4.8;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        {['all', 'available', 'top_rated'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === type 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {type === 'all' ? 'Все менторы' :
             type === 'available' ? 'Доступные сейчас' : 'Топ рейтинга'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map(mentor => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setSelectedMentor(mentor)}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img 
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {mentor.available && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {mentor.position} · {mentor.company}
                  </p>
                  <div className="mt-2 flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <span className="ml-1 text-sm font-medium">
                      {mentor.rating} ({mentor.reviews} отзывов)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.slice(0, 3).map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium rounded-full
                        bg-blue-100 dark:bg-blue-900/30 
                        text-blue-600 dark:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {mentor.price}
                </span>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 
                    rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Здесь логика записи к ментору
                  }}
                >
                  Записаться
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={selectedMentor !== null}
        onClose={() => setSelectedMentor(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-3xl w-full bg-white dark:bg-gray-800 
            rounded-xl shadow-xl p-6 overflow-y-auto max-h-[90vh]">
            {selectedMentor && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={selectedMentor.avatar}
                    alt={selectedMentor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedMentor.name}
                    </Dialog.Title>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      {selectedMentor.position} · {selectedMentor.company}
                    </p>
                    <div className="mt-2 flex items-center">
                      <StarIcon className="w-5 h-5 text-yellow-500" />
                      <span className="ml-1 font-medium">
                        {selectedMentor.rating} ({selectedMentor.reviews} отзывов)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-5 h-5 text-gray-400" />
                      <span>{selectedMentor.experience} опыта</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GlobeAltIcon className="w-5 h-5 text-gray-400" />
                      <span>{selectedMentor.languages.join(', ')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AcademicCapIcon className="w-5 h-5 text-gray-400" />
                      <span>{selectedMentor.education}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Достижения</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {selectedMentor.achievements.map(achievement => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">О менторе</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedMentor.bio}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Расписание</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedMentor.schedule).map(([day, times]) => (
                      <div key={day} className="space-y-2">
                        <h5 className="font-medium capitalize">{day}</h5>
                        <div className="space-y-1">
                          {times.map(time => (
                            <button
                              key={time}
                              className="w-full px-3 py-1 text-sm rounded-lg
                                bg-blue-100 dark:bg-blue-900/30 
                                text-blue-600 dark:text-blue-400
                                hover:bg-blue-200 dark:hover:bg-blue-900/50
                                transition-colors"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400
                      hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    Закрыть
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg
                      hover:bg-blue-600 transition-colors"
                  >
                    Записаться на консультацию
                  </button>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
} 