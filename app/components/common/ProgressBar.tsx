"use client";

interface ProgressBarProps {
  value: number;
  max: number;
  color?: 'blue' | 'green' | 'yellow' | 'red';
  height?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colorClasses = {
  blue: 'bg-blue-600 dark:bg-blue-500',
  green: 'bg-green-500 dark:bg-green-400',
  yellow: 'bg-yellow-500 dark:bg-yellow-400',
  red: 'bg-red-500 dark:bg-red-400'
};

const heightClasses = {
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-6'
};

export const ProgressBar = ({ 
  value, 
  max, 
  color = 'blue',
  height = 'sm',
  className = "" 
}: ProgressBarProps) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className={`${heightClasses[height]} bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden ${className}`}>
      <div
        className={`h-full rounded-full ${colorClasses[color]}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}; 