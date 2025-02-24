"use client";

interface Partner {
  name: string;
  type: string;
  programs: number;
  students: number;
  logo: string;
  status: 'active' | 'pending' | 'completed';
}

export default function ActivePartnerships() {
  const partners: Partner[] = [
    {
      name: "Kaspi.kz",
      type: "Стажировка + Трудоустройство",
      programs: 3,
      students: 25,
      logo: "/logos/kaspi.png",
      status: 'active'
    },
    {
      name: "BTS Digital",
      type: "Менторская программа",
      programs: 2,
      students: 15,
      logo: "/logos/bts.png",
      status: 'active'
    },
    {
      name: "Kolesa Group",
      type: "Стажировка",
      programs: 1,
      students: 10,
      logo: "/logos/kolesa.png",
      status: 'active'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Активные партнеры</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Смотреть все →
        </button>
      </div>

      <div className="space-y-4">
        {partners.map((partner, index) => (
          <div
            key={index}
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
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  Активный
                </span>
              </div>
              <div className="mt-2 flex gap-4 text-sm text-gray-500">
                <span>{partner.programs} программ</span>
                <span>{partner.students} студентов</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 