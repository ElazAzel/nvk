interface AdminAnalytics {
  // Метрики платформы
  platformMetrics: {
    activeUsers: number;
    engagementRate: number;
    successRate: number;
  };
  
  // Отчеты
  reports: {
    userActivity: Report;
    resourceUtilization: Report;
    outcomeAnalysis: Report;
  };
} 