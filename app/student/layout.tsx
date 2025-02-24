export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <main className="py-6">
          {children}
        </main>
      </div>
    </div>
  );
} 