"use client";

import { ReactNode } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface ProfileLayoutProps {
  children: ReactNode;
  header: {
    title: string;
    subtitle?: string;
  };
}

export const ProfileLayout = ({ children, header }: ProfileLayoutProps) => {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className={getVariantClass('container', 'primary')}>
      <div className="mb-8">
        <h1 className={`text-2xl sm:text-3xl font-bold ${getColorClass('text.primary')}`}>
          {header.title}
        </h1>
        {header.subtitle && (
          <p className={`mt-2 ${getColorClass('text.secondary')}`}>
            {header.subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}; 