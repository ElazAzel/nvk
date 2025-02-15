"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { Modal } from '@/app/components/common/Modal';

interface CreateMailingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateMailingModal({ isOpen, onClose }: CreateMailingModalProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [mailingData, setMailingData] = useState({
    subject: '',
    content: '',
    recipients: 'all', // all, faculty, course
    faculty: '',
    course: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика создания рассылки
    console.log('Создание рассылки:', mailingData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Создание рассылки">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block mb-1 ${getColorClass('text.primary')}`}>
            Тема письма
          </label>
          <input
            type="text"
            value={mailingData.subject}
            onChange={(e) => setMailingData({ ...mailingData, subject: e.target.value })}
            className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
            required
          />
        </div>

        <div>
          <label className={`block mb-1 ${getColorClass('text.primary')}`}>
            Текст сообщения
          </label>
          <textarea
            value={mailingData.content}
            onChange={(e) => setMailingData({ ...mailingData, content: e.target.value })}
            className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
            rows={6}
            required
          />
        </div>

        <div>
          <label className={`block mb-1 ${getColorClass('text.primary')}`}>
            Получатели
          </label>
          <select
            value={mailingData.recipients}
            onChange={(e) => setMailingData({ ...mailingData, recipients: e.target.value })}
            className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
            required
          >
            <option value="all">Все студенты</option>
            <option value="faculty">Выбранный факультет</option>
            <option value="course">Выбранный курс</option>
          </select>
        </div>

        {mailingData.recipients === 'faculty' && (
          <div>
            <label className={`block mb-1 ${getColorClass('text.primary')}`}>
              Факультет
            </label>
            <select
              value={mailingData.faculty}
              onChange={(e) => setMailingData({ ...mailingData, faculty: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
              required
            >
              <option value="">Выберите факультет</option>
              <option value="1">Факультет 1</option>
              <option value="2">Факультет 2</option>
              {/* Добавьте другие факультеты */}
            </select>
          </div>
        )}

        {mailingData.recipients === 'course' && (
          <div>
            <label className={`block mb-1 ${getColorClass('text.primary')}`}>
              Курс
            </label>
            <select
              value={mailingData.course}
              onChange={(e) => setMailingData({ ...mailingData, course: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
              required
            >
              <option value="">Выберите курс</option>
              <option value="1">1 курс</option>
              <option value="2">2 курс</option>
              <option value="3">3 курс</option>
              <option value="4">4 курс</option>
            </select>
          </div>
        )}

        <div className="flex justify-end gap-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-lg ${getVariantClass('button', 'outline')}`}
          >
            Отмена
          </button>
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg ${getVariantClass('button', 'primary')}`}
          >
            Отправить
          </button>
        </div>
      </form>
    </Modal>
  );
} 