"use client";

import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  VideoCameraIcon,
  UserIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

type ScheduleEvent = {
  time: string;
  type: 'lesson' | 'mentoring' | 'event';
  title: string;
  course?: string;
  instructor?: string;
  mentor?: string;
  location: string;
  link: string;
};

type ScheduleDay = {
  date: string;
  weekday: string;
  events: ScheduleEvent[];
};

export function ScheduleTab({ schedule }: { schedule: ScheduleDay[] }) {
  return (
    <div className="space-y-6">
      {/* Календарь на неделю */}
      <div className="grid grid-cols-5 gap-4">
        {schedule.map((day, index) => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              p-4 rounded-xl text-center
              ${new Date(day.date).toDateString() === new Date().toDateString()
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-800'
              }
            `}
          >
            <p className="text-sm font-medium">{day.weekday}</p>
            <p className="text-2xl font-bold mt-1">
              {new Date(day.date).getDate()}
            </p>
          </motion.div>
        ))}
      </div>

      {/* События дня */}
      <div className="space-y-4">
        {schedule.map(day => (
          <motion.div
            key={day.date}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {day.weekday}, {new Date(day.date).toLocaleDateString()}
            </h3>

            <div className="space-y-4">
              {day.events.map((event, index) => (
                <motion.div
                  key={`${day.date}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    p-4 rounded-lg border
                    ${event.type === 'lesson'
                      ? 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20'
                      : event.type === 'mentoring'
                      ? 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
                    }
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                      
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {event.title}
                      </h4>

                      {(event.course || event.instructor || event.mentor) && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <UserIcon className="w-4 h-4" />
                          <span>
                            {event.course 
                              ? `${event.course} · ${event.instructor}`
                              : event.mentor
                            }
                          </span>
                        </div>
                      )}

                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        {event.location === 'Онлайн' ? (
                          <VideoCameraIcon className="w-4 h-4" />
                        ) : (
                          <MapPinIcon className="w-4 h-4" />
                        )}
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <button
                      className={`
                        px-4 py-2 rounded-lg text-sm font-medium
                        ${event.type === 'lesson'
                          ? 'bg-blue-500 hover:bg-blue-600'
                          : event.type === 'mentoring'
                          ? 'bg-purple-500 hover:bg-purple-600'
                          : 'bg-green-500 hover:bg-green-600'
                        }
                        text-white transition-colors
                      `}
                    >
                      {event.location === 'Онлайн' ? 'Присоединиться' : 'Подробнее'}
                    </button>
                  </div>
                </motion.div>
              ))}

              {day.events.length === 0 && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  Нет запланированных событий
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 