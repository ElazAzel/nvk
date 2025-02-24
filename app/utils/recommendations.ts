interface RecommendationEngine {
  suggestCourses: (studentId: string) => Course[];
  suggestJobs: (studentId: string) => Job[];
  suggestMentors: (studentId: string) => Mentor[];
} 