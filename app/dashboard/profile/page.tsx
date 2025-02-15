import ProfileHeader from "@/app/components/dashboard/profile/ProfileHeader";
import ProfileStats from "@/app/components/dashboard/profile/ProfileStats";
import ProfileSkills from "@/app/components/dashboard/profile/ProfileSkills";
import ProfileEducation from "@/app/components/dashboard/profile/ProfileEducation";
import ProfileActivity from "@/app/components/dashboard/profile/ProfileActivity";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <ProfileHeader />
      <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
        <div className="space-y-8">
          <ProfileEducation />
          <ProfileSkills />
          <ProfileActivity />
        </div>
        <div>
          <ProfileStats />
        </div>
      </div>
    </div>
  );
} 