export default function Statistics() {
  const stats = [
    {
      number: "10K+",
      label: "Студентов"
    },
    {
      number: "50+",
      label: "Университетов"
    },
    {
      number: "200+",
      label: "Компаний"
    },
    {
      number: "85%",
      label: "Трудоустройство"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">NAVYK в цифрах</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 