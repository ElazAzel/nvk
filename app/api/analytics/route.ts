import { NextResponse } from 'next/server';

// Моковые данные для аналитики
const mockAnalyticsData = {
  // Общие показатели
  overview: [
    { title: 'Успеваемость', value: '78%', change: '+5%', trend: 'up' as const },
    { title: 'Посещаемость', value: '85%', change: '+3%', trend: 'up' as const },
    { title: 'Отчисления', value: '2.5%', change: '-0.5%', trend: 'down' as const },
    { title: 'Трудоустройство', value: '92%', change: '+7%', trend: 'up' as const }
  ],

  // Успеваемость
  academicPerformance: {
    averageGrades: [
      { period: 'Сен', value: 4.2 },
      { period: 'Окт', value: 4.1 },
      { period: 'Ноя', value: 4.3 },
      { period: 'Дек', value: 4.0 },
      { period: 'Янв', value: 4.4 },
      { period: 'Фев', value: 4.2 }
    ],
    byFaculty: [
      { faculty: 'IT', grade: 4.3 },
      { faculty: 'Экономика', grade: 4.1 },
      { faculty: 'Инженерия', grade: 4.0 },
      { faculty: 'Медицина', grade: 4.5 },
      { faculty: 'Педагогика', grade: 4.2 }
    ]
  },

  // Демография
  demographics: {
    gender: [
      { category: 'Мужчины', count: 5800 },
      { category: 'Женщины', count: 6200 }
    ],
    ageGroups: [
      { group: '17-19', count: 4200 },
      { group: '20-22', count: 5100 },
      { group: '23-25', count: 2100 },
      { group: '26+', count: 600 }
    ],
    regions: [
      { region: 'Москва', count: 3500 },
      { region: 'МО', count: 2800 },
      { region: 'СПб', count: 1500 },
      { region: 'Другие', count: 4200 }
    ]
  },

  // Мероприятия
  events: {
    monthlyParticipation: [
      { month: 'Сен', count: 850 },
      { month: 'Окт', count: 920 },
      { month: 'Ноя', count: 880 },
      { month: 'Дек', count: 760 },
      { month: 'Янв', count: 890 },
      { month: 'Фев', count: 950 }
    ],
    byType: [
      { type: 'Вебинары', count: 2800 },
      { type: 'Конференции', count: 1500 },
      { type: 'Мастер-классы', count: 1900 },
      { type: 'Хакатоны', count: 800 },
      { type: 'Другое', count: 600 }
    ]
  },

  // Курсы
  courses: {
    enrollment: {
      paid: 3500,
      free: 8200
    },
    byCategory: [
      { category: 'Программирование', count: 2800 },
      { category: 'Бизнес', count: 2100 },
      { category: 'Дизайн', count: 1800 },
      { category: 'Маркетинг', count: 1500 },
      { category: 'Другое', count: 3500 }
    ],
    completionRate: 78
  },

  // Трудоустройство
  employment: {
    stages: {
      applications: 1200,
      internships: 450,
      employed: 380
    },
    byIndustry: [
      { industry: 'IT', count: 150 },
      { industry: 'Финансы', count: 85 },
      { industry: 'Маркетинг', count: 65 },
      { industry: 'Консалтинг', count: 45 },
      { industry: 'Другое', count: 35 }
    ],
    topCompanies: [
      { company: 'Яндекс', count: 45 },
      { company: 'Сбер', count: 40 },
      { company: 'VK', count: 35 },
      { company: 'МТС', count: 30 },
      { company: 'Тинькофф', count: 25 }
    ]
  },

  // Рейтинг
  ranking: {
    studentActivity: {
      position: 5,
      totalUniversities: 100,
      score: 85
    },
    comparison: [
      { metric: 'Активность', value: 85, average: 70 },
      { metric: 'Трудоустройство', value: 82, average: 65 },
      { metric: 'Успеваемость', value: 88, average: 75 }
    ]
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // Используем period или удаляем
  const period = searchParams.get('period') || 'year';
  
  // Используем period для фильтрации данных
  const filteredData = period === 'year' ? mockAnalyticsData : {
    ...mockAnalyticsData,
    // Фильтруем данные по периоду
  };

  await new Promise(resolve => setTimeout(resolve, 1000));
  return NextResponse.json(filteredData);
} 