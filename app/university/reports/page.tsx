import ReportsOverview from "@/app/components/dashboard/university/reports/ReportsOverview";
import StudentPerformance from "@/app/components/dashboard/university/reports/StudentPerformance";
import ProgramEffectiveness from "@/app/components/dashboard/university/reports/ProgramEffectiveness";
import EmploymentStats from "@/app/components/dashboard/university/reports/EmploymentStats";

const reportTypes = {
  employment: ['Трудоустройство', 'Стажировки', 'Карьерный рост'],
  academic: ['Успеваемость', 'Посещаемость', 'Активность'],
  engagement: ['Мероприятия', 'Проекты', 'Менторство'],
};

export default function UniversityReportsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Отчеты</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
            Сохраненные отчеты
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Создать отчет
          </button>
        </div>
      </div>

      <ReportsOverview />
      
      <div className="grid lg:grid-cols-2 gap-8">
        <StudentPerformance />
        <ProgramEffectiveness />
      </div>

      <EmploymentStats />
    </div>
  );
} 