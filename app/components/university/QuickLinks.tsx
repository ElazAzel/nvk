export default function QuickLinks() {
  const links = [
    {
      title: "Аналитика выпускников",
      description: "Подробная статистика трудоустройства и карьерного роста",
      icon: "📊",
      href: "/university/analytics"
    },
    {
      title: "Управление партнерствами",
      description: "Работа с компаниями-партнерами и работодателями",
      icon: "🤝",
      href: "/university/partnerships"
    },
    {
      title: "Отчеты и статистика",
      description: "Формирование отчетов по различным показателям",
      icon: "📈",
      href: "/university/reports"
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