import AnalyticsOverview from "@/app/components/dashboard/university/analytics/AnalyticsOverview";
import EnrollmentTrends from "@/app/components/dashboard/university/analytics/EnrollmentTrends";
import AcademicPerformance from "@/app/components/dashboard/university/analytics/AcademicPerformance";
import CareerOutcomes from "@/app/components/dashboard/university/analytics/CareerOutcomes";
import FacultyAnalytics from "@/app/components/dashboard/university/analytics/FacultyAnalytics";
import { type NextPage } from 'next';

const UniversityAnalyticsPage: NextPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Аналитика</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
            Сохраненные отчеты
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Экспорт данных
          </button>
        </div>
      </div>

      <AnalyticsOverview />

      <div className="grid lg:grid-cols-2 gap-8">
        <EnrollmentTrends />
        <AcademicPerformance />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <CareerOutcomes />
        <FacultyAnalytics />
      </div>
    </div>
  );
};

export default UniversityAnalyticsPage; 