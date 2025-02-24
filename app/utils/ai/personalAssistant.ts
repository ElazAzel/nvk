interface AIAssistant {
  // Персональный помощник для студентов
  features: {
    careerAdvice: (studentProfile: StudentProfile) => CareerRecommendation[];
    studyPlan: (performance: Performance) => StudyPlanRecommendation;
    skillGaps: (currentSkills: Skill[], jobRequirements: Skill[]) => Skill[];
  };
  
  // Умные уведомления
  notifications: {
    relevantJobs: () => Job[];
    upcomingDeadlines: () => Deadline[];
    learningOpportunities: () => Course[];
  };
} 