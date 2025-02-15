export interface BaseStats {
  trend: 'up' | 'down';
  change: string;
}

export interface AnalyticsCard extends BaseStats {
  title: string;
  value: string;
}

export interface PerformanceMetric {
  value: number;
  target: number;
  progress: number;
}

export interface FacultyStats {
  students: number;
  publications: number;
  rating: number;
  projects: number;
}

export interface CareerStats {
  employed: number;
  avgSalary: number;
  satisfaction: number;
} 