interface SecurityFeatures {
  // Двухфакторная аутентификация
  twoFactor: {
    sms: boolean;
    email: boolean;
    authenticatorApp: boolean;
  };
  
  // Управление данными
  dataManagement: {
    export: () => UserData;
    delete: () => void;
    privacySettings: PrivacySettings;
  };
} 