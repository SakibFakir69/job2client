import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

function Coloum({ title, tasks, id }) {

    // here your api 


  return (
    <div>
      <p>{title}</p>

      <Droppable droppableId={id}>

        {(provided, snapshot) => (
          <div
            className="border p-2 border-black"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {/* Provide your tasks dynamically */}


       
              <Task task={{id: 123, title: "okasdklasnd" }} index={1} />

              {
                tasks.map((task,index)=><Task key={index} index={index} task={task}/> )

              }
     

            {/* Required placeholder */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Coloum;
