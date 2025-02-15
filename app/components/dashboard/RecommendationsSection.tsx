export default function RecommendationsSection() {
  const recommendations = [
    {
      type: "vacancy",
      title: "Frontend Developer",
      company: "Kaspi Bank",
      match: 90,
      image: "/company-logos/kaspi.png",
      description: "Требуется разработчик со знанием React и TypeScript"
    },
    {
      type: "course",
      title: "Advanced TypeScript",
      provider: "Coursera",
      match: 85,
      image: "/course-logos/typescript.png",
      description: "Углубленный курс по TypeScript"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Рекомендации для вас</h2>
      
      <div className="grid gap-4">
        {recommendations.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gray-100 flex-shrink-0" />
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      {item.type === 'vacancy' ? item.company : item.provider}
                    </p>
                  </div>
                  <span className="text-green-600 text-sm font-medium">
                    {item.match}% совпадение
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {item.description}
                </p>
                
                <button className="mt-4 text-blue-600 text-sm hover:text-blue-700">
                  Подробнее →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 