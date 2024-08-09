import React from "react";
import { useState, useEffect } from "react";
import "./Comp.css";

const FindProduct = () => {
  const [text, setText] = useState("");
  const [productData, setProductData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  function findProductById() {
    setProductData(null);
    setError(false);
    setLoader(true);
    fetch(`https://localhost:7005/api/Products/${text}`)
      .then((response) => {
        if (!response.ok) {
          setLoader(false);
          throw new Error("network error");
        } else {
          setLoader(false);
          return response.json();
        }
      })
      .then((data) => setProductData(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <div>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="int"
            class=" mt-10 mb-10 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Id"
            required
          />
          <button
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={findProductById}
          >
            Search
          </button>
        </div>
      </div>

      {loader && (
        <>
          <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className="loader">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
              <div class="bar4"></div>
              <div class="bar5"></div>
              <div class="bar6"></div>
              <div class="bar7"></div>
              <div class="bar8"></div>
              <div class="bar9"></div>
              <div class="bar10"></div>
              <div class="bar11"></div>
              <div class="bar12"></div>
            </div>
          </div>
        </>
      )}
      {error && (
        <div class="container mx-auto p-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold text-gray-900">
              {" "}
              OOPs! Data now found at id : {text}
            </h1>
          </div>
        </div>
      )}
      {productData && (
        <div class="container mx-auto p-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <p class="text-gray-600 mt-4 mb-6">{productData.id}</p>
            <h1 class="text-3xl font-bold text-gray-900">{productData.name}</h1>
            <p class="text-gray-600 mt-4 mb-6">{productData.discription}</p>
            <p class="text-2xl font-semibold text-gray-800">
              {productData.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FindProduct;
