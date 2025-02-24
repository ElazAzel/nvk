export interface Achievement {
  id: number;
  category: 'education' | 'courses' | 'events' | 'career';
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  isCompleted: boolean;
  reward: string;
  icon: string;
} 