"use client";

interface Partner {
  id: string;
  name: string;
  type: string;
  students: number;
  programs: number;
  logo: string;
  rating: number;
  status: 'active' | 'paused' | 'ended';
}

export default function ActivePartnerships() {
  const partners: Partner[] = [
    {
      id: "1",
      name: "Kaspi.kz",
      type: "Стажировка + Трудоустройство",
      students: 45,
      programs: 3,
      logo: "/logos/kaspi.png",
      rating: 4.8,
      status: 'active'
    },
    {
      id: "2",
      name: "BTS Digital",
      type: "Менторская программа",
      students: 28,
      programs: 2,
      logo: "/logos/bts.png",
      rating: 4.6,
      status: 'active'
    },
    {
      id: "3",
      name: "Kolesa Group",
      type: "Стажировка",
      students: 32,
      programs: 1,
      logo: "/logos/kolesa.png",
      rating: 4.7,
      status: 'active'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Активные партнеры</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Все партнеры →
        </button>
      </div>

      <div className="space-y-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Здесь будет логотип */}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{partner.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {partner.type}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">{partner.rating}</span>
                </div>
              </div>
              <div className="mt-2 flex gap-4 text-sm text-gray-500">
                <span>{partner.students} студентов</span>
                <span>{partner.programs} программ</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 