"use client";

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import { LoadingSpinner } from '@/app/components/common/LoadingSpinner';
import { ErrorMessage } from '@/app/components/common/ErrorMessage';
import { useAnalytics } from '@/app/hooks/useAnalytics';
import { LineChart } from '@/app/components/charts/LineChart';
import { DoughnutChart } from '@/app/components/charts/DoughnutChart';
import { BarChart } from '@/app/components/charts/BarChart';
import { StatCard } from '@/app/components/common/StatCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface AnalyticsData {
  overview: Array<{
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
  }>;
  academicPerformance: {
    averageGrades: Array<{
      period: string;
      value: number;
    }>;
    byFaculty: Array<{
      faculty: string;
      grade: number;
    }>;
  };
  demographics: {
    gender: Array<{
      category: string;
      count: number;
    }>;
    ageGroups: Array<{
      group: string;
      count: number;
    }>;
    regions: Array<{
      region: string;
      count: number;
    }>;
  };
  events: {
    monthlyParticipation: Array<{
      month: string;
      count: number;
    }>;
    byType: Array<{
      type: string;
      count: number;
    }>;
  };
  courses: {
    enrollment: {
      paid: number;
      free: number;
    };
    byCategory: Array<{
      category: string;
      count: number;
    }>;
    completionRate: number;
  };
  employment: {
    stages: {
      applications: number;
      internships: number;
      employed: number;
    };
    byIndustry: Array<{
      industry: string;
      count: number;
    }>;
    topCompanies: Array<{
      company: string;
      count: number;
    }>;
  };
  ranking: {
    studentActivity: {
      position: number;
      totalUniversities: number;
      score: number;
    };
    comparison: Array<{
      metric: string;
      value: number;
      average: number;
    }>;
  };
  satisfaction: {
    academic: {
      teaching: number;
      curriculum: number;
      assessment: number;
      feedback: number;
      resources: number;
    };
    campus: {
      facilities: number;
      accommodation: number;
      dining: number;
      security: number;
      cleanliness: number;
    };
    support: {
      academic: number;
      career: number;
      psychological: number;
      financial: number;
      technical: number;
    };
    trends: Array<{
      period: string;
      academic: number;
      campus: number;
      support: number;
    }>;
  };
}

export function UniversityAnalytics() {
  const { data, isLoading, error } = useAnalytics('year');
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [period, setPeriod] = useState<'month' | 'quarter' | 'year'>('month');

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  // Моковые данные для удовлетворенности (временное решение)
  const satisfactionData = {
    academic: {
      teaching: 85,
      curriculum: 80,
      assessment: 75,
      feedback: 70,
      resources: 78
    },
    campus: {
      facilities: 82,
      accommodation: 75,
      dining: 68,
      security: 88,
      cleanliness: 85
    },
    support: {
      academic: 80,
      career: 75,
      psychological: 72,
      financial: 65,
      technical: 78
    },
    trends: [
      { period: 'Янв', academic: 78, campus: 80, support: 75 },
      { period: 'Фев', academic: 80, campus: 82, support: 76 },
      { period: 'Мар', academic: 82, campus: 81, support: 78 },
      { period: 'Апр', academic: 85, campus: 83, support: 80 },
      { period: 'Май', academic: 83, campus: 85, support: 82 },
      { period: 'Июн', academic: 86, campus: 84, support: 83 }
    ]
  };

  // Новые данные для диаграмм
  const careerCenterStats = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Карьерные консультации',
        data: [45, 52, 68, 75, 82, 90],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)'
      },
      {
        label: 'Резюме на проверке',
        data: [30, 35, 42, 48, 55, 60],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)'
      }
    ]
  };

  const skillDevelopment = {
    labels: ['Soft skills', 'Технические', 'Языковые', 'Лидерские', 'Предпринимательские'],
    datasets: [{
      label: 'Количество тренингов',
      data: [28, 35, 20, 15, 12],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(107, 114, 128, 0.8)'
      ]
    }]
  };

  const studentSupportRequests = {
    labels: ['Академические', 'Финансовые', 'Психологические', 'Социальные', 'Технические'],
    datasets: [{
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(107, 114, 128, 0.8)'
      ]
    }]
  };

  const internshipSuccess = {
    labels: ['Успешно завершили', 'Получили оффер', 'Продлили стажировку', 'Не завершили'],
    datasets: [{
      data: [65, 40, 25, 10],
      backgroundColor: [
        'rgba(16, 185, 129, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ]
    }]
  };

  const mentorshipProgram = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Активные менторы',
        data: [25, 28, 32, 35, 40, 45],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)'
      },
      {
        label: 'Студенты с менторами',
        data: [50, 56, 64, 70, 80, 90],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)'
      }
    ]
  };

  const alumniEngagement = {
    labels: ['Менторство', 'Мастер-классы', 'Стажировки', 'Трудоустройство', 'Проекты'],
    datasets: [{
      label: 'Вовлеченность выпускников',
      data: [45, 65, 55, 70, 40],
      backgroundColor: 'rgba(59, 130, 246, 0.8)'
    }]
  };

  // Данные для диаграмм удовлетворенности
  const academicSatisfaction = {
    labels: ['Качество преподавания', 'Учебная программа', 'Система оценивания', 'Обратная связь', 'Учебные ресурсы'],
    datasets: [{
      label: 'Уровень удовлетворенности (%)',
      data: [
        satisfactionData.academic.teaching,
        satisfactionData.academic.curriculum,
        satisfactionData.academic.assessment,
        satisfactionData.academic.feedback,
        satisfactionData.academic.resources
      ],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1
    }]
  };

  const campusSatisfaction = {
    labels: ['Инфраструктура', 'Общежития', 'Питание', 'Безопасность', 'Чистота'],
    datasets: [{
      label: 'Уровень удовлетворенности (%)',
      data: [
        satisfactionData.campus.facilities,
        satisfactionData.campus.accommodation,
        satisfactionData.campus.dining,
        satisfactionData.campus.security,
        satisfactionData.campus.cleanliness
      ],
      backgroundColor: 'rgba(16, 185, 129, 0.8)',
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 1
    }]
  };

  const supportSatisfaction = {
    labels: ['Академическая', 'Карьерная', 'Психологическая', 'Финансовая', 'Техническая'],
    datasets: [{
      label: 'Уровень удовлетворенности (%)',
      data: [
        satisfactionData.support.academic,
        satisfactionData.support.career,
        satisfactionData.support.psychological,
        satisfactionData.support.financial,
        satisfactionData.support.technical
      ],
      backgroundColor: 'rgba(245, 158, 11, 0.8)',
      borderColor: 'rgb(245, 158, 11)',
      borderWidth: 1
    }]
  };

  const satisfactionTrends = {
    labels: satisfactionData.trends.map(item => item.period),
    datasets: [
      {
        label: 'Академическая сфера',
        data: satisfactionData.trends.map(item => item.academic),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)'
      },
      {
        label: 'Кампус',
        data: satisfactionData.trends.map(item => item.campus),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)'
      },
      {
        label: 'Поддержка',
        data: satisfactionData.trends.map(item => item.support),
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.5)'
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Период */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setPeriod('month')}
          className={`px-3 py-1 rounded-lg text-sm ${
            period === 'month' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Месяц
        </button>
        <button
          onClick={() => setPeriod('quarter')}
          className={`px-3 py-1 rounded-lg text-sm ${
            period === 'quarter' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Квартал
        </button>
        <button
          onClick={() => setPeriod('year')}
          className={`px-3 py-1 rounded-lg text-sm ${
            period === 'year' ? getVariantClass('button', 'primary') : getVariantClass('button', 'outline')
          }`}
        >
          Год
        </button>
      </div>

      {/* Основные показатели */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.overview.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Успеваемость */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Динамика успеваемости
          </h3>
          <LineChart
            data={{
              labels: data.academicPerformance.averageGrades.map(item => item.period),
              datasets: [{
                label: 'Средний балл',
                data: data.academicPerformance.averageGrades.map(item => item.value),
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.5)'
              }]
            }}
          />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Успеваемость по факультетам
          </h3>
          <BarChart
            data={{
              labels: data.academicPerformance.byFaculty.map(item => item.faculty),
              datasets: [{
                label: 'Средний балл',
                data: data.academicPerformance.byFaculty.map(item => item.grade),
                backgroundColor: 'rgba(59, 130, 246, 0.8)'
              }]
            }}
          />
        </div>
      </div>

      {/* Демография */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Гендерное распределение
          </h3>
          <DoughnutChart
            data={{
              labels: data.demographics.gender.map(item => item.category),
              datasets: [{
                data: data.demographics.gender.map(item => item.count),
                backgroundColor: [
                  'rgba(59, 130, 246, 0.8)',
                  'rgba(236, 72, 153, 0.8)'
                ]
              }]
            }}
          />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Возрастные группы
          </h3>
          <BarChart
            data={{
              labels: data.demographics.ageGroups.map(item => item.group),
              datasets: [{
                label: 'Количество студентов',
                data: data.demographics.ageGroups.map(item => item.count),
                backgroundColor: 'rgba(16, 185, 129, 0.8)'
              }]
            }}
          />
        </div>
      </div>

      {/* Мероприятия */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Участие в мероприятиях
          </h3>
          <LineChart
            data={{
              labels: data.events.monthlyParticipation.map(item => item.month),
              datasets: [{
                label: 'Количество участников',
                data: data.events.monthlyParticipation.map(item => item.count),
                borderColor: 'rgb(245, 158, 11)',
                backgroundColor: 'rgba(245, 158, 11, 0.5)'
              }]
            }}
          />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Типы мероприятий
          </h3>
          <DoughnutChart
            data={{
              labels: data.events.byType.map(item => item.type),
              datasets: [{
                data: data.events.byType.map(item => item.count),
                backgroundColor: [
                  'rgba(59, 130, 246, 0.8)',
                  'rgba(16, 185, 129, 0.8)',
                  'rgba(245, 158, 11, 0.8)',
                  'rgba(239, 68, 68, 0.8)',
                  'rgba(107, 114, 128, 0.8)'
                ]
              }]
            }}
          />
        </div>
      </div>

      {/* Курсы */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Распределение курсов
          </h3>
          <DoughnutChart
            data={{
              labels: ['Платные курсы', 'Бесплатные курсы'],
              datasets: [{
                data: [data.courses.enrollment.paid, data.courses.enrollment.free],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.8)',
                  'rgba(16, 185, 129, 0.8)'
                ]
              }]
            }}
          />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Категории курсов
          </h3>
          <BarChart
            data={{
              labels: data.courses.byCategory.map(item => item.category),
              datasets: [{
                label: 'Количество студентов',
                data: data.courses.byCategory.map(item => item.count),
                backgroundColor: 'rgba(245, 158, 11, 0.8)'
              }]
            }}
          />
        </div>
      </div>

      {/* Трудоустройство */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Этапы трудоустройства
          </h3>
          <BarChart
            data={{
              labels: ['Подали заявки', 'На стажировке', 'Трудоустроены'],
              datasets: [{
                label: 'Количество студентов',
                data: [
                  data.employment.stages.applications,
                  data.employment.stages.internships,
                  data.employment.stages.employed
                ],
                backgroundColor: 'rgba(59, 130, 246, 0.8)'
              }]
            }}
          />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Направления трудоустройства
          </h3>
          <DoughnutChart
            data={{
              labels: data.employment.byIndustry.map(item => item.industry),
              datasets: [{
                data: data.employment.byIndustry.map(item => item.count),
                backgroundColor: [
                  'rgba(59, 130, 246, 0.8)',
                  'rgba(16, 185, 129, 0.8)',
                  'rgba(245, 158, 11, 0.8)',
                  'rgba(239, 68, 68, 0.8)',
                  'rgba(107, 114, 128, 0.8)'
                ]
              }]
            }}
          />
        </div>
      </div>

      {/* Топ компаний и рейтинг */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Топ компаний
          </h3>
          <BarChart
            data={{
              labels: data.employment.topCompanies.map(item => item.company),
              datasets: [{
                label: 'Количество студентов',
                data: data.employment.topCompanies.map(item => item.count),
                backgroundColor: 'rgba(16, 185, 129, 0.8)'
              }]
            }}
          />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Сравнение с другими вузами
          </h3>
          <BarChart
            data={{
              labels: data.ranking.comparison.map(item => item.metric),
              datasets: [
                {
                  label: 'Наш вуз',
                  data: data.ranking.comparison.map(item => item.value),
                  backgroundColor: 'rgba(59, 130, 246, 0.8)'
                },
                {
                  label: 'Средний показатель',
                  data: data.ranking.comparison.map(item => item.average),
                  backgroundColor: 'rgba(107, 114, 128, 0.8)'
                }
              ]
            }}
          />
        </div>
      </div>

      {/* Центр карьеры */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Активность центра карьеры
          </h3>
          <LineChart data={careerCenterStats} />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Развитие навыков
          </h3>
          <BarChart data={skillDevelopment} />
        </div>
      </div>

      {/* Поддержка студентов */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Обращения в центр поддержки
          </h3>
          <DoughnutChart data={studentSupportRequests} />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Результаты стажировок
          </h3>
          <DoughnutChart data={internshipSuccess} />
        </div>
      </div>

      {/* Менторство и выпускники */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Программа менторства
          </h3>
          <LineChart data={mentorshipProgram} />
        </div>

        <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
          <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
            Вовлеченность выпускников
          </h3>
          <BarChart data={alumniEngagement} />
        </div>
      </div>

      {/* Удовлетворенность студентов */}
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h2 className={`text-xl font-bold mb-6 ${getColorClass('text.primary')}`}>
          Удовлетворенность студентов
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
              Академическая сфера
            </h3>
            <BarChart data={academicSatisfaction} />
          </div>

          <div>
            <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
              Кампус и инфраструктура
            </h3>
            <BarChart data={campusSatisfaction} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
              Поддержка студентов
            </h3>
            <BarChart data={supportSatisfaction} />
          </div>

          <div>
            <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
              Динамика удовлетворенности
            </h3>
            <LineChart data={satisfactionTrends} />
          </div>
        </div>
      </div>
    </div>
  );
} 