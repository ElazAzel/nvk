export default function Features() {
  const features = [
    {
      title: "Для студентов",
      items: [
        "AI-подбор вакансий и курсов",
        "Карьерный трекер с наградами",
        "Анализ резюме и менторство"
      ],
      color: "blue"
    },
    {
      title: "Для университетов",
      items: [
        "Аналитика успехов выпускников",
        "Сравнение с другими вузами",
        "Статистика трудоустройства"
      ],
      color: "purple"
    },
    {
      title: "Для работодателей",
      items: [
        "База верифицированных талантов",
        "Рейтинги и статистика",
        "Прямой доступ к студентам"
      ],
      color: "green"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className={`text-xl font-bold mb-4 text-${feature.color}-600`}>
              {feature.title}
            </h3>
            <ul className="space-y-3">
              {feature.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 