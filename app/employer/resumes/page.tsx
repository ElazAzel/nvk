import ResumeFilters from "@/app/components/employer/resumes/ResumeFilters";
import ResumeList from "@/app/components/employer/resumes/ResumeList";

export default function ResumesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">База резюме</h1>
        <div className="text-sm text-gray-600">
          Найдено: <span className="font-medium">256</span> резюме
        </div>
      </div>
      <ResumeFilters />
      <ResumeList />
    </div>
  );
} 