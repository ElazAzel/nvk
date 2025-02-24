"use client";

interface EnrollmentData {
  year: string;
  total: number;
  international: number;
  transfer: number;
}

export default function EnrollmentTrends() {
  const data: EnrollmentData[] = [
    {
      year: "2020",
      total: 1200,
      international: 180,
      transfer: 85
    },
    {
      year: "2021",
      total: 1350,
      international: 220,
      transfer: 95
    },
    {
      year: "2022",
      total: 1450,
      international: 250,
      transfer: 110
    },
    {
      year: "2023",
      total: 1580,
      international: 285,
      transfer: 125
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Тренды поступления</h2>
        <select className="px-3 py-1 border rounded-lg text-sm">
          <option>За 4 года</option>
          <option>За 6 лет</option>
          <option>За 8 лет</option>
        </select>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-medium">{item.year}</span>
              <div className="text-sm text-gray-600">
                <span>Всего: {item.total}</span>
                <span className="mx-2">|</span>
                <span>Иностранные: {item.international}</span>
                <span className="mx-2">|</span>
                <span>Переводы: {item.transfer}</span>
              </div>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-blue-600"
                style={{
                  width: `${(item.international / item.total) * 100}%`
                }}
              />
              <div
                className="h-full bg-green-500"
                style={{
                  width: `${(item.transfer / item.total) * 100}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 