import GraduatesOverview from "@/app/components/dashboard/analytics/GraduatesOverview";
import EmploymentStats from "@/app/components/dashboard/analytics/EmploymentStats";
import SalaryAnalytics from "@/app/components/dashboard/analytics/SalaryAnalytics";
import IndustryDistribution from "@/app/components/dashboard/analytics/IndustryDistribution";
import TopEmployers from "@/app/components/dashboard/analytics/TopEmployers";
import SkillsGap from "@/app/components/dashboard/analytics/SkillsGap";
import AnalyticsFilter from "@/app/components/dashboard/analytics/AnalyticsFilter";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Аналитика выпускников</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Скачать отчет
          </button>
        </div>
      </div>

      <AnalyticsFilter />
      
      <GraduatesOverview />
      
      <div className="grid lg:grid-cols-2 gap-8">
        <EmploymentStats />
        <SalaryAnalytics />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <IndustryDistribution />
        <TopEmployers />
      </div>

      <SkillsGap />
    </div>
  );
} 