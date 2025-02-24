import CourseFilters from "@/app/components/dashboard/courses/CourseFilters";
import CourseList from "@/app/components/dashboard/courses/CourseList";
import RecommendedCourses from "@/app/components/dashboard/courses/RecommendedCourses";

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Курсы</h1>
      <RecommendedCourses />
      <div className="grid lg:grid-cols-[300px,1fr] gap-8">
        <CourseFilters />
        <CourseList />
      </div>
    </div>
  );
} 