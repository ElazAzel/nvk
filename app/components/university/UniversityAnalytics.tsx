"use client";

import { LineChart } from '../charts/LineChart';
import { DoughnutChart } from '../charts/DoughnutChart';
import { BarChart } from '../charts/BarChart';
import { motion } from 'framer-motion';
import { UniversityControls } from './UniversityControls';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useState } from 'react';

// Исправляем типы для графиков
type LineChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension?: number;
  }[];
};

type DoughnutChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
};

type BarChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string | string[];
  }[];
};

type ChartData = {
  id: string;
  title: string;
  type: 'line' | 'doughnut' | 'bar';
  data: LineChartData | DoughnutChartData | BarChartData;
};

// Добавим общие опции для графиков
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxWidth: 12,
        padding: 8,
        font: {
          size: 11
        }
      }
    }
  }
};

// Специальные опции для линейных графиков
const lineChartOptions = {
  ...chartOptions,
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 10
        }
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(107, 114, 128, 0.1)'
      },
      ticks: {
        font: {
          size: 10
        }
      }
    }
  }
};

// Специальные опции для столбчатых диаграмм
const barChartOptions = {
  ...chartOptions,
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 10
        }
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(107, 114, 128, 0.1)'
      },
      ticks: {
        font: {
          size: 10
        }
      }
    }
  }
};

// Обновим опции для круговых диаграмм
const doughnutChartOptions = {
  ...chartOptions,
  cutout: '65%',
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    }
  }
};

// Исправляем тип для DraggableProvided
type DraggableProvided = {
  draggableProps: {
    style?: React.CSSProperties;
    'data-rbd-draggable-context-id'?: string;
    'data-rbd-draggable-id'?: string;
    onTransitionEnd?: (event: TransitionEvent) => void;
  };
  dragHandleProps: {
    'data-rbd-drag-handle-draggable-id'?: string;
    'data-rbd-drag-handle-context-id'?: string;
    role?: string;
    tabIndex?: number;
    draggable?: boolean;
    onDragStart?: (event: DragEvent) => void;
  } | null;
  innerRef: (element: HTMLElement | null) => void;
};

type DraggableSnapshot = {
  isDragging: boolean;
  draggingOver: string | null;
};

// Обновляем компонент контейнера для графиков
const ChartContainer = ({ 
  children, 
  provided, 
  snapshot, 
  chart 
}: { 
  children: React.ReactNode;
  provided: DraggableProvided;
  snapshot: DraggableSnapshot;
  chart: ChartData;
}) => (
  <motion.div
    ref={provided.innerRef}
    {...provided.draggableProps}
    style={{
      ...provided.draggableProps.style,
      transform: snapshot.isDragging 
        ? provided.draggableProps.style?.transform 
        : 'none',
      transition: snapshot.isDragging
        ? provided.draggableProps.style?.transition
        : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }}
    animate={{ 
      scale: snapshot.isDragging ? 1.05 : 1,
      opacity: snapshot.isDragging ? 0.9 : 1,
      zIndex: snapshot.isDragging ? 50 : 1,
    }}
    className={`
      bg-white dark:bg-gray-800 rounded-xl p-4
      h-[320px] flex flex-col relative
      backdrop-blur-sm bg-opacity-95 dark:bg-opacity-90
      ${snapshot.isDragging 
        ? 'ring-2 ring-blue-500 shadow-2xl' 
        : 'shadow-sm hover:shadow-lg hover:-translate-y-1'
      }
      transition-all duration-200 ease-out
    `}
  >
    <div 
      {...provided.dragHandleProps}
      className="flex items-center justify-between mb-3 cursor-move chart-handle"
      style={{
        touchAction: 'none',
        userSelect: 'none'
      }}
    >
      <div className="flex items-center space-x-3">
        <span className={`
          w-2 h-2 rounded-full
          ${chart.type === 'line' ? 'bg-blue-500' :
            chart.type === 'doughnut' ? 'bg-green-500' :
            'bg-purple-500'}
        `} />
        <h3 className="text-base font-medium text-gray-900 dark:text-white">
          {chart.title}
        </h3>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 
          bg-gray-100 dark:bg-gray-700 rounded-full">
          {chart.type}
        </span>
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </div>
    <div className="flex-1 relative overflow-hidden">
      {children}
    </div>
  </motion.div>
);

// Обновляем FilterBar
const FilterBar = ({ 
  searchTerm, 
  selectedType, 
  onSearchChange, 
  onTypeChange 
}: {
  searchTerm: string;
  selectedType: 'all' | 'line' | 'doughnut' | 'bar';
  onSearchChange: (value: string) => void;
  onTypeChange: (value: 'all' | 'line' | 'doughnut' | 'bar') => void;
}) => (
  <div className="flex flex-wrap gap-4 mb-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
    <div className="flex-1">
      <input
        type="text"
        placeholder="Поиск графиков..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-200"
      />
    </div>
    <select
      value={selectedType}
      onChange={(e) => onTypeChange(e.target.value as 'all' | 'line' | 'doughnut' | 'bar')}
      className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
        bg-white dark:bg-gray-800 text-gray-900 dark:text-white
        focus:ring-2 focus:ring-blue-500 focus:border-transparent
        transition-all duration-200"
    >
      <option value="all">Все типы</option>
      <option value="line">Линейные</option>
      <option value="doughnut">Круговые</option>
      <option value="bar">Столбчатые</option>
    </select>
  </div>
);

export function UniversityAnalytics() {
  // 1. Активность студентов по времени
  const studentActivity = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [{
      label: 'Ежедневная активность',
      data: [1200, 1350, 1450, 1600, 1750, 1900],
        borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
    }]
  };

  // 2. Вовлеченность в курсы
  const courseEngagement = {
    labels: ['Активные', 'Завершили', 'Бросили', 'На паузе'],
    datasets: [{
      label: 'Статус прохождения курсов',
      data: [45, 30, 15, 10],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(239, 68, 68)',
        'rgb(249, 115, 22)'
      ]
    }]
  };

  // 3. Популярность направлений обучения
  const learningPaths = {
    labels: ['Web Dev', 'Data Science', 'Mobile Dev', 'DevOps', 'UI/UX', 'Other'],
    datasets: [{
      label: 'Количество студентов',
      data: [350, 280, 220, 180, 150, 100],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(107, 114, 128, 0.8)'
      ]
    }]
  };

  // 4. Успеваемость по времени суток
  const timePerformance = {
    labels: ['6-9', '9-12', '12-15', '15-18', '18-21', '21-24'],
    datasets: [{
      label: 'Средний балл',
      data: [75, 85, 82, 78, 88, 80],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
    }]
  };

  // 5. Источники трафика студентов
  const trafficSources = {
    labels: ['Прямой', 'Реферальный', 'Социальные сети', 'Email', 'Другое'],
    datasets: [{
      label: 'Источники',
      data: [40, 25, 20, 10, 5],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(249, 115, 22)',
        'rgb(139, 92, 246)',
        'rgb(236, 72, 153)'
      ]
    }]
  };

  // 6. Устройства доступа
  const deviceUsage = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{
      label: 'Устройства',
      data: [60, 35, 5],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(249, 115, 22)'
      ]
    }]
  };

  // 7. Средняя продолжительность сессии
  const sessionDuration: BarChartData = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май'],
    datasets: [{
      label: 'Длительность',
      data: [45, 59, 80, 81, 56],
      backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
    }]
  };

  // 8. Взаимодействие с менторами
  const mentorInteractions = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [{
      label: 'Количество консультаций',
      data: [45, 52, 58, 60, 65, 70],
      borderColor: 'rgb(236, 72, 153)',
      backgroundColor: 'rgba(236, 72, 153, 0.1)',
    }]
  };

  // 9. Конверсия в платные курсы
  const courseConversion: BarChartData = {
    labels: ['Просмотры', 'Регистрации', 'Пробные', 'Оплаты'],
    datasets: [{
      label: 'Воронка конверсии',
      data: [1000, 500, 200, 100],
      backgroundColor: ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6']
    }]
  };

  // 10. Активность по дням недели
  const weekdayActivity = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Активные пользователи',
      data: [850, 900, 880, 870, 820, 600, 500],
        borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
    }]
  };

  // 11. Рост навыков
  const skillsGrowth = {
    labels: ['Технические', 'Soft Skills', 'Языки', 'Проектные', 'Другие'],
    datasets: [{
      label: 'Прогресс',
      data: [85, 75, 65, 80, 70],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)'
      ]
    }]
  };

  // 12. Удовлетворенность платформой
  const satisfaction = {
    labels: ['Очень доволен', 'Доволен', 'Нейтрально', 'Недоволен', 'Очень недоволен'],
    datasets: [{
      label: 'Оценка платформы',
      data: [45, 35, 15, 4, 1],
      backgroundColor: [
        'rgb(16, 185, 129)',
        'rgb(59, 130, 246)',
        'rgb(249, 115, 22)',
        'rgb(239, 68, 68)',
        'rgb(236, 72, 153)'
      ]
    }]
  };

  // 13. Карьерный рост выпускников
  const careerProgress: BarChartData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Карьерный рост',
      data: [65, 75, 82, 90],
      backgroundColor: ['#3B82F6', '#3B82F6', '#3B82F6', '#3B82F6']
    }]
  };

  // 14. Международная активность
  const internationalActivity = {
    labels: ['Локальные', 'СНГ', 'Европа', 'США', 'Азия'],
    datasets: [{
      label: 'Распределение студентов',
      data: [60, 20, 10, 5, 5],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(249, 115, 22)',
        'rgb(139, 92, 246)',
        'rgb(236, 72, 153)'
      ]
    }]
  };

  // 15. Эффективность обучения
  const learningEfficiency = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [{
      label: 'Средний балл за тесты',
      data: [75, 78, 82, 85, 88, 90],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
    }]
  };

  // 16. Социальное взаимодействие
  const socialInteractions = {
    labels: ['Форумы', 'Групповые проекты', 'Менторство', 'Чаты', 'Мероприятия'],
    datasets: [{
      label: 'Активность',
      data: [40, 25, 15, 12, 8],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(249, 115, 22)',
        'rgb(139, 92, 246)',
        'rgb(236, 72, 153)'
      ]
    }]
  };

  // 17. Прогресс по компетенциям
  const competencyProgress = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Hard Skills',
        data: [65, 75, 82, 90],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
      },
      {
        label: 'Soft Skills',
        data: [70, 78, 85, 92],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
      }
    ]
  };

  // 18. Инвестиции в образование
  const educationInvestment = {
    labels: ['Курсы', 'Менторство', 'Проекты', 'Сертификации'],
              datasets: [{
      label: 'Распределение инвестиций',
      data: [40, 30, 20, 10],
                backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(249, 115, 22)',
        'rgb(139, 92, 246)'
      ]
    }]
  };

  // 19. Скорость трудоустройства
  const employmentSpeed: BarChartData = {
    labels: ['1 месяц', '3 месяца', '6 месяцев', '12 месяцев'],
    datasets: [{
      label: 'Трудоустройство',
      data: [30, 45, 65, 85],
      backgroundColor: ['#10B981', '#10B981', '#10B981', '#10B981']
    }]
  };

  // 20. Популярность сертификаций
  const certificationPopularity = {
    labels: ['AWS', 'Google', 'Microsoft', 'Cisco', 'Oracle'],
              datasets: [{
      label: 'Количество сертификатов',
      data: [300, 250, 200, 150, 100],
                backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(249, 115, 22)',
        'rgb(139, 92, 246)',
        'rgb(236, 72, 153)'
      ]
    }]
  };

  // 21. Рейтинг работодателей
  const employerRatings = {
    labels: ['5★', '4★', '3★', '2★', '1★'],
              datasets: [{
      label: 'Оценки работодателей',
      data: [45, 35, 15, 4, 1],
                backgroundColor: [
        'rgb(16, 185, 129)',
        'rgb(59, 130, 246)',
        'rgb(249, 115, 22)',
        'rgb(239, 68, 68)',
        'rgb(236, 72, 153)'
      ]
    }]
  };

  // 22. Анализ отсева
  const dropoutAnalysis = {
    labels: ['Финансы', 'Сложность', 'Время', 'Другие приоритеты', 'Иное'],
              datasets: [{
      label: 'Причины отсева',
      data: [30, 25, 20, 15, 10],
                backgroundColor: [
        'rgb(239, 68, 68)',
        'rgb(249, 115, 22)',
        'rgb(59, 130, 246)',
        'rgb(139, 92, 246)',
        'rgb(236, 72, 153)'
      ]
    }]
  };

  const initialCharts: ChartData[] = [
    {
      id: 'student-activity',
      title: 'Активность студентов',
      type: 'line',
      data: studentActivity
    },
    {
      id: 'course-engagement',
      title: 'Вовлеченность в курсы',
      type: 'doughnut',
      data: courseEngagement
    },
    {
      id: 'learning-paths',
      title: 'Популярные направления',
      type: 'bar',
      data: learningPaths
    },
    {
      id: 'time-performance',
      title: 'Успеваемость по времени',
      type: 'line',
      data: timePerformance
    },
    {
      id: 'traffic-sources',
      title: 'Источники трафика',
      type: 'doughnut',
      data: trafficSources
    },
    {
      id: 'device-usage',
      title: 'Устройства доступа',
      type: 'doughnut',
      data: deviceUsage
    },
    {
      id: 'session-duration',
      title: 'Длительность сессий',
      type: 'bar',
      data: sessionDuration
    },
    {
      id: 'mentor-interactions',
      title: 'Взаимодействие с менторами',
      type: 'line',
      data: mentorInteractions
    },
    {
      id: 'course-conversion',
      title: 'Конверсия в платные курсы',
      type: 'bar',
      data: courseConversion
    },
    {
      id: 'weekday-activity',
      title: 'Активность по дням',
      type: 'line',
      data: weekdayActivity
    },
    {
      id: 'skills-growth',
      title: 'Рост навыков',
      type: 'bar',
      data: skillsGrowth
    },
    {
      id: 'satisfaction',
      title: 'Удовлетворенность',
      type: 'doughnut',
      data: satisfaction
    },
    {
      id: 'career-progress',
      title: 'Карьерный рост',
      type: 'bar',
      data: careerProgress
    },
    {
      id: 'international-activity',
      title: 'Международная активность',
      type: 'doughnut',
      data: internationalActivity
    },
    {
      id: 'learning-efficiency',
      title: 'Эффективность обучения',
      type: 'line',
      data: learningEfficiency
    },
    {
      id: 'social-interactions',
      title: 'Социальное взаимодействие',
      type: 'doughnut',
      data: socialInteractions
    },
    {
      id: 'competency-progress',
      title: 'Прогресс по компетенциям',
      type: 'line',
      data: competencyProgress
    },
    {
      id: 'education-investment',
      title: 'Инвестиции в образование',
      type: 'doughnut',
      data: educationInvestment
    },
    {
      id: 'employment-speed',
      title: 'Скорость трудоустройства',
      type: 'bar',
      data: employmentSpeed
    },
    {
      id: 'certification-popularity',
      title: 'Популярность сертификаций',
      type: 'bar',
      data: certificationPopularity
    },
    {
      id: 'employer-ratings',
      title: 'Рейтинг работодателей',
      type: 'doughnut',
      data: employerRatings
    },
    {
      id: 'dropout-analysis',
      title: 'Анализ отсева',
      type: 'doughnut',
      data: dropoutAnalysis
    }
  ];

  const [charts, setCharts] = useState(initialCharts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'line' | 'doughnut' | 'bar'>('all');

  const filteredCharts = charts.filter(chart => {
    const matchesSearch = chart.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || chart.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(charts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCharts(items);
    
    // Сохраняем новый порядок в localStorage
    const newOrder = items.map(item => item.id);
    localStorage.setItem('universityChartOrder', JSON.stringify(newOrder));
  };

  // Обновляем функцию рендера графика
  const renderChart = (chart: ChartData) => {
    const containerClass = "w-full h-full flex items-center justify-center p-2";
    
    switch (chart.type) {
      case 'line':
        return (
          <div className={containerClass}>
            <div className="w-full h-full">
              <LineChart data={chart.data as LineChartData} options={lineChartOptions as any} />
            </div>
          </div>
        );
      case 'doughnut':
        return (
          <div className={containerClass}>
            <div className="flex items-center justify-between w-full h-full">
              <div className="w-[140px] h-[140px] flex items-center justify-center">
                <DoughnutChart data={chart.data as DoughnutChartData} options={doughnutChartOptions as any} />
              </div>
              <div className="flex-1 ml-4 max-h-[200px] overflow-y-auto custom-scrollbar">
                <div className="space-y-1.5">
                  {chart.data.labels.map((label, index) => {
                    const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = ((chart.data.datasets[0].data[index] / total) * 100).toFixed(1);
                    return (
                      <div 
                        key={index} 
                        className="flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center min-w-0 flex-1">
                          <span 
                            className="w-2.5 h-2.5 rounded-full mr-2 flex-shrink-0"
                            style={{ 
                              backgroundColor: Array.isArray(chart.data.datasets[0].backgroundColor) 
                                ? chart.data.datasets[0].backgroundColor[index] 
                                : chart.data.datasets[0].backgroundColor 
                            }}
                          />
                          <span className="text-gray-700 dark:text-gray-300 truncate">
                            {label}
                          </span>
                        </div>
                        <span className="ml-2 text-gray-500 dark:text-gray-400 flex-shrink-0">
                          {percentage}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      case 'bar':
        return (
          <div className={containerClass}>
            <div className="w-full h-full">
              <BarChart data={chart.data as BarChartData} options={barChartOptions} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <UniversityControls />
      <FilterBar 
        searchTerm={searchTerm}
        selectedType={selectedType}
        onSearchChange={setSearchTerm}
        onTypeChange={setSelectedType}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable 
          droppableId="charts"
          isDropDisabled={false}
          isCombineEnabled={false}
          ignoreContainerClipping={false}
        >
          {(provided, snapshot) => (
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`
                grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6
                transition-all duration-300 ease-in-out
                ${snapshot.isDraggingOver 
                  ? 'scale-[0.98] bg-gray-50/50 dark:bg-gray-900/50 rounded-xl p-4' 
                  : 'scale-100'
                }
              `}
            >
              {filteredCharts.map((chart, index) => (
                <Draggable 
                  key={chart.id} 
                  draggableId={chart.id} 
                  index={index}
                  isDragDisabled={false}
                >
                  {(provided, snapshot) => (
                    <ChartContainer 
                      provided={provided}
                      snapshot={snapshot}
                      chart={chart}
                    >
                      {renderChart(chart)}
                    </ChartContainer>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
} 