interface EmployerFeatures {
  // Управление вакансиями
  jobManagement: {
    postJob: (job: Job) => void;
    trackApplications: () => Application[];
    scheduleInterviews: () => Interview[];
  };
  
  // Взаимодействие с университетом
  universityCollaboration: {
    internshipPrograms: Program[];
    guestLectures: Event[];
    projectCollaborations: Project[];
  };
} 