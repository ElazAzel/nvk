"use client";
import { useState } from 'react';

interface ProfileData {
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
  faculty: string;
  course: string;
  about: string;
  skills: string[];
  languages: string[];
}

export default function ProfileSettings() {
  const [profile, setProfile] = useState<ProfileData>({
    avatar: "/avatars/default.jpg",
    firstName: "Иван",
    lastName: "Иванов",
    email: "ivan@example.com",
    phone: "+7 (777) 777-77-77",
    university: "Алматы Университет",
    faculty: "Информационные технологии",
    course: "3",
    about: "Студент факультета информационных технологий. Интересуюсь веб-разработкой и искусственным интеллектом.",
    skills: ["JavaScript", "React", "Node.js"],
    languages: ["Русский", "Английский", "Казахский"]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика сохранения
    console.log('Сохранено:', profile);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Основная информация</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar section */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0" />
          <div>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Загрузить фото
            </button>
            <p className="text-sm text-gray-500 mt-1">
              JPG, GIF или PNG. Максимальный размер 1MB
            </p>
          </div>
        </div>

        {/* Personal info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Имя
            </label>
            <input
              type="text"
              value={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Фамилия
            </label>
            <input
              type="text"
              value={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Education info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Университет
            </label>
            <input
              type="text"
              value={profile.university}
              onChange={(e) => setProfile({ ...profile, university: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Факультет
            </label>
            <input
              type="text"
              value={profile.faculty}
              onChange={(e) => setProfile({ ...profile, faculty: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Курс
            </label>
            <select
              value={profile.course}
              onChange={(e) => setProfile({ ...profile, course: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4].map((year) => (
                <option key={year} value={year}>
                  {year} курс
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* About */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            О себе
          </label>
          <textarea
            value={profile.about}
            onChange={(e) => setProfile({ ...profile, about: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Навыки
          </label>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm flex items-center gap-2"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => {
                    setProfile({
                      ...profile,
                      skills: profile.skills.filter((_, i) => i !== index)
                    });
                  }}
                  className="hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              type="button"
              className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:border-blue-500 hover:text-blue-500"
              onClick={() => {
                const skill = prompt('Введите навык');
                if (skill) {
                  setProfile({
                    ...profile,
                    skills: [...profile.skills, skill]
                  });
                }
              }}
            >
              + Добавить навык
            </button>
          </div>
        </div>

        {/* Languages */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Языки
          </label>
          <div className="flex flex-wrap gap-2">
            {profile.languages.map((language, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm flex items-center gap-2"
              >
                {language}
                <button
                  type="button"
                  onClick={() => {
                    setProfile({
                      ...profile,
                      languages: profile.languages.filter((_, i) => i !== index)
                    });
                  }}
                  className="hover:text-green-800"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              type="button"
              className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:border-green-500 hover:text-green-500"
              onClick={() => {
                const language = prompt('Введите язык');
                if (language) {
                  setProfile({
                    ...profile,
                    languages: [...profile.languages, language]
                  });
                }
              }}
            >
              + Добавить язык
            </button>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Сохранить изменения
          </button>
        </div>
      </form>
    </div>
  );
} 