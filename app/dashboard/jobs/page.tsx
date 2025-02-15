import JobFilters from "@/app/components/dashboard/jobs/JobFilters";
import JobList from "@/app/components/dashboard/jobs/JobList";

export default function JobsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Вакансии</h1>
        <div className="text-sm text-gray-600">
          Найдено: <span className="font-medium">42</span> вакансии
        </div>
      </div>
      <JobFilters />
      <JobList />
    </div>
  );
} 