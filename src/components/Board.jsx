import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Coloum from "./Coloum";
import { useQuery } from "@tanstack/react-query";

function Board() {
  const [todo, setTodo] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [done, setDone] = useState([]);

  // 🟢 Fetch Data from API


  useEffect(() => {
    fetch(`http://localhost:5000/tasks`)
      .then((res) => res.json())
      .then((json) => {
        console.log("API Data:", json);
        setTodo(json.filter((task) => task.category === "To_Do"));
        setProcessing(json.filter((task) => task.category === "In Progress"));
        setDone(json.filter((task) => task.category === "Done"));
      })
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);


  // 🟢 Helper Functions
  function getTaskById(id, array) {
    return array.find((item) => item._id === id);
  }

  function removeTaskById(id, array) {
    return array.filter((item) => item._id !== id);
  }

//   drage ned here function
  const handleDragEnd = (result) => {

    const { source, destination, draggableId } = result;

    if (!destination) return;

    let task = getTaskById(draggableId, [...todo, ...processing, ...done]);

    if (!task) return; // If no task is found, do nothing
    const newCategory =
    destination.droppableId === "1" ? "To_Do" :
    destination.droppableId === "2" ? "In Progress" : "Done";

    // Remove task from source column
    if (source.droppableId === "1") setTodo(removeTaskById(draggableId, todo));
    if (source.droppableId === "2") setProcessing(removeTaskById(draggableId, processing));
    if (source.droppableId === "3") setDone(removeTaskById(draggableId, done));

    // Update task category
    let updatedTask = { ...task };
    if (destination.droppableId === "1") {
      setTodo([{ ...updatedTask, category: "To-Do" }, ...todo]);

    } else if (destination.droppableId === "2") {
      setProcessing([{ ...updatedTask, category: "Processing" }, ...processing]);
    } else if (destination.droppableId === "3") {
      setDone([{ ...updatedTask, category: "Done" }, ...done]);
    }
    console.log(draggableId,"id");
    console.log(updatedTask.category,"category");

    // 
    // 
    fetch(`http://localhost:5000/tasks/${draggableId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: newCategory }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Task updated:", data))
      .catch((err) => console.error("Error updating task:", err));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2>Task Board</h2>
      <div className="grid grid-cols-3 gap-4 border p-4">
        {/* 🟢 Proper Column Assignments */}
        <Coloum title="To-Do" tasks={todo} id="1" />
        <Coloum title="Processing" tasks={processing} id="2" />
        <Coloum title="Done" tasks={done} id="3" />
      </div>
    </DragDropContext>
  );
}

export default Board;
