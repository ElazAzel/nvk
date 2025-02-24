interface EnhancedProfile {
  // Портфолио проектов
  portfolio: {
    projects: Project[];
    achievements: Achievement[];
    certificates: Certificate[];
  };
  
  // Карта компетенций
  skillMap: {
    technical: Skill[];
    soft: Skill[];
    languages: Language[];
    verified: boolean;
  };
  
  // Карьерный путь
  careerPath: {
    goals: Goal[];
    milestones: Milestone[];
    progress: Progress;
  };
} 