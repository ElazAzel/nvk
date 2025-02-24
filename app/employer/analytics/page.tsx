import AnalyticsOverview from "@/app/components/dashboard/employer/analytics/AnalyticsOverview";
import CandidatesFlow from "@/app/components/dashboard/employer/analytics/CandidatesFlow";
import HiringEfficiency from "@/app/components/dashboard/employer/analytics/HiringEfficiency";
import SkillsDistribution from "@/app/components/dashboard/employer/analytics/SkillsDistribution";
import TopUniversities from "@/app/components/dashboard/employer/analytics/TopUniversities";

export default function EmployerAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Аналитика найма</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Скачать отчет
        </button>
      </div>

      <AnalyticsOverview />

      <div className="grid lg:grid-cols-2 gap-8">
        <CandidatesFlow />
        <HiringEfficiency />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <SkillsDistribution />
        <TopUniversities />
      </div>
    </div>
  );
} 