import MentorFilters from "@/app/components/dashboard/mentors/MentorFilters";
import MentorList from "@/app/components/dashboard/mentors/MentorList";
import TopMentors from "@/app/components/dashboard/mentors/TopMentors";

export default function MentorsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Менторы</h1>
      <TopMentors />
      <div className="grid lg:grid-cols-[300px,1fr] gap-8">
        <MentorFilters />
        <MentorList />
      </div>
    </div>
  );
} 