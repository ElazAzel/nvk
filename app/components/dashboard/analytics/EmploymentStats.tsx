"use client";

export default function EmploymentStats() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Статистика трудоустройства</h2>
      
      <div className="space-y-6">
        {/* По специальности */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">По специальности</span>
            <span className="text-sm text-gray-600">75%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{ width: "75%" }}
            />
          </div>
        </div>

        {/* Не по специальности */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Не по специальности</span>
            <span className="text-sm text-gray-600">15%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-yellow-500 rounded-full"
              style={{ width: "15%" }}
            />
          </div>
        </div>

        {/* Не трудоустроены */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Не трудоустроены</span>
            <span className="text-sm text-gray-600">10%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-red-500 rounded-full"
              style={{ width: "10%" }}
            />
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="font-medium mb-2">Время до трудоустройства</h3>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>До выпуска: 35%</p>
            <p>1-3 месяца: 45%</p>
            <p>3-6 месяцев: 15%</p>
            <p>Более 6 месяцев: 5%</p>
          </div>
        </div>
      </div>
    </div>
  );
} 