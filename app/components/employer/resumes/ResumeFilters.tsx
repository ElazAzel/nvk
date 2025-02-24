"use client";
import { useState } from "react";

export default function ResumeFilters() {
  const [filters, setFilters] = useState({
    skills: "",
    specialization: "",
    experience: "",
    education: ""
  });

  const specializations = [
    "Все специализации",
    "Разработка",
    "Дизайн",
    "Маркетинг",
    "Менеджмент",
    "Аналитика"
  ];

  const experiences = [
    "Любой опыт",
    "Без опыта",
    "От 1 года",
    "От 2 лет",
    "От 3 лет"
  ];

  const educationLevels = [
    "Любое образование",
    "Бакалавриат",
    "Магистратура",
    "PhD"
  ];

  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Навыки */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Навыки
          </label>
          <input
            type="text"
            placeholder="Например: React, Python"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.skills}
            onChange={(e) => handleFilterChange("skills", e.target.value)}
          />
        </div>

        {/* Специализация */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Специализация
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.specialization}
            onChange={(e) => handleFilterChange("specialization", e.target.value)}
          >
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* Опыт работы */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Опыт работы
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.experience}
            onChange={(e) => handleFilterChange("experience", e.target.value)}
          >
            {experiences.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>

        {/* Образование */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Образование
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filters.education}
            onChange={(e) => handleFilterChange("education", e.target.value)}
          >
            {educationLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 