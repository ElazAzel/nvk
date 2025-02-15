"use client";
import { useState } from 'react';
import EditProfileModal from './EditProfileModal';

interface ProfileData {
  name: string;
  title: string;
  avatar: string;
  location: string;
  about: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export default function ProfileHeader() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const profile: ProfileData = {
    name: "Иван Иванов",
    title: "Студент | Frontend Developer",
    avatar: "/avatars/default.jpg",
    location: "Алматы, Казахстан",
    about: "Студент факультета информационных технологий. Интересуюсь веб-разработкой и искусственным интеллектом. Активно изучаю React и TypeScript.",
    email: "ivan@example.com",
    phone: "+7 (777) 777-77-77",
    linkedin: "linkedin.com/in/ivan",
    github: "github.com/ivan"
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        {/* Cover */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl" />

        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Avatar */}
            <div className="relative -mt-20 w-32 h-32">
              <div className="absolute inset-0 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                <div className="w-full h-full rounded-xl bg-gray-100" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <p className="text-gray-600 dark:text-gray-300">{profile.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{profile.location}</p>
                </div>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Редактировать профиль
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-300">{profile.about}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <span>📧</span>
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <span>📱</span>
                  {profile.phone}
                </a>
                <a href={`https://${profile.linkedin}`} target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <span>💼</span>
                  LinkedIn
                </a>
                <a href={`https://${profile.github}`} target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                  <span>💻</span>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
      />
    </>
  );
} 