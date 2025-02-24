"use client";

import { StatCard } from "@/app/components/common/StatCard";
import { LoadingSpinner } from "@/app/components/common/LoadingSpinner";
import { ErrorMessage } from "@/app/components/common/ErrorMessage";
import { useAnalytics } from "@/app/hooks/useAnalytics";
import { ANALYTICS_PERIODS } from "@/app/config/constants";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function AnalyticsOverview() {
  const { t } = useTranslation();
  const { data, isLoading, error } = useAnalytics(ANALYTICS_PERIODS.YEAR);

  if (isLoading) return <LoadingSpinner text={t('common.loading')} />;
  if (error) return <ErrorMessage message={t('common.error')} />;
  if (!data?.overview) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.overview.map((stat, index) => (
        <StatCard 
          key={index} 
          {...stat}
          title={t(`analytics.${stat.title.toLowerCase()}`)}
        />
      ))}
    </div>
  );
} 