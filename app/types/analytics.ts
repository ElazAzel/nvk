export interface AnalyticsData {
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
} 