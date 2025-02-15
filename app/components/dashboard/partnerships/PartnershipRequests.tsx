"use client";

interface Request {
  companyName: string;
  type: string;
  date: string;
  status: 'pending' | 'reviewing' | 'approved' | 'rejected';
}

export default function PartnershipRequests() {
  const requests: Request[] = [
    {
      companyName: "TechnoLab",
      type: "Стажировка",
      date: "2024-02-15",
      status: 'pending'
    },
    {
      companyName: "FinTech Solutions",
      type: "Менторская программа",
      date: "2024-02-14",
      status: 'reviewing'
    },
    {
      companyName: "Digital Agency",
      type: "Трудоустройство",
      date: "2024-02-13",
      status: 'approved'
    }
  ];

  const getStatusBadge = (status: Request['status']) => {
    const styles = {
      pending: 'text-yellow-700 bg-yellow-100',
      reviewing: 'text-blue-700 bg-blue-100',
      approved: 'text-green-700 bg-green-100',
      rejected: 'text-red-700 bg-red-100'
    };

    const labels = {
      pending: 'Ожидает',
      reviewing: 'На рассмотрении',
      approved: 'Одобрено',
      rejected: 'Отклонено'
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
        <h2 className="text-xl font-bold">Заявки на партнерство</h2>
        <button className="text-blue-600 hover:text-blue-700">
          Все заявки →
        </button>
      </div>

      <div className="space-y-4">
        {requests.map((request, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{request.companyName}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {request.type}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Получено: {new Date(request.date).toLocaleDateString()}
                </p>
              </div>
              {getStatusBadge(request.status)}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Рассмотреть
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 border rounded-lg hover:bg-gray-50">
                Отклонить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 