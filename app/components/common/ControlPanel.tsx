"use client";

import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";

export const ControlPanel = () => {
  return (
    <div className="fixed top-4 right-4 flex items-center gap-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <ThemeToggle />
      <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
      <LanguageSelector />
    </div>
  );
}; 