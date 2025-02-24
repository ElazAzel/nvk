"use client";

type AchievementIconProps = {
  name: string;
  className?: string;
};

export function AchievementIcon({ name, className = "w-12 h-12" }: AchievementIconProps) {
  const icons = {
    'AWS': (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z"
          className="stroke-amber-500 dark:stroke-amber-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z"
          className="fill-amber-500/20 stroke-amber-500 dark:stroke-amber-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'Google': (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9"
          className="stroke-blue-500 dark:stroke-blue-400"
          strokeWidth="2"
        />
        <path
          d="M8 12L10.5 14.5L16 9"
          className="stroke-blue-500 dark:stroke-blue-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'Python': (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C7 3 7 5 7 7V10H15V11H4C2 11 2 13 2 15C2 17 2 19 4 19H7V16C7 14 7 12 12 12C17 12 17 14 17 16V19H20C22 19 22 17 22 15C22 13 22 11 20 11H19V7C19 5 19 3 14 3H12Z"
          className="fill-green-500/20 stroke-green-500 dark:stroke-green-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="8"
          r="1"
          className="fill-green-500 dark:fill-green-400"
        />
        <circle
          cx="15"
          cy="16"
          r="1"
          className="fill-green-500 dark:fill-green-400"
        />
      </svg>
    ),
    'React': (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="3"
          className="fill-blue-500/20 stroke-blue-500 dark:stroke-blue-400"
          strokeWidth="2"
        />
        <path
          d="M12 3C16 3 19 7 19 12C19 17 16 21 12 21C8 21 5 17 5 12C5 7 8 3 12 3Z"
          className="stroke-blue-500 dark:stroke-blue-400"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M12 3C7 3 4 7 4 12C4 17 7 21 12 21C17 21 20 17 20 12C20 7 17 3 12 3Z"
          className="stroke-blue-500 dark:stroke-blue-400"
          strokeWidth="2"
          strokeDasharray="4 4"
          transform="rotate(60 12 12)"
        />
      </svg>
    ),
    'Cloud': (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M6 16C3.8 16 2 14.2 2 12C2 10 3.4 8.4 5.3 8.1C5.8 5.8 7.8 4 10.2 4C13 4 15.2 6.2 15.2 9C17.4 9 19.2 10.8 19.2 13C19.2 15.2 17.4 17 15.2 17H6Z"
          className="fill-purple-500/20 stroke-purple-500 dark:stroke-purple-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13L12 11L14 13"
          className="stroke-purple-500 dark:stroke-purple-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'Default': (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 15L8.5 18.5L5 15M12 15L15.5 18.5L19 15M12 15V3M12 15V21"
          className="stroke-gray-500 dark:stroke-gray-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  };

  // Определяем, какую иконку показывать на основе имени сертификата
  const getIconKey = (certName: string) => {
    if (certName.includes('AWS')) return 'AWS';
    if (certName.includes('Google')) return 'Google';
    if (certName.includes('Python')) return 'Python';
    if (certName.includes('React')) return 'React';
    if (certName.includes('Cloud')) return 'Cloud';
    return 'Default';
  };

  return icons[getIconKey(name)];
} 