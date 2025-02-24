"use client";

interface ScheduledReport {
  id: string;
  name: string;
  frequency: string;
  nextRun: string;
  recipients: string[];
}

export default function ScheduledReports() {
  const reports: ScheduledReport[] = [
    {
      id: "1",
      name: "Ежемесячный отчет по трудоустройству",
      frequency: "Ежемесячно",
      nextRun: "2024-03-01",
      recipients: ["hr@university.kz", "career@university.kz"]
    },
    {
      id: "2",
      name: "Еженедельная статистика стажировок",
      frequency: "Еженедельно",
      nextRun: "2024-02-19",
      recipients: ["internships@university.kz"]
    },
    {
      id: "3",
      name: "Квартальный анализ навыков",
      frequency: "Ежеквартально",
      nextRun: "2024-04-01",
      recipients: ["analytics@university.kz"]
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Запланированные отчеты</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Настроить →
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
                  {report.frequency}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Следующий запуск: {new Date(report.nextRun).toLocaleDateString()}
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Настроить</span>
                ⚙️
              </button>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-500">
                Получатели: {report.recipients.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 