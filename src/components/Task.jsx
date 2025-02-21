import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task({ task, index }) {

    if(!task || !task._id)
    {
        return null;
    }
  return (
    <Draggable draggableId={task._id.toString()}
     index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`border p-2 ${snapshot.isDragging ? "bg-gray-300" : "bg-white"}`}
        >
          <span className="text-xl font-semibold p-2">
            <small>{task.id}</small>
          </span>
          <p>{task.title}</p>
          <button className="border">Delete</button>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
