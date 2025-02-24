"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { Modal } from '@/app/components/common/Modal';

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateEventModal({ isOpen, onClose }: CreateEventModalProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    type: 'offline',
    maxParticipants: '',
    registrationDeadline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика создания мероприятия
    console.log('Создание мероприятия:', eventData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Создание мероприятия">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block mb-1 ${getColorClass('text.primary')}`}>
            Название мероприятия
          </label>
          <input
            type="text"
            value={eventData.title}
            onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
            className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
            required
          />
        </div>

        <div>
          <label className={`block mb-1 ${getColorClass('text.primary')}`}>
            Описание
          </label>
          <textarea
            value={eventData.description}
            onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
            className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block mb-1 ${getColorClass('text.primary')}`}>
              Дата
            </label>
            <input
              type="date"
              value={eventData.date}
              onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
              required
            />
          </div>
          <div>
            <label className={`block mb-1 ${getColorClass('text.primary')}`}>
              Время
            </label>
            <input
              type="time"
              value={eventData.time}
              onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
              required
            />
          </div>
        </div>

        <div>
          <label className={`block mb-1 ${getColorClass('text.primary')}`}>
            Тип мероприятия
          </label>
          <select
            value={eventData.type}
            onChange={(e) => setEventData({ ...eventData, type: e.target.value })}
            className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
            required
          >
            <option value="offline">Офлайн</option>
            <option value="online">Онлайн</option>
            <option value="hybrid">Гибридный</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block mb-1 ${getColorClass('text.primary')}`}>
              Максимальное количество участников
            </label>
            <input
              type="number"
              value={eventData.maxParticipants}
              onChange={(e) => setEventData({ ...eventData, maxParticipants: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
              required
            />
          </div>
          <div>
            <label className={`block mb-1 ${getColorClass('text.primary')}`}>
              Дедлайн регистрации
            </label>
            <input
              type="date"
              value={eventData.registrationDeadline}
              onChange={(e) => setEventData({ ...eventData, registrationDeadline: e.target.value })}
              className={`w-full px-4 py-2 rounded-lg ${getVariantClass('input', 'primary')}`}
              required
            />
          </div>
        </div>

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
            Создать мероприятие
          </button>
        </div>
      </form>
    </Modal>
  );
} 