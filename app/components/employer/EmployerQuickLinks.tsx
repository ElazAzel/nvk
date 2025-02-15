export default function EmployerQuickLinks() {
  const links = [
    {
      title: "Добавить вакансию",
      description: "Создайте новую вакансию и найдите подходящих кандидатов",
      icon: "➕",
      href: "/employer/vacancies/new"
    },
    {
      title: "Поиск талантов",
      description: "Просмотр профилей студентов и выпускников",
      icon: "🔍",
      href: "/employer/talents"
    },
    {
      title: "Аналитика",
      description: "Статистика по вакансиям и откликам",
      icon: "📊",
      href: "/employer/analytics"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="text-3xl mb-4 block">{link.icon}</span>
          <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {link.description}
          </p>
        </a>
      ))}
    </div>
  );
} 