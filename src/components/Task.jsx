import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {
  return (
    <Draggable draggableId={task._id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`border p-2 ${snapshot.isDragging ? "bg-gray-300" : "bg-white"}`}
        >
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p>{task.category}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
