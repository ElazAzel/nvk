"use client";

interface Partner {
  name: string;
  type: string;
  programs: number;
  logo: string;
}

export default function PartnershipPrograms() {
  const partners: Partner[] = [
    {
      name: "Kaspi.kz",
      type: "Стажировка + Трудоустройство",
      programs: 3,
      logo: "/logos/kaspi.png"
    },
    {
      name: "BTS Digital",
      type: "Менторская программа",
      programs: 2,
      logo: "/logos/bts.png"
    },
    {
      name: "Kolesa Group",
      type: "Стажировка",
      programs: 1,
      logo: "/logos/kolesa.png"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold">Партнерские программы</h2>
        <button className="text-blue-600">Все программы →</button>
      </div>

      <div className="space-y-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg" />
            <div className="flex-1">
              <h3 className="font-medium">{partner.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {partner.type}
              </p>
              <p className="text-sm text-gray-500">
                {partner.programs} активных программ
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-medium mb-2">Общая статистика</h3>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <p>• 15 активных партнеров</p>
          <p>• 25 программ стажировок</p>
          <p>• 150+ студентов участвуют</p>
        </div>
      </div>
    </div>
  );
} 