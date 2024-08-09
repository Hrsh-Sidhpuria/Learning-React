import React, { useState } from "react";

import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function Cards() {
  const [title, setTitle] = useState("Add your first Task");
  return (
    <div>
      <div className="w-60 h-72 rounded-[20px] bg-zinc-400 ">
        <div className="flex pt-4 px-4">
          <div className=" bottom-3 w-full ">
            <button>
              <MdEdit color="blue" size="1.3em" />
            </button>
          </div>
          <div className="Edit-option ">
            <button>
              <MdDeleteOutline color="red" size="1.3em" />
            </button>
          </div>
        </div>
        <div className=" px-3 py-3 justify-start items-center flex">
          <h3 className="text-xl font-semibold ">Title : {title}</h3>
        </div>
        <div className=" px-3 justify-start items-center flex">
          <h3 className="text-xl font-semibold ">Description : </h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
