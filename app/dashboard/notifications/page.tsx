import NotificationsList from "@/app/components/dashboard/notifications/NotificationsList";
import NotificationsFilter from "@/app/components/dashboard/notifications/NotificationsFilter";

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Уведомления</h1>
      </div>
      <div className="grid lg:grid-cols-[250px,1fr] gap-8">
        <NotificationsFilter />
        <NotificationsList />
      </div>
    </div>
  );
} 