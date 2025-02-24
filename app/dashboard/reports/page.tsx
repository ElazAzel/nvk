import ReportsOverview from "@/app/components/dashboard/reports/ReportsOverview";
import RecentReports from "@/app/components/dashboard/reports/RecentReports";
import ReportGenerator from "@/app/components/dashboard/reports/ReportGenerator";
import ScheduledReports from "@/app/components/dashboard/reports/ScheduledReports";

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Отчеты</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Создать отчет
        </button>
      </div>

      <ReportsOverview />
      
      <div className="grid lg:grid-cols-2 gap-8">
        <RecentReports />
        <ScheduledReports />
      </div>

      <ReportGenerator />
    </div>
  );
} 