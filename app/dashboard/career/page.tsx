import CareerProgress from "@/app/components/dashboard/career/CareerProgress";
import TaskList from "@/app/components/dashboard/career/TaskList";
import Achievements from "@/app/components/dashboard/career/Achievements";
import NextSteps from "@/app/components/dashboard/career/NextSteps";

export default function CareerPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Карьерный трекер</h1>
      <CareerProgress />
      <div className="grid lg:grid-cols-2 gap-8">
        <TaskList />
        <NextSteps />
      </div>
      <Achievements />
    </div>
  );
} 