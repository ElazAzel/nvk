"use client";

import { UniversityAnalytics } from '@/app/components/university/UniversityAnalytics';
import { UniversityHeader } from '@/app/components/university/UniversityHeader';
import { UniversityComparison } from '@/app/components/university/UniversityComparison';

export default function UniversityPage() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <UniversityHeader />
      <UniversityAnalytics />
      <UniversityComparison />
    </div>
  );
} 