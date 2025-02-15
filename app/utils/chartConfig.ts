import { Chart as ChartJS, registerables } from 'chart.js';

// Регистрируем все компоненты Chart.js
ChartJS.register(...registerables);

// Глобальные настройки для всех графиков
ChartJS.defaults.color = '#666';
ChartJS.defaults.font.family = 'Inter, sans-serif'; 