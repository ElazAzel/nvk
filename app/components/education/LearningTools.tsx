interface LearningFeatures {
  // Интерактивные курсы
  courses: {
    interactive: Course[];
    selfPaced: Course[];
    live: Course[];
  };
  
  // Оценка навыков
  assessment: {
    skillTests: Test[];
    practicalTasks: Task[];
    peerReview: Review[];
  };
} 