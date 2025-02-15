"use client";

import { useState } from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';
import { useThemeStyles } from '@/app/hooks/useThemeStyles';

interface UniversityRequestPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UniversityRequestPopup({ isOpen, onClose }: UniversityRequestPopupProps) {
  const { t } = useTranslation();
  const { getColorClass, getVariantClass } = useThemeStyles();
  const [formData, setFormData] = useState({
    universityName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50">
        <div className={`${getVariantClass('card', 'primary')} mx-4 p-6 rounded-xl`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-2xl font-bold ${getColorClass('text.primary')}`}>
              {t('university.request.title')}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="md:col-span-2">
              <h3 className={`text-lg font-medium mb-2 ${getColorClass('text.primary')}`}>
                {t('university.request.contactInfo')}
              </h3>
              <div className="space-y-2">
                <p className={getColorClass('text.secondary')}>
                  Email: partnership@navyk.edu
                </p>
                <p className={getColorClass('text.secondary')}>
                  Tel: +7 (777) 123-45-67
                </p>
              </div>
            </div>

            <form className="space-y-4 md:col-span-2">
              <div>
                <label className={`block text-sm font-medium mb-1 ${getColorClass('text.secondary')}`}>
                  {t('university.request.universityName')}
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg border ${getColorClass('border.primary')} bg-transparent`}
                  value={formData.universityName}
                  onChange={(e) => setFormData({...formData, universityName: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${getColorClass('text.secondary')}`}>
                    {t('university.request.contactPerson')}
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${getColorClass('border.primary')} bg-transparent`}
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-1 ${getColorClass('text.secondary')}`}>
                    {t('university.request.email')}
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg border ${getColorClass('border.primary')} bg-transparent`}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${getColorClass('text.secondary')}`}>
                  {t('university.request.message')}
                </label>
                <textarea
                  className={`w-full px-4 py-2 rounded-lg border ${getColorClass('border.primary')} bg-transparent`}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2 ${getVariantClass('button', 'primary')} rounded-lg`}
              >
                {t('university.request.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
} 