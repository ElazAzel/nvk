"use client";
import { useState } from 'react';
import AuthModal from '../auth/AuthModal';
import RoleSelectModal from '../auth/RoleSelectModal';

export default function CallToAction() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Начните строить свою карьеру прямо сейчас
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Присоединяйтесь к тысячам студентов, которые уже используют NAVYK для развития своей карьеры
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Зарегистрироваться
            </button>
            <button 
              onClick={() => setIsRoleModalOpen(true)}
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            >
              Связаться с нами
            </button>
          </div>
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