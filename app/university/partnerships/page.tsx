import PartnershipsOverview from "@/app/components/dashboard/university/partnerships/PartnershipsOverview";
import ActivePartnerships from "@/app/components/dashboard/university/partnerships/ActivePartnerships";
import PartnershipRequests from "@/app/components/dashboard/university/partnerships/PartnershipRequests";
import UpcomingPrograms from "@/app/components/dashboard/university/partnerships/UpcomingPrograms";

export default function UniversityPartnershipsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Партнерские программы</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
            Отправить заявку
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Добавить партнера
          </button>
        </div>
      </div>

      <PartnershipsOverview />

      <div className="grid lg:grid-cols-2 gap-8">
        <ActivePartnerships />
        <PartnershipRequests />
      </div>

      <UpcomingPrograms />
    </div>
  );
} 