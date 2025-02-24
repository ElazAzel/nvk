"use client";

interface Report {
  id: string;
  name: string;
  type: string;
  date: string;
  status: 'completed' | 'processing' | 'failed';
  size: string;
}

export default function RecentReports() {
  const reports: Report[] = [
    {
      id: "1",
      name: "Отчет по трудоустройству выпускников",
      type: "Employment",
      date: "2024-02-15",
      status: 'completed',
      size: "2.5 MB"
    },
    {
      id: "2",
      name: "Анализ партнерских программ",
      type: "Partnerships",
      date: "2024-02-14",
      status: 'completed',
      size: "1.8 MB"
    },
    {
      id: "3",
      name: "Статистика по навыкам",
      type: "Skills",
      date: "2024-02-13",
      status: 'processing',
      size: "pending"
    }
  ];

  const getStatusBadge = (status: Report['status']) => {
    const styles = {
      completed: 'text-green-700 bg-green-100',
      processing: 'text-blue-700 bg-blue-100',
      failed: 'text-red-700 bg-red-100'
    };

    const labels = {
      completed: 'Готов',
      processing: 'Обработка',
      failed: 'Ошибка'
    };

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Недавние отчеты</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Все отчеты →
        </button>
      </div>

      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{report.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {report.type}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(report.date).toLocaleDateString()}
                </p>
              </div>
              {getStatusBadge(report.status)}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">{report.size}</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700">
                  Скачать
                </button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
                  Поделиться
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 