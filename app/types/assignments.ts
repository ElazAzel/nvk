export interface Assignment {
  id: number;
  title: string;
  subject: string;
  description: string;
  deadline: string;
  status: 'active' | 'completed' | 'overdue';
  progress: number;
  priority: 'low' | 'medium' | 'high';
  type: 'homework' | 'project' | 'laboratory' | 'test';
  attachments?: Array<{
    id: number;
    name: string;
    url: string;
  }>;
  grade?: number;
} 