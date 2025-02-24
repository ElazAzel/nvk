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
  ArcElement,
  RadialLinearScale
} from 'chart.js';

// Регистрируем все необходимые компоненты
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,        // Для круговых диаграмм (Doughnut, Pie)
  RadialLinearScale, // Для радиальных диаграмм
  Title,
  Tooltip,
  Legend
);

// Глобальные настройки для всех графиков
ChartJS.defaults.color = '#666';
ChartJS.defaults.font.family = 'Inter, sans-serif'; 