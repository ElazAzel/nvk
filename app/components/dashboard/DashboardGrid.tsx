"use client";

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

export function DashboardGrid() {
  const [widgets, setWidgets] = useState(defaultWidgets);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Панель управления</h1>
        <div className="flex gap-3">
          <AddWidgetButton />
          <LayoutSelector />
          <ExportButton />
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="dashboard">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {widgets.map((widget, index) => (
                <DraggableWidget
                  key={widget.id}
                  widget={widget}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
} 