"use client";

export default function SalaryAnalytics() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Анализ заработных плат</h2>

      <div className="space-y-6">
        {/* Диапазоны зарплат */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">150-250k ₸</span>
            <span className="text-sm text-gray-600">30%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: "30%" }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">250-350k ₸</span>
            <span className="text-sm text-gray-600">45%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: "45%" }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">350-500k ₸</span>
            <span className="text-sm text-gray-600">20%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: "20%" }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">500k+ ₸</span>
            <span className="text-sm text-gray-600">5%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: "5%" }}
            />
          </div>
        </div>

        {/* Сравнительная информация */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="font-medium mb-2">Сравнение со средним по рынку</h3>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>Выпускники: 320,000 ₸</p>
            <p>Рынок: 280,000 ₸</p>
            <p className="text-green-600 mt-1">+14% выше рынка</p>
          </div>
        </div>
      </div>
    </div>
  );
} 