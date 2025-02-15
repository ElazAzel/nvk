"use client";

interface CareerData {
  field: string;
  employed: number;
  avgSalary: number;
  satisfaction: number;
}

export default function CareerOutcomes() {
  const data: CareerData[] = [
    {
      field: "IT и разработка",
      employed: 92,
      avgSalary: 850000,
      satisfaction: 4.5
    },
    {
      field: "Финансы и аудит",
      employed: 88,
      avgSalary: 650000,
      satisfaction: 4.2
    },
    {
      field: "Маркетинг",
      employed: 85,
      avgSalary: 550000,
      satisfaction: 4.3
    },
    {
      field: "Инженерия",
      employed: 90,
      avgSalary: 750000,
      satisfaction: 4.4
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Карьерные результаты</h2>
        <select className="px-3 py-1 border rounded-lg text-sm">
          <option>За год</option>
          <option>За 3 года</option>
          <option>За 5 лет</option>
        </select>
      </div>

      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium">{item.field}</span>
              <div className="text-sm text-gray-600">
                <span>Трудоустройство: {item.employed}%</span>
                <span className="mx-2">|</span>
                <span>Ср. ЗП: {item.avgSalary.toLocaleString()} ₸</span>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  item.satisfaction >= 4.5
                    ? 'bg-green-500'
                    : item.satisfaction >= 4.0
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${(item.satisfaction / 5) * 100}%` }}
              />
            </div>
            <div className="mt-1 text-xs text-gray-500 text-right">
              Удовлетворенность: {item.satisfaction} / 5
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 