interface GamificationSystem {
  // Система достижений
  achievements: {
    badges: Badge[];
    levels: Level[];
    rewards: Reward[];
  };
  
  // Соревнования
  competitions: {
    challenges: Challenge[];
    leaderboards: Leaderboard[];
    prizes: Prize[];
  };
} 