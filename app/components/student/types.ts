export type Course = {
  id: number;
  title: string;
  type: 'free' | 'premium' | 'partner';
  provider: string;
  progress: number;
  nextLesson: string;
  instructor: string;
  studentsCount: number;
  rating: number;
  description: string;
  duration: string;
  lessons: number;
  image: string;
  price?: number;
  referralBonus?: number;
};

export type Mentor = {
  id: number;
  name: string;
  position: string;
  company: string;
  available: boolean;
  rating: number;
  reviews: number;
  expertise: string[];
  price: string;
  experience: string;
  languages: string[];
  education: string;
  bio: string;
  achievements: string[];
  schedule: Record<string, string[]>;
  avatar: string;
};

export type ScheduleEvent = {
  time: string;
  type: 'lesson' | 'mentoring' | 'event';
  title: string;
  course?: string;
  instructor?: string;
  mentor?: string;
  location: string;
  link: string;
};

export type ScheduleDay = {
  date: string;
  weekday: string;
  events: ScheduleEvent[];
};

export type ProgressData = {
  overall: number;
  courses: {
    completed: number;
    inProgress: number;
    total: number;
  };
  skills: {
    name: string;
    level: number;
  }[];
  certificates: {
    name: string;
    date: string;
    issuer: string;
  }[];
  activity: {
    streak: number;
    lastWeek: number[];
    totalHours: number;
  };
}; 