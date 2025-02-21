import React from "react";
import { Draggable } from "react-beautiful-dnd";
import UseApi from "../api/UseApi";
import { toast } from "react-toastify";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function Task({ task, index }) {
  const useaxiosapi = UseApi();
  const queryClient = useQueryClient();

  const deleteadd = (id) => {
    useaxiosapi
      .delete(`/tasks/${id}`)
      .then((res) => {
        toast.success("Delted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMutaion = useMutation({
    mutationFn: (id)=> useaxiosapi.delete(`/tasks/${id}`),

    onSuccess:()=>{
      toast.success("Deleted")
      queryClient.invalidateQueries(['tasks'])
      
    },
    onError: (error)=>{
      toast.error(error.messsage)
    }
  })


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
              <button
                className="btn btn-warning"
                onClick={() => deleteMutaion.mutate(task._id)}
              >
                Delete
              </button>
              <button className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
