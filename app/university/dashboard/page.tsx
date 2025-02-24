"use client";

import { useState } from 'react';
import { 
  DragDropContext, 
  Droppable, 
  Draggable, 
  DropResult,
  DroppableProvided,
  DraggableProvided,
  DraggableStateSnapshot
} from 'react-beautiful-dnd';
import AnalyticsSummary from "@/app/components/university/AnalyticsSummary";
import UniversityNotifications from "@/app/components/university/UniversityNotifications";
import QuickLinks from "@/app/components/university/QuickLinks";
import UpcomingPrograms from "@/app/components/dashboard/partnerships/UpcomingPrograms";

// Типы для виджетов
interface Widget {
  id: string;
  type: 'analytics' | 'notifications' | 'quickLinks' | 'upcomingPrograms';
  title: string;
}

// Начальное состояние виджетов
const defaultWidgets: Widget[] = [
  { id: 'analytics', type: 'analytics', title: 'Аналитика' },
  { id: 'notifications', type: 'notifications', title: 'Уведомления' },
  { id: 'quickLinks', type: 'quickLinks', title: 'Быстрые ссылки' },
  { id: 'upcomingPrograms', type: 'upcomingPrograms', title: 'Предстоящие программы' },
];

export default function DashboardPage() {
  const [widgets, setWidgets] = useState<Widget[]>(defaultWidgets);

  // Обработчик перетаскивания
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setWidgets(items);
  };

  // Рендер компонента виджета
  const renderWidget = (widget: Widget) => {
    switch (widget.type) {
      case 'analytics':
        return <AnalyticsSummary />;
      case 'notifications':
        return <UniversityNotifications />;
      case 'quickLinks':
        return <QuickLinks />;
      case 'upcomingPrograms':
        return <UpcomingPrograms />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Панель управления</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
            Добавить виджет
          </button>
          <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            Настроить
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="dashboard" isDropDisabled={false}>
          {(provided: DroppableProvided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            >
              {widgets.map((widget, index) => (
                <Draggable 
                  key={widget.id} 
                  draggableId={widget.id} 
                  index={index}
                  isDragDisabled={false}
                >
                  {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`
                        bg-white dark:bg-gray-800 rounded-lg shadow-sm 
                        transition-shadow duration-200
                        ${snapshot.isDragging ? 'shadow-lg' : 'hover:shadow-md'}
                      `}
                    >
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <h2 className="text-lg font-medium">{widget.title}</h2>
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        {renderWidget(widget)}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
} 