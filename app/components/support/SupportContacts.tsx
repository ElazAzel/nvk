export default function SupportContacts() {
  const contacts = [
    {
      icon: "📧",
      title: "Email",
      value: "support@navyk.kz",
      description: "Ответ в течение 24 часов"
    },
    {
      icon: "📞",
      title: "Телефон",
      value: "+7 (777) 777-77-77",
      description: "Пн-Пт, 9:00-18:00"
    },
    {
      icon: "💬",
      title: "Чат",
      value: "Онлайн чат",
      description: "Среднее время ответа 5 минут"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Контактная информация</h2>
      
      <div className="space-y-6">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="text-2xl">{contact.icon}</span>
            <div>
              <h3 className="font-medium">{contact.title}</h3>
              <p className="text-blue-600 dark:text-blue-400">{contact.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {contact.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="font-medium mb-2">Полезные ресурсы</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/docs" className="text-blue-600 hover:underline">
              Документация
            </a>
          </li>
          <li>
            <a href="/tutorials" className="text-blue-600 hover:underline">
              Видеоуроки
            </a>
          </li>
          <li>
            <a href="/blog" className="text-blue-600 hover:underline">
              Блог
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 