export interface RoadmapTask {
  id: number;
  title: string;
  completed: boolean;
}

export interface RoadmapStage {
  id: number;
  title: string;
  description: string;
  tasks: RoadmapTask[];
  isCompleted: boolean;
  icon: string;
} 