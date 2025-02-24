"use client";
import { useState } from 'react';
import AuthModal from '../auth/AuthModal';
import RoleSelectModal from '../auth/RoleSelectModal';

export default function Hero() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          NAVYK - Построй карьеру мечты
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Платформа, объединяющая студентов, университеты и работодателей для создания успешного будущего
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => setIsAuthModalOpen(true)}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Начать бесплатно
          </button>
          <button 
            onClick={() => setIsRoleModalOpen(true)}
            className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
          >
            Узнать больше
          </button>
        </div>
      </section>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      
      <RoleSelectModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
      />
    </>
  );
} 