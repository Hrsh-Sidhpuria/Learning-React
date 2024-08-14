import React, { useState } from "react";
import { motion } from "framer-motion";

import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function Cards({ task, reference, reload }) {
  const [title, setTitle] = useState(task.Title);

  //method to delete card
  const DeleteCard = (task) => {
    let name = "TaskList";
    let days = 3;

    // Retrieve the cookie value for 'TaskList'
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    let TaskList = decodeURIComponent(parts.pop().split(";").shift());
    let parsedTaskList = [];
    try {
      parsedTaskList = JSON.parse(TaskList);
    } catch (error) {
      console.error("Failed to parse task list from cookie:", error);
      return;
    }
    let tasksArray = Object.values(parsedTaskList);

    const newArray = tasksArray.filter((t) => t.Title != title);

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 2);
    const jsonValue = JSON.stringify(newArray);
    document.cookie = `${name}=${encodeURIComponent(
      jsonValue
    )}; expires=${expirationDate.toUTCString()}; path=/`;

    reload();
  };

  return (
    <div>
      <motion.div
        drag
        whileDrag={{ scale: 1.1 }}
        dragConstraints={reference}
        className=" relative w-56 h-64 rounded-[20px] bg-zinc-950 border border-zinc-300"
      >
        <div className="flex pt-4 px-4">
          <div className="Edits-option absolute bottom-0 left-0 right-0 overflow-hidden w-full h-12 border-t-2 border-gray-500">
            <div className="absolute p-2 right-2">
              <button title="Edit Task">
                <MdEdit color="green" size="1.3em" />
              </button>
            </div>
          </div>
          <div className="delete-option absolute top-4 right-3">
            <button title="Delete" onClick={DeleteCard}>
              <MdDeleteOutline color="red" size="1.3em" />
            </button>
          </div>
        </div>
        <div className=" px-3 py-3 justify-start items-center flex text-white">
          <h3 className="  text-xl font-semibold ">Title : {task.Title}</h3>
        </div>
        <div className=" px-3 flex text-white">
          <h5 className="text-sm font-semibold text-white break-words ">
            Description : {task.Desc}
          </h5>
          <p></p>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;
