interface MobileFeatures {
  // Оффлайн доступ
  offline: {
    syncData: () => void;
    cacheContent: () => void;
  };
  
  // Push-уведомления
  notifications: {
    jobAlerts: boolean;
    deadlineReminders: boolean;
    eventUpdates: boolean;
  };
  
  // Геолокация
  location: {
    nearbyEvents: Event[];
    campusNavigation: Route[];
  };
} 