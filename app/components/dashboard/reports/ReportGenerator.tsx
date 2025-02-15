"use client";
import { useState } from 'react';

interface ReportTemplate {
  id: string;
  name: string;
  description: string;
  type: string;
}

export default function ReportGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  const templates: ReportTemplate[] = [
    {
      id: "employment",
      name: "Отчет по трудоустройству",
      description: "Подробная статистика трудоустройства выпускников",
      type: "Analytics"
    },
    {
      id: "skills",
      name: "Анализ навыков",
      description: "Анализ востребованных навыков и компетенций",
      type: "Analytics"
    },
    {
      id: "partnerships",
      name: "Партнерские программы",
      description: "Статистика по партнерским программам и стажировкам",
      type: "Partnerships"
    },
    {
      id: "performance",
      name: "Успеваемость студентов",
      description: "Анализ успеваемости и прогресса студентов",
      type: "Academic"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Генератор отчетов</h2>

      <div className="space-y-6">
        {/* Template Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Шаблон отчета</label>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="">Выберите шаблон</option>
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Дата начала</label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Дата окончания</label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Additional Options */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeCharts"
              className="rounded border-gray-300"
            />
            <label htmlFor="includeCharts" className="ml-2 text-sm">
              Включить графики и диаграммы
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="includeRawData"
              className="rounded border-gray-300"
            />
            <label htmlFor="includeRawData" className="ml-2 text-sm">
              Включить исходные данные
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Сгенерировать отчет
          </button>
        </div>
      </div>
    </div>
  );
} 