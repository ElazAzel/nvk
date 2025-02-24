"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

const faqItems = [
  {
    id: 1,
    question: 'Как записаться на курс?',
    answer: 'Выберите интересующий вас курс из каталога и нажмите кнопку "Записаться". После этого вы получите подтверждение на email.'
  },
  {
    id: 2,
    question: 'Как связаться с ментором?',
    answer: 'В профиле ментора нажмите кнопку "Записаться на консультацию" и выберите удобное время. Ментор получит уведомление и подтвердит встречу.'
  },
  {
    id: 3,
    question: 'Как получить сертификат?',
    answer: 'После успешного завершения курса (выполнение всех заданий и итогового проекта) сертификат будет автоматически доступен в вашем профиле.'
  },
  {
    id: 4,
    question: 'Как отменить регистрацию на мероприятие?',
    answer: 'В разделе "Мероприятия" найдите нужное мероприятие и нажмите "Отменить регистрацию". Отмена доступна не позднее чем за 24 часа до начала.'
  }
];

export function FAQ() {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqItems.map((item) => (
        <div
          key={item.id}
          className={`${getVariantClass('card', 'primary')} rounded-lg overflow-hidden`}
        >
          <button
            className="w-full px-6 py-4 flex items-center justify-between"
            onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
          >
            <span className={`font-medium ${getColorClass('text.primary')}`}>
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openItem === item.id ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${
              openItem === item.id ? 'max-h-40 pb-4' : 'max-h-0'
            }`}
          >
            <p className={getColorClass('text.secondary')}>
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
} 