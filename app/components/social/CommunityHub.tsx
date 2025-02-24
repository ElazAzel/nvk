export function CommunityHub() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Форумы по специальностям */}
      <SpecialtyForums />
      
      {/* Менторские программы */}
      <MentorshipPrograms />
      
      {/* Нетворкинг события */}
      <NetworkingEvents />
      
      {/* Проектные команды */}
      <ProjectTeams />
    </div>
  );
} 