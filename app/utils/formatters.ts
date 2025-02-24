export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('ru-KZ', {
    style: 'currency',
    currency: 'KZT',
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

export const formatRating = (value: number): string => {
  return value.toFixed(1);
};

export const getColorByValue = (value: number, thresholds: Record<string, number>) => {
  if (value >= thresholds.EXCELLENT) return 'success';
  if (value >= thresholds.GOOD) return 'warning';
  return 'error';
}; 