"use client";

import { useEffect, useState } from 'react';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';
import Image from 'next/image';

const certificates = [
  {
    id: 1,
    name: 'React Advanced',
    issuer: 'Coursera',
    date: '2024-01-15',
    image: '/certificates/react.png',
    verified: true
  },
  {
    id: 2,
    name: 'Machine Learning Fundamentals',
    issuer: 'Stepik',
    date: '2023-11-20',
    image: '/certificates/ml.png',
    verified: true
  },
  {
    id: 3,
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon',
    date: '2023-09-10',
    image: '/certificates/aws.png',
    verified: true
  }
];

export function Certificates() {
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatDate = (dateString: string) => {
    if (!isClient) return dateString;
    return new Date(dateString).toLocaleDateString('ru', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className={`${getVariantClass('card', 'primary')} p-4 rounded-lg hover:shadow-lg transition-shadow`}
        >
          <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={cert.image}
              alt={cert.name}
              width={192}
              height={192}
              layout="responsive"
            />
            {cert.verified && (
              <div className="absolute top-2 right-2 bg-green-100 dark:bg-green-900 p-1 rounded-full">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <h3 className={`font-medium ${getColorClass('text.primary')}`}>
              {cert.name}
            </h3>
            <div className="flex justify-between items-center">
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                {cert.issuer}
              </p>
              <p className={`text-sm ${getColorClass('text.secondary')}`}>
                {formatDate(cert.date)}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className={`flex-1 py-2 ${getVariantClass('button', 'outline')} rounded-lg text-sm`}
              >
                Просмотреть
              </button>
              <button
                type="button"
                className={`flex-1 py-2 ${getVariantClass('button', 'primary')} rounded-lg text-sm`}
              >
                Поделиться
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 