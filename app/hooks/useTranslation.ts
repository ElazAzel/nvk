import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/config/localization';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value[k] === undefined) {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
      value = value[k];
    }
    
    return value;
  };

  return { t };
} 