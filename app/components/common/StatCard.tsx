"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface StatCardProps {
  icon?: React.ReactNode;
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    type: 'increase' | 'decrease';
  };
}

export function StatCard({ icon, title, value, change }: StatCardProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className={`${getVariantClass('card', 'primary')} p-4 rounded-lg`}>
      <div className="flex items-center gap-3 mb-2">
        {icon && (
          <div className={`${getColorClass('text.primary')}`}>
            {icon}
          </div>
        )}
        <h3 className={`text-sm font-medium ${getColorClass('text.secondary')}`}>
          {title}
        </h3>
      </div>
      <div className="flex items-end justify-between">
        <p className={`text-2xl font-semibold ${getColorClass('text.primary')}`}>
          {value}
        </p>
        {change && (
          <span
            className={`text-sm ${
              change.type === 'increase' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {change.type === 'increase' ? '+' : '-'}{change.value}
          </span>
        )}
      </div>
    </div>
  );
} 