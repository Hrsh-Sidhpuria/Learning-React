import { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { MdDescription } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import { IoMdAdd } from "react-icons/io";

import AddTask from "./AddTask";

function CardsHolder() {
  const ref = useRef(null);
  const [toAdd, setToAdd] = useState(false);
  const [reRender, setReRender] = useState(false);
  const [empty, setempty] = useState(false);

  const [TaskList, setTaskList] = useState([]);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(";").shift());
    }
    return "[]";
  };

  const CloseAddTask = () => {
    setToAdd(!toAdd);
  };
  const Reload = () => {
    setReRender(!reRender);
  };

  useEffect(() => {
    const storedTaskList = getCookie("TaskList");

    try {
      const parsedTaskList = JSON.parse(storedTaskList);
      if (Array.isArray(parsedTaskList)) {
        setTaskList(parsedTaskList);
      } else {
        console.error("TaskList cookie does not contain a valid array");
        setTaskList([]);
      }
    } catch (error) {
      console.error("Failed to parse TaskList cookie", error);
      setTaskList([]);
    }
  }, [toAdd, reRender]);

  return (
    <>
      <div>
        <div
          ref={ref}
          className="fixed top-0 left-0 z-10 w-full h-screen pt-20 flex gap-5 p-10 grid grid-cols-5 gap-5"
        >
          <div className="absolute z-50 rounded-2xl top-5 right-10 bg-green-500 flex w-14 h-14 justify-center items-center">
            <button
              className="hover:bg-black rounded-2xl "
              title="Add New Task"
              onClick={() => setToAdd(!toAdd)}
            >
              {!toAdd && <IoMdAdd size="4em" color="white" />}
              {toAdd && <RxCross2 size="4em" color="white" />}
            </button>
          </div>

          {TaskList.map((Task, index) => {
            return (
              <Cards task={Task} reference={ref} key={index} reload={Reload} />
            );
          })}
        </div>
      </div>

      {toAdd && <AddTask Back={CloseAddTask} />}
    </>
  );
}

export default CardsHolder;
