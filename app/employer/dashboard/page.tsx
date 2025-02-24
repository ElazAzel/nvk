import EmployerAnalytics from "@/app/components/employer/EmployerAnalytics";
import EmployerNotifications from "@/app/components/employer/EmployerNotifications";
import EmployerQuickLinks from "@/app/components/employer/EmployerQuickLinks";
import ActiveVacancies from "@/app/components/employer/ActiveVacancies";

export default function EmployerDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Панель управления работодателя</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <EmployerAnalytics />
        <EmployerNotifications />
      </div>
      <ActiveVacancies />
      <EmployerQuickLinks />
    </div>
  );
} 