import { useState } from "react";
import "./App.css";

//Learning File Structure of React , understanding overall working
//learning hooks and using "useState()" here.
function Card({ obj }) {
  return (
    <div class="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        class="h-[200px] w-full rounded-t-md object-cover"
      />
      <div class="p-4">
        <h1 class="inline-flex items-center text-lg font-semibold">
          <b>Name : </b>
          {obj.Name}
        </h1>
        <p class="mt-3 text-sm text-gray-600">{obj.working}</p>
        <div class="mt-4">
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {obj.city}
          </span>
        </div>
        <button
          type="button"
          class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
}

export default Card;
