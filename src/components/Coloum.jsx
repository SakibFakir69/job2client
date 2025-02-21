import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

function Coloum({ title, tasks, id }) {
  return (
    <div className="p-4 bg-white border rounded-md shadow">
      <h3 className="text-lg font-semibold">{title}</h3>

      <Droppable droppableId={id.toString()} isDropDisabled={false}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="min-h-[200px] p-2 bg-gray-50"
          >
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <Task key={task._id} index={index} task={task} />
              ))
            ) : (
              <p className="text-gray-400">No tasks</p>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Coloum;
