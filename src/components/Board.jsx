import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Coloum";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function Board() {
  const queryClient = useQueryClient();
  const [columns, setColumns] = useState({
    "1": { title: "To_Do", tasks: [] },
    "2": { title: "In Progress", tasks: [] },
    "3": { title: "Done", tasks: [] },
  });

  // 🟢 Fetch tasks from the database
  const { data: tasks = [], isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/tasks");
      return res.json();
    },
    onSuccess: (tasks) => {
      // 🟢 Categorize tasks into correct columns
      setColumns({
        "1": { title: "To_Do", tasks: tasks.filter((task) => task.category === "To_Do") },
        "2": { title: "In Progress", tasks: tasks.filter((task) => task.category === "In Progress") },
        "3": { title: "Done", tasks: tasks.filter((task) => task.category === "Done") },
      });
    },
  });

  // 🟢 Mutation to update task category in the database
  const updateTaskMutation = useMutation({
    mutationFn: async ({ id, category, newIndex }) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, order: newIndex }),
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]); // Refresh tasks after update
    },
  });

  // 🟢 Handle Drag & Drop
  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return; // If dropped outside, do nothing

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    if (!sourceColumn || !destColumn) return;

    const sourceTasks = Array.from(sourceColumn.tasks);
    const destTasks = Array.from(destColumn.tasks);

    const [movedTask] = sourceTasks.splice(source.index, 1); // Remove task from source

    if (source.droppableId === destination.droppableId) {
      // 🟢 If moved within the same column, reorder
      sourceTasks.splice(destination.index, 0, movedTask);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
      });
    } else {
      // 🟢 If moved to a different column, change category
      movedTask.category = destColumn.title;
      destTasks.splice(destination.index, 0, movedTask);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
        [destination.droppableId]: { ...destColumn, tasks: destTasks },
      });

      // 🟢 Update category & order in the database
      updateTaskMutation.mutate({
        id: draggableId,
        category: destColumn.title,
        newIndex: destination.index,
      });
    }
  };

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>Error fetching tasks</p>;

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2>Task Board</h2>
      <div className="grid grid-cols-3 gap-4 border p-4">
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Column title={column.title} tasks={column.tasks} id={columnId} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default Board;
