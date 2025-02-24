export interface ClassMaterial {
  id: number;
  name: string;
  url: string;
}

export interface ClassAssignment {
  id: number;
  title: string;
  deadline: string;
}

export interface Class {
  id: number;
  subject: string;
  type: 'lecture' | 'practice' | 'laboratory';
  time: {
    start: string;
    end: string;
  };
  location: string;
  teacher: string;
  materials?: ClassMaterial[];
  assignment?: ClassAssignment;
}

export interface ScheduleDay {
  day: string;
  date: string;
  classes: Class[];
}

export interface Schedule {
  currentWeek: ScheduleDay[];
  nextWeek: ScheduleDay[];
} 