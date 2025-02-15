"use client";
import { useState } from 'react';
import CertificateModal from './CertificateModal';

export default function ProfileEducation() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  
  const education = {
    university: "Алматы Университет",
    faculty: "Факультет информационных технологий",
    specialization: "Информационные системы",
    degree: "Бакалавр",
    year: "3 курс",
    gpa: "3.8",
    courses: [
      {
        name: "React для начинающих",
        provider: "Tech Academy",
        date: "Январь 2024",
        certificate: "cert-123"
      },
      {
        name: "JavaScript Advanced",
        provider: "Web School",
        date: "Декабрь 2023",
        certificate: "cert-456"
      }
    ]
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Образование</h2>

        <div className="space-y-6">
          {/* University education */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{education.university}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {education.faculty}
                </p>
                <p className="text-sm text-gray-500">
                  {education.specialization} • {education.degree}
                </p>
              </div>
              <div className="text-right">
                <div className="font-medium">{education.year}</div>
                <div className="text-sm text-gray-500">GPA: {education.gpa}</div>
              </div>
            </div>
          </div>

          {/* Additional courses */}
          <div>
            <h3 className="font-semibold mb-4">Дополнительные курсы</h3>
            <div className="space-y-4">
              {education.courses.map((course, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{course.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {course.provider}
                    </div>
                    <div className="text-sm text-gray-500">{course.date}</div>
                  </div>
                  <button
                    className="text-blue-600 hover:text-blue-700"
                    onClick={() => setSelectedCertificate(course)}
                  >
                    Сертификат →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          certificate={selectedCertificate}
        />
      )}
    </>
  );
} 