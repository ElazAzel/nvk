"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  icon: string;
  label: string;
  href: string;
}

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      icon: "📊",
      label: "Дашборд",
      href: "/dashboard"
    },
    {
      icon: "👤",
      label: "Профиль",
      href: "/dashboard/profile"
    },
    {
      icon: "💼",
      label: "Вакансии",
      href: "/dashboard/jobs"
    },
    {
      icon: "📚",
      label: "Курсы",
      href: "/dashboard/courses"
    },
    {
      icon: "🎯",
      label: "Карьерный трекер",
      href: "/dashboard/career"
    },
    {
      icon: "👥",
      label: "Менторы",
      href: "/dashboard/mentors"
    }
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Support section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/support"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="text-xl">❓</span>
            <span className="font-medium">Поддержка</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
} 