"use client";

import { useTheme } from 'next-themes';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

// Регистрируем компоненты Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  options?: any;
}

export function BarChart({ data, options = {} }: BarChartProps) {
  const { theme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: !isMobile,
        position: 'top' as const,
        labels: {
          color: theme === 'dark' ? '#e5e7eb' : '#374151',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme === 'dark' ? '#374151' : '#e5e7eb',
        },
        ticks: {
          color: theme === 'dark' ? '#e5e7eb' : '#374151',
          display: !isMobile,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: theme === 'dark' ? '#e5e7eb' : '#374151',
        },
      },
    },
    animation: {
      duration: 750,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="relative h-full w-full">
      <Bar data={data} options={{ ...defaultOptions, ...options }} />
    </div>
  );
} 