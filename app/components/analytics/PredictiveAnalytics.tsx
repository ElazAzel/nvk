interface PredictiveAnalytics {
  // Прогнозирование успеваемости
  academicPredictions: {
    dropoutRisk: number;
    performanceTrend: Trend;
    recommendedActions: Action[];
  };
  
  // Анализ рынка труда
  marketAnalysis: {
    emergingSkills: Skill[];
    industryTrends: Trend[];
    salaryPredictions: SalaryRange;
  };
} 