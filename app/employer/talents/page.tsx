import TalentsOverview from "@/app/components/dashboard/employer/talents/TalentsOverview";
import TalentsFilter from "@/app/components/dashboard/employer/talents/TalentsFilter";
import TalentsList from "@/app/components/dashboard/employer/talents/TalentsList";
import SavedSearches from "@/app/components/dashboard/employer/talents/SavedSearches";

export default function TalentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Таланты</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
            Сохраненные поиски
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Добавить кандидата
          </button>
        </div>
      </div>

      <TalentsOverview />
      <TalentsFilter />
      <TalentsList />
      <SavedSearches />
    </div>
  );
} 