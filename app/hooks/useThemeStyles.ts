import { useTheme } from '@/app/contexts/ThemeContext';
import { THEME_COLORS, THEME_VARIANTS } from '@/app/config/theme';

export function useThemeStyles() {
  const { theme } = useTheme();

  const getColorClass = (colorKey: string) => {
    const keys = colorKey.split('.');
    let value = THEME_COLORS[theme];
    
    for (const key of keys) {
      if (!value || !value[key]) {
        console.warn(`Theme key not found: ${colorKey}`);
        return '';
      }
      value = value[key];
    }
    
    return value;
  };

  const getVariantClass = (component: string, variant: string) => {
    if (!THEME_VARIANTS[component] || 
        !THEME_VARIANTS[component][variant] || 
        !THEME_VARIANTS[component][variant][theme]) {
      console.warn(`Variant not found: ${component}.${variant}.${theme}`);
      return '';
    }
    return THEME_VARIANTS[component][variant][theme];
  };

  return {
    colors: THEME_COLORS[theme],
    variants: THEME_VARIANTS,
    getColorClass,
    getVariantClass,
    theme
  };
} 