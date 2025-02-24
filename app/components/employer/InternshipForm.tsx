"use client";

import { useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface InternshipFormProps {
  onSubmit: (data: InternshipFormData) => void;
  onCancel: () => void;
}

export interface InternshipFormData {
  title: string;
  description: string;
  duration: string;
  startDate: string;
  spots: number;
  requirements: string[];
  mentors: string[];
  skills: string[];
  location: 'remote' | 'office' | 'hybrid';
  salary: {
    amount: number;
    currency: string;
  };
}

export function InternshipForm({ onSubmit, onCancel }: InternshipFormProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [formData, setFormData] = useState<InternshipFormData>({
    title: '',
    description: '',
    duration: '3',
    startDate: '',
    spots: 1,
    requirements: [''],
    mentors: [''],
    skills: [''],
    location: 'office',
    salary: {
      amount: 0,
      currency: 'KZT'
    }
  });

  const handleArrayFieldChange = (
    field: 'requirements' | 'mentors' | 'skills',
    index: number,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item))
    }));
  };

  const addArrayField = (field: 'requirements' | 'mentors' | 'skills') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayField = (field: 'requirements' | 'mentors' | 'skills', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Основная информация */}
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
              Название программы
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
              Описание
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg min-h-[120px]`}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                Длительность (месяцев)
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
              >
                <option value="3">3 месяца</option>
                <option value="6">6 месяцев</option>
                <option value="12">12 месяцев</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                Количество мест
              </label>
              <input
                type="number"
                min="1"
                value={formData.spots}
                onChange={(e) => setFormData(prev => ({ ...prev, spots: parseInt(e.target.value) }))}
                className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                required
              />
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
              Дата начала
            </label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
              Формат работы
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value as 'remote' | 'office' | 'hybrid' }))}
              className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
            >
              <option value="office">Офис</option>
              <option value="remote">Удаленно</option>
              <option value="hybrid">Гибрид</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                Стипендия
              </label>
              <input
                type="number"
                min="0"
                value={formData.salary.amount}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  salary: { ...prev.salary, amount: parseInt(e.target.value) }
                }))}
                className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${getColorClass('text.secondary')} mb-1`}>
                Валюта
              </label>
              <select
                value={formData.salary.currency}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  salary: { ...prev.salary, currency: e.target.value }
                }))}
                className={`w-full px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
              >
                <option value="KZT">KZT</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Динамические поля */}
      <div className="space-y-6">
        {/* Требования */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className={`block text-sm font-medium ${getColorClass('text.secondary')}`}>
              Требования
            </label>
            <button
              type="button"
              onClick={() => addArrayField('requirements')}
              className={`text-sm ${getColorClass('text.accent')} hover:underline`}
            >
              + Добавить требование
            </button>
          </div>
          {formData.requirements.map((req, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={req}
                onChange={(e) => handleArrayFieldChange('requirements', index, e.target.value)}
                className={`flex-1 px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                placeholder="Введите требование"
              />
              {formData.requirements.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('requirements', index)}
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

        {/* Менторы */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className={`block text-sm font-medium ${getColorClass('text.secondary')}`}>
              Менторы
            </label>
            <button
              type="button"
              onClick={() => addArrayField('mentors')}
              className={`text-sm ${getColorClass('text.accent')} hover:underline`}
            >
              + Добавить ментора
            </button>
          </div>
          {formData.mentors.map((mentor, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={mentor}
                onChange={(e) => handleArrayFieldChange('mentors', index, e.target.value)}
                className={`flex-1 px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                placeholder="Введите имя ментора"
              />
              {formData.mentors.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('mentors', index)}
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

        {/* Навыки */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className={`block text-sm font-medium ${getColorClass('text.secondary')}`}>
              Навыки
            </label>
            <button
              type="button"
              onClick={() => addArrayField('skills')}
              className={`text-sm ${getColorClass('text.accent')} hover:underline`}
            >
              + Добавить навык
            </button>
          </div>
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleArrayFieldChange('skills', index, e.target.value)}
                className={`flex-1 px-3 py-2 ${getVariantClass('input', 'primary')} rounded-lg`}
                placeholder="Введите требуемый навык"
              />
              {formData.skills.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayField('skills', index)}
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
      </div>

      {/* Кнопки действий */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className={`px-6 py-2 ${getVariantClass('button', 'outline')} rounded-lg`}
        >
          Отмена
        </button>
        <button
          type="submit"
          className={`px-6 py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
        >
          Создать программу
        </button>
      </div>
    </form>
  );
} 