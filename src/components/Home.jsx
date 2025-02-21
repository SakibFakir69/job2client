import React, { useState } from "react";
import UseApi from "../api/UseApi";

function Home() {
  const useaxiosapi = UseApi();

  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "To_Do",
    Time: new Date().toISOString(),
  });
  const handelChnage = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(task);

    const res = await useaxiosapi.post("/tasks", task);
    console.log(res);

    if (res.statusText==="OK") {
      alert("Done");
      document.getElementById("my_modal_5").close();
    }
  };

  return (
    <div className=" -mt-3 p-4">

      {/* Open the modal using document.getElementById('ID').showModal() method */}
     
     <div className="flex w-full  items-center justify-center ">
     <button
        className="md:px-10 px-8 py-2 rounded shadow-xl
        border border-teal-200/20 bg-green-400 text-white text-xl"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Add <i class="ri-add-line"></i>
      </button>
     </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handelChnage}
            />

            <textarea
              type="text"
              name="description"
              value={task.description}
              onChange={handelChnage}
            />

            <select
              name="category"
              value={task.category}
              onChange={handelChnage}
            >
              <option value={"To_Do"}>To Do</option>
              <option value="In Progress">Processing</option>
              <option value={"Done"}>Done</option>

            </select>
          </div>

          <div className="modal-action">
            <form method="dialog" onSubmit={handelSubmit}>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Home;
