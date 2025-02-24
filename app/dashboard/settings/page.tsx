import ProfileSettings from "@/app/components/dashboard/settings/ProfileSettings";
import SecuritySettings from "@/app/components/dashboard/settings/SecuritySettings";
import NotificationSettings from "@/app/components/dashboard/settings/NotificationSettings";
import PrivacySettings from "@/app/components/dashboard/settings/PrivacySettings";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Настройки профиля</h1>
      <div className="space-y-6">
        <ProfileSettings />
        <SecuritySettings />
        <NotificationSettings />
        <PrivacySettings />
      </div>
    </div>
  );
} 