"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function UniversityControls() {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const Modal = ({ 
    isOpen, 
    onClose, 
    title, 
    children 
  }: { 
    isOpen: boolean; 
    onClose: () => void; 
    title: string;
    children: React.ReactNode;
  }) => (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="fixed top-[5vh] left-1/2 -translate-x-1/2 
              w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50
              p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between sticky top-0 bg-white dark:bg-gray-800 py-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg 
                  transition-colors text-gray-500 hover:text-gray-700 
                  dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  const EventForm = () => (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Название события
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Введите название события"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Дата и время
        </label>
        <input
          type="datetime-local"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Описание
        </label>
        <textarea
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-32"
          placeholder="Введите описание события"
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => setIsEventModalOpen(false)}
          className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 
            dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
            transition-colors"
        >
          Создать
        </button>
      </div>
    </form>
  );

  const NotificationForm = () => (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Получатели
        </label>
        <select
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value="all">Все студенты</option>
          <option value="active">Активные студенты</option>
          <option value="inactive">Неактивные студенты</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Тема
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Введите тему уведомления"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Сообщение
        </label>
        <textarea
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-32"
          placeholder="Введите текст уведомления"
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => setIsNotificationModalOpen(false)}
          className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 
            dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
            transition-colors"
        >
          Отправить
        </button>
      </div>
    </form>
  );

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-6">
        <motion.button
          onClick={() => setIsEventModalOpen(true)}
          className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 
            text-white rounded-lg hover:from-blue-500 hover:to-blue-600
            transition-all duration-200 shadow-md hover:shadow-lg
            flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-1 bg-white rounded-full opacity-30"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <svg 
              className="w-5 h-5 relative" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
          <span className="font-medium">Создать Ивент</span>
          <motion.span
            className="absolute inset-0 rounded-lg bg-white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
          />
        </motion.button>

        <motion.button
          onClick={() => setIsNotificationModalOpen(true)}
          className="group relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 
            text-white rounded-lg hover:from-indigo-500 hover:to-indigo-600
            transition-all duration-200 shadow-md hover:shadow-lg
            flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-1 bg-white rounded-full opacity-30"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.1
              }}
            />
            <svg 
              className="w-5 h-5 relative" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
              />
            </svg>
          </div>
          <span className="font-medium">Отправить уведомление</span>
          <motion.span
            className="absolute inset-0 rounded-lg bg-white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
          />
        </motion.button>
      </div>

      <Modal 
        isOpen={isEventModalOpen} 
        onClose={() => setIsEventModalOpen(false)}
        title="Создание события"
      >
        <EventForm />
      </Modal>

      <Modal 
        isOpen={isNotificationModalOpen} 
        onClose={() => setIsNotificationModalOpen(false)}
        title="Отправка уведомления"
      >
        <NotificationForm />
      </Modal>
    </>
  );
} 