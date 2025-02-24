"use client";

import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface UniversityRankingProps {
  data: {
    employmentRank: number;
    totalUniversities: number;
    eventParticipationRank: number;
    comparisonData: {
      metric: string;
      value: number;
      averageValue: number;
    }[];
  };
}

export function UniversityRanking({ data }: UniversityRankingProps) {
  const { getColorClass, getVariantClass } = useThemeStyles();

  return (
    <div className="space-y-6">
      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Рейтинг трудоустройства
        </h3>
        <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
          {data.employmentRank} из {data.totalUniversities}
        </p>
        <p className={`text-sm ${getColorClass('text.secondary')}`}>
          Ваш вуз по трудоустройству
        </p>
      </div>

      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Рейтинг по посещению мероприятий
        </h3>
        <p className={`text-3xl font-bold ${getColorClass('text.primary')}`}>
          {data.eventParticipationRank} из {data.totalUniversities}
        </p>
        <p className={`text-sm ${getColorClass('text.secondary')}`}>
          Ваш вуз по посещению мероприятий
        </p>
      </div>

      <div className={`${getVariantClass('card', 'primary')} p-6 rounded-lg`}>
        <h3 className={`text-lg font-medium mb-4 ${getColorClass('text.primary')}`}>
          Сравнительная аналитика
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.comparisonData.map((item, index) => (
            <div key={index} className={`${getVariantClass('card', 'secondary')} p-4 rounded-lg`}>
              <h4 className={`text-md font-medium ${getColorClass('text.primary')}`}>
                {item.metric}
              </h4>
              <p className={`text-xl font-bold ${getColorClass('text.primary')}`}>
                {item.value} (среднее: {item.averageValue})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 