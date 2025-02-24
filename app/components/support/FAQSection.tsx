"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      category: "Регистрация и профиль",
      question: "Как создать профиль на платформе?",
      answer: "Для создания профиля нажмите кнопку 'Регистрация' в верхнем правом углу. Заполните необходимые поля и подтвердите свой email. После этого вы сможете заполнить свой профиль дополнительной информацией."
    },
    {
      category: "Регистрация и профиль",
      question: "Как добавить или изменить навыки в профиле?",
      answer: "В разделе 'Мой профиль' найдите секцию 'Навыки'. Нажмите 'Редактировать' и выберите навыки из списка или добавьте свои. Не забудьте указать уровень владения каждым навыком."
    },
    {
      category: "Поиск работы",
      question: "Как откликнуться на вакансию?",
      answer: "Найдите интересующую вас вакансию, откройте её описание и нажмите кнопку 'Откликнуться'. Работодатель получит уведомление и сможет просмотреть ваше резюме."
    },
    {
      category: "Поиск работы",
      question: "Как отслеживать статус отклика?",
      answer: "В разделе 'Мои отклики' вы можете видеть статус каждого отправленного отклика: 'На рассмотрении', 'Просмотрено', 'Приглашение на собеседование' или 'Отказ'."
    }
  ];

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            {category}
          </h3>
          
          <div className="space-y-2">
            {faqItems
              .filter(item => item.category === category)
              .map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setOpenItem(openItem === index ? null : index)}
                  >
                    <span className="font-medium">{item.question}</span>
                    <span className="transform transition-transform duration-200 text-xl">
                      {openItem === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div
                    className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                      openItem === index ? 'max-h-96 py-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
} 