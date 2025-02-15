"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface InterviewScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: InterviewFormData) => void;
  candidates: {
    id: number;
    name: string;
    position: string;
  }[];
}

interface InterviewFormData {
  candidateId: number;
  date: string;
  time: string;
  duration: number;
  type: 'technical' | 'hr' | 'final';
  interviewers: string[];
  notes: string;
}

export function InterviewScheduleModal({ 
  isOpen, 
  onClose, 
  onSubmit,
  candidates 
}: InterviewScheduleModalProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [formData, setFormData] = useState<InterviewFormData>({
    candidateId: 0,
    date: '',
    time: '',
    duration: 60,
    type: 'technical',
    interviewers: [''],
    notes: ''
  });

  const handleInterviewerChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      interviewers: prev.interviewers.map((interviewer, i) => 
        i === index ? value : interviewer
      )
    }));
  };

  const addInterviewer = () => {
    setFormData(prev => ({
      ...prev,
      interviewers: [...prev.interviewers, '']
    }));
  };

  const removeInterviewer = (index: number) => {
    setFormData(prev => ({
      ...prev,
      interviewers: prev.interviewers.filter((_, i) => i !== index)
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${getColorClass('text.primary')}`}>
            Запланировать собеседование
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
          onClose();
        }}>
          <div className="space-y-6">
            {/* Выбор кандидата */}
            <div>
              <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                Кандидат
              </label>
              <select
                value={formData.candidateId}
                onChange={(e) => setFormData(prev => ({ ...prev, candidateId: Number(e.target.value) }))}
                className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                required
              >
                <option value="">Выберите кандидата</option>
                {candidates.map(candidate => (
                  <option key={candidate.id} value={candidate.id}>
                    {candidate.name} - {candidate.position}
                  </option>
                ))}
              </select>
            </div>

            {/* Дата и время */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                  Дата
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                  Время
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                  className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                  required
                />
              </div>
            </div>

            {/* Тип и длительность */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                  Тип собеседования
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    type: e.target.value as 'technical' | 'hr' | 'final' 
                  }))}
                  className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                >
                  <option value="technical">Техническое</option>
                  <option value="hr">HR</option>
                  <option value="final">Финальное</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                  Длительность (минут)
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: Number(e.target.value) }))}
                  className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                >
                  <option value="30">30 минут</option>
                  <option value="45">45 минут</option>
                  <option value="60">1 час</option>
                  <option value="90">1.5 часа</option>
                </select>
              </div>
            </div>

            {/* Интервьюеры */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className={`block text-sm font-medium ${getColorClass('text.secondary')}`}>
                  Интервьюеры
                </label>
                <button
                  type="button"
                  onClick={addInterviewer}
                  className={`text-sm ${getColorClass('text.accent')} hover:underline`}
                >
                  + Добавить интервьюера
                </button>
              </div>
              {formData.interviewers.map((interviewer, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={interviewer}
                    onChange={(e) => handleInterviewerChange(index, e.target.value)}
                    className={`flex-1 px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                    placeholder="Имя интервьюера"
                    required
                  />
                  {formData.interviewers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeInterviewer(index)}
                      className="p-2 text-red-500 hover:text-red-600"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Заметки */}
            <div>
              <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                Заметки
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg min-h-[100px]`}
                placeholder="Дополнительные заметки или вопросы..."
              />
            </div>

            {/* Кнопки действий */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 ${getVariantClass('button', 'outline')} rounded-lg`}
              >
                Отмена
              </button>
              <button
                type="submit"
                className={`px-4 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
              >
                Запланировать
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 