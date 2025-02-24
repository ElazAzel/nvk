"use client";

import { StatCard } from './StatCard';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface StatItem {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

interface StatsGridProps {
  items: StatItem[];
}

export const StatsGrid = ({ items }: StatsGridProps) => {
  const { getVariantClass } = useThemeStyles();

  return (
    <div className={getVariantClass('grid', 'primary')}>
      {items.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          trend={stat.trend}
        />
      ))}
    </div>
  );
}; 