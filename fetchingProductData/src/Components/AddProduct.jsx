import React from "react";

import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");
  const [error, setError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [resp, setResp] = useState("");
  const [loader, setLoader] = useState(false);
  const [emptytext, setEmptyText] = useState(false);

  const addProduct = (event) => {
    event.preventDefault();
    if (name == "" || price == "" || discription == "") {
      setEmptyText(true);
    } else {
      setLoader(true);
      const Product = {
        name,
        discription,
        price,
      };

      fetch("https://localhost:7005/api/Products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Product),
      })
        .then((response) => {
          if (response.ok) {
            setIsAdded(true);
            setResp("success! Product added sucessfully");
            setLoader(false);
          } else {
            throw new Error("Failed to add product");
            setError(true);
            setLoader(false);
          }
        })
        .catch(
          (error) => setResponseMessage(`Error: ${error.message}`),
          setLoader(false)
        );

      setName("");
      setDiscription("");
      setPrice("");
    }
  };
  return (
    <>
      {emptytext && (
        <div
          class=" flex bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p class="font-bold">OPPs !!!</p>
          <p>Field should not be null here</p>
        </div>
      )}
      {isAdded && (
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div class="flex">
            <div class="py-1"></div>
            <div>{resp}</div>
          </div>
        </div>
      )}
      {loader && <p>Loading...</p>}
      <div class="h-screen bg-gray-800">
        <div class="pt-10 md:pt-20">
          <div class="p-4 md:p-8">
            <h1 class="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
              Add Product
            </h1>
            <form class="flex flex-col items-center">
              <div class="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div class="flex flex-col md:flex-row">
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    class="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Name of Product"
                  />
                  <input
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    class="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Price of Product"
                  />
                </div>

                <textarea
                  id="discription"
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                  rows="5"
                  placeholder="Discription"
                  class="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                onClick={addProduct}
                class="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
