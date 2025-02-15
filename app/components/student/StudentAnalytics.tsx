"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { LineChart } from '@/app/components/charts/LineChart';
import { DoughnutChart } from '@/app/components/charts/DoughnutChart';
import { BarChart } from '@/app/components/charts/BarChart';

export function StudentAnalytics() {
  const { getColorClass, getVariantClass } = useThemeStyles();

  // Моковые данные для аналитики
  const learningProgress = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Средний балл',
        data: [3.8, 4.0, 4.2, 4.1, 4.3, 4.5],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)'
      }
    ]
  };

  const activityData = {
    labels: ['Лекции', 'Практика', 'Тесты', 'Проекты', 'Доп. материалы'],
    datasets: [{
      data: [85, 92, 78, 95, 70],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(107, 114, 128, 0.8)'
      ]
    }]
  };

  const skillsProgress = {
    labels: ['Технические', 'Soft skills', 'Языки', 'Лидерство', 'Креативность'],
    datasets: [{
      label: 'Текущий уровень',
      data: [80, 75, 60, 70, 85],
      backgroundColor: 'rgba(59, 130, 246, 0.8)'
    }]
  };

  return (
    <div className="space-y-8">
      {/* Основные показатели */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Прогресс обучения
          </h3>
          <div className="text-3xl font-bold mb-2">78%</div>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            Курсы завершены
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Средний балл
          </h3>
          <div className="text-3xl font-bold mb-2">4.2</div>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            За все время
          </p>
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Активность
          </h3>
          <div className="text-3xl font-bold mb-2">92%</div>
          <p className={`text-sm ${getColorClass('text.secondary')}`}>
            Посещаемость
          </p>
        </div>
      </div>

      {/* Графики */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Динамика успеваемости
          </h3>
          <LineChart data={learningProgress} />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Активность по типам занятий
          </h3>
          <DoughnutChart data={activityData} />
        </div>
      </div>

      {/* Прогресс навыков */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Развитие навыков
        </h3>
        <BarChart data={skillsProgress} />
      </div>

      {/* Рекомендации */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Рекомендации по развитию
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="text-2xl">📚</div>
            <div>
              <h4 className={`font-medium mb-1 ${getColorClass('text.primary')}`}>
                Улучшите языковые навыки
              </h4>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                Рекомендуем пройти дополнительные курсы по английскому языку
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className={`font-medium mb-1 ${getColorClass('text.primary')}`}>
                Развивайте лидерские качества
              </h4>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                Участвуйте в групповых проектах и берите на себя роль лидера команды
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 