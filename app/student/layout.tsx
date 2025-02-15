import { MobileSidebar } from "@/app/components/common/MobileSidebar";
import { StudentControlPanel } from "@/app/components/common/StudentControlPanel";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <StudentControlPanel />
      <MobileSidebar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 