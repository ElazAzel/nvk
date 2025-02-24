"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { Assignment } from '@/app/types/assignments';
import { formatDate } from '@/app/utils/date';

interface AssignmentListProps {
  assignments: Assignment[];
  filter: 'all' | 'active' | 'completed' | 'overdue';
  search: string;
}

export function AssignmentList({ assignments, filter, search }: AssignmentListProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  const filteredAssignments = assignments
    .filter((assignment) => {
      if (filter === 'all') return true;
      return assignment.status === filter;
    })
    .filter((assignment) => {
      if (!search) return true;
      return (
        assignment.title.toLowerCase().includes(search.toLowerCase()) ||
        assignment.subject.toLowerCase().includes(search.toLowerCase())
      );
    });

  return (
    <div className="space-y-4">
      {filteredAssignments.map((assignment) => (
        <div
          key={assignment.id}
          className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-lg font-medium mb-2 ${getColorClass('text.primary')}`}>
                {assignment.title}
              </h3>
              <p className={`text-sm mb-4 ${getColorClass('text.secondary')}`}>
                {assignment.subject}
              </p>
              <p className={`text-sm mb-4 ${getColorClass('text.secondary')}`}>
                {assignment.description}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  assignment.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : assignment.status === 'overdue'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {assignment.status === 'completed'
                  ? 'Выполнено'
                  : assignment.status === 'overdue'
                  ? 'Просрочено'
                  : 'В процессе'}
              </span>
              <span
                className={`text-sm ${getColorClass('text.secondary')}`}
              >
                Дедлайн: {formatDate(assignment.deadline)}
              </span>
            </div>
          </div>
          {assignment.progress < 100 && (
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Прогресс</span>
                <span>{assignment.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${assignment.progress}%` }}
                />
              </div>
            </div>
          )}
          {assignment.attachments && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className={`text-sm font-medium mb-2 ${getColorClass('text.primary')}`}>
                Вложения
              </h4>
              <div className="flex gap-2">
                {assignment.attachments.map((attachment) => (
                  <a
                    key={attachment.id}
                    href={attachment.url}
                    className={`text-sm ${getColorClass('text.accent')} hover:underline`}
                  >
                    {attachment.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 