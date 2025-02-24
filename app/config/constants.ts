export const ANALYTICS_PERIODS = {
  YEAR: 'За год',
  THREE_YEARS: 'За 3 года',
  FIVE_YEARS: 'За 5 лет',
} as const;

export const PERFORMANCE_THRESHOLDS = {
  EXCELLENT: 3.5,
  GOOD: 3.0,
  POOR: 2.5,
} as const;

export const SATISFACTION_LEVELS = {
  HIGH: 4.5,
  MEDIUM: 4.0,
  LOW: 3.5,
} as const;

export const COLOR_SCHEMES = {
  success: {
    text: 'text-green-700',
    bg: 'bg-green-100',
  },
  warning: {
    text: 'text-yellow-700',
    bg: 'bg-yellow-100',
  },
  error: {
    text: 'text-red-700',
    bg: 'bg-red-100',
  },
} as const; 