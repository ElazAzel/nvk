"use client";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Приветствие */}
        <div className="py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl">Привет, Александр! 👋</h1>
              <div className="mt-2 text-gray-400">
                <div className="w-96 bg-gray-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }} />
                </div>
                <p className="mt-2 text-sm">Вы выполнили 5 из 10 задач на этой неделе</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Посмотреть все задачи
            </button>
          </div>
        </div>

        {/* Карточки статистики */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400">Следующее занятие</h3>
          <div className="mt-2">
            <div className="text-2xl font-bold">10:00</div>
            <div className="text-gray-400">Математический анализ</div>
            <div className="text-gray-500">Аудитория 305</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400">Задания</h3>
          <div className="mt-2">
            <div className="text-2xl font-bold">5</div>
            <div className="text-gray-400">Активных заданий</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400">Уведомления</h3>
          <div className="mt-2">
            <div className="text-2xl font-bold">3</div>
            <div className="text-gray-400">Новых уведомления</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400">Достижения</h3>
          <div className="mt-2">
            <div className="text-2xl font-bold">8/12</div>
            <div className="text-gray-400">Получено наград</div>
          </div>
        </div>
      </div>

      {/* Остальной контент дашборда */}
    </div>
  );
} 