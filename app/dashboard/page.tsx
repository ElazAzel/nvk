import AnalyticsPreview from "@/app/components/dashboard/university/AnalyticsPreview";
import RecentGraduates from "@/app/components/dashboard/university/RecentGraduates";
import JobMarketOverview from "@/app/components/dashboard/university/JobMarketOverview";
import PartnershipPrograms from "@/app/components/dashboard/university/PartnershipPrograms";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Панель управления</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <AnalyticsPreview />
        <RecentGraduates />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <JobMarketOverview />
        <PartnershipPrograms />
      </div>
    </div>
  );
} 