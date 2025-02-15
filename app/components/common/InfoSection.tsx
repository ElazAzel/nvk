"use client";

import { ReactNode } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface InfoSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const InfoSection = ({ title, children, className = '' }: InfoSectionProps) => {
  const { getColorClass } = useThemeStyles();

  return (
    <div className={`mt-8 ${className}`}>
      <h2 className={`text-xl font-semibold mb-4 ${getColorClass('text.primary')}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}; 