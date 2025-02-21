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
          className={`  ${snapshot.isDragging ? "bg-gray-300" : "bg-white"}`}
        >

          <div className="border m-2 p-1 border-red-400/20 rounded">
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p>{task.category}</p>

          <div className="flex gap-4">
            <button className="btn btn-warning">Delete</button>
            <button className="btn btn-primary">Update</button>
          </div>
          </div>

        </div>
      )}
    </Draggable>
  );
}

export default Task;
