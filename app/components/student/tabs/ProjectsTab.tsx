"use client";

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  StarIcon,
  EyeIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Учебный проект интернет-магазина с использованием React и Node.js',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'in-progress',
    completion: 75,
    collaborators: 3,
    link: '#',
    preview: '/projects/ecommerce.jpg'
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Персональный менеджер задач с API и мобильным приложением',
    technologies: ['Python', 'FastAPI', 'React Native'],
    status: 'completed',
    completion: 100,
    collaborators: 2,
    link: '#',
    preview: '/projects/taskmanager.jpg'
  }
];

export function ProjectsTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Мои проекты
        </h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Новый проект
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="relative h-48">
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <div className="flex items-center mt-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs bg-white/20 text-white px-2 py-1 rounded-full mr-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-blue-500">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-500">
                    <StarIcon className="w-5 h-5" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-500">
                    <ShareIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {project.completion}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 