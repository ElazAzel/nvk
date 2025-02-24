"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { ScheduleDay } from '@/app/types/schedule';
import { formatDate } from '@/app/utils/date';

interface WeekScheduleProps {
  schedule: ScheduleDay[];
  view: 'week' | 'list';
}

export function WeekSchedule({ schedule, view }: WeekScheduleProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const getClassTypeColor = (type: string) => {
    switch (type) {
      case 'lecture':
        return 'bg-blue-100 text-blue-800';
      case 'practice':
        return 'bg-green-100 text-green-800';
      case 'laboratory':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (view === 'list') {
    return (
      <div className="space-y-6">
        {schedule.map((day) => (
          <div key={day.date}>
            <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
              {day.day} ({formatDate(day.date)})
            </h3>
            <div className="space-y-4">
              {day.classes.map((class_) => (
                <div
                  key={class_.id}
                  className={`${getVariantClass('card', 'primary')} p-4 rounded-lg`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className={`font-medium mb-1 ${getColorClass('text.primary')}`}>
                        {class_.subject}
                      </h4>
                      <p className={`text-sm ${getColorClass('text.secondary')}`}>
                        {class_.time.start} - {class_.time.end}
                      </p>
                      <p className={`text-sm ${getColorClass('text.secondary')}`}>
                        {class_.location}
                      </p>
                      <p className={`text-sm ${getColorClass('text.secondary')}`}>
                        Преподаватель: {class_.teacher}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded text-sm ${getClassTypeColor(class_.type)}`}>
                      {class_.type === 'lecture' ? 'Лекция' : 
                       class_.type === 'practice' ? 'Практика' : 'Лабораторная'}
                    </span>
                  </div>
                  {(class_.materials || class_.assignment) && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      {class_.materials && (
                        <div className="flex gap-2">
                          {class_.materials.map((material) => (
                            <a
                              key={material.id}
                              href={material.url}
                              className={`text-sm ${getColorClass('text.accent')} hover:underline`}
                            >
                              {material.name}
                            </a>
                          ))}
                        </div>
                      )}
                      {class_.assignment && (
                        <div className="mt-2">
                          <span className="text-sm font-medium">Задание: </span>
                          <span className={`text-sm ${getColorClass('text.secondary')}`}>
                            {class_.assignment.title}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {schedule.map((day) => (
        <div
          key={day.date}
          className={`${getVariantClass('card', 'primary')} p-4 rounded-lg`}
        >
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            {day.day}
            <span className={`block text-sm ${getColorClass('text.secondary')}`}>
              {formatDate(day.date)}
            </span>
          </h3>
          <div className="space-y-3">
            {day.classes.map((class_) => (
              <div
                key={class_.id}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-sm font-medium ${getColorClass('text.primary')}`}>
                    {class_.time.start} - {class_.time.end}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${getClassTypeColor(class_.type)}`}>
                    {class_.type === 'lecture' ? 'Лекция' : 
                     class_.type === 'practice' ? 'Практика' : 'Лабораторная'}
                  </span>
                </div>
                <h4 className={`font-medium mb-1 ${getColorClass('text.primary')}`}>
                  {class_.subject}
                </h4>
                <p className={`text-sm ${getColorClass('text.secondary')}`}>
                  {class_.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 