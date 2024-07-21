import { useState } from "react";

function Textarea() {
  let onChange = (event) => {
    console.log("clicked here");
    setText(event.target.value);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };
  const toLowerCase = () => {
    setText(text.toLowerCase());
  };
  const ClearText = () => {
    setText("");
  };
  let [text, setText] = useState("");
  return (
    <>
      <div className="container mx-auto">
        <label
          for="message"
          className="flex items-center flex-row  my-2  font-medium  text-gray-900 dark:text-white text-lg font-bold my-3"
        >
          Enter Text Here
        </label>
        <textarea
          id="message"
          rows="8"
          className="block p-2.5 w-full text-sm text-white bg-gray-500 rounded-lg border border-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={text}
          placeholder="Enter here..."
          onChange={onChange}
        ></textarea>

        <button
          class=" my-2 mx-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={toUpperCase}
        >
          UpperCase
        </button>
        <button
          class=" my-2 mx-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={toLowerCase}
        >
          LowerCase
        </button>
        <button
          class=" my-2 mx-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={ClearText}
        >
          Clear
        </button>
      </div>

      <div className="container mx-auto my-2 text-center">
        <h2 className="text-lg font-bold">Additional Details</h2>
        <h5>
          {text.split(" ").length} tokens and {text.length} words
        </h5>
      </div>
    </>
  );
}

export default Textarea;
