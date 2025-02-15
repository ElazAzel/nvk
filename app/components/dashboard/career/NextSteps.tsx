export default function NextSteps() {
  const steps = [
    {
      title: "Улучшите свое резюме",
      description: "Добавьте информацию о последних проектах и достижениях",
      icon: "📝",
      link: "/dashboard/profile"
    },
    {
      title: "Пройдите тест на навыки",
      description: "Оцените свой текущий уровень знаний",
      icon: "✍️",
      link: "/dashboard/tests"
    },
    {
      title: "Найдите ментора",
      description: "Получите поддержку от опытного специалиста",
      icon: "👥",
      link: "/dashboard/mentors"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Следующие шаги</h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <a
            key={index}
            href={step.link}
            className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{step.icon}</span>
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 