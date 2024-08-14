import React, { useEffect } from "react";
import { useState } from "react";

function AddTask({ Back }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [TaskList, setTaskList] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const addTask = (newItem) => {
    let previousTaskList = getCookie("TaskList");
    let parsedPrevTaskList = JSON.parse(previousTaskList);
    if (!Array.isArray(parsedPrevTaskList)) {
      parsedPrevTaskList = [];
    }
    let updatedTaskList = [];
    if (previousTaskList == null) {
      updatedTaskList = [newItem];
    } else {
      updatedTaskList = [...parsedPrevTaskList, newItem];
    }
    setCookie("TaskList", updatedTaskList, 2);
    setTaskList(updatedTaskList);
    setIsAdded(true);
  };

  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const jsonValue = JSON.stringify(value);
    document.cookie = `${name}=${encodeURIComponent(
      jsonValue
    )}; expires=${expirationDate.toUTCString()}; path=/`;
    {
      {
        Back();
      }
    }
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(";").shift());
    }
    return null;
  };

  const HandleTask = () => {
    if (title && desc) {
      const newItem = { Title: title, Desc: desc };
      addTask(newItem);

      setTitle("");
      setDesc("");
    } else {
      alert("Both Task Name and description are required!");
      setIsAdded(false);
    }
  };

  return (
    <div className="absolute top-20  bg-black flex bg-opacity-50  z-40 w-full h-screen justify-center items-center">
      <form>
        <div>
          <div className="opacity-100 md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Task
              </label>
            </div>
            <div className="md:w-2/3 ">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Name"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block  text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Description
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                rows={5}
                cols={100}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Enter Description"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="">
              <button
                className="shadow w-52 bg-green-500 hover:bg-yellow-400 hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={HandleTask}
              >
                <h3>Add</h3>
              </button>
            </div>
          </div>
          {isAdded && (
            <div className="flex justify-center ">
              <p className="font-semibold size-28 text-green-500 w-96 pl-28">
                Task Added Succesfully
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddTask;
