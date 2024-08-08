import { useState, useEffect } from "react";
import "./Comp.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7005/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data), setLoader(false))
      .catch(
        (error) => console.error("Error fetching data:", error),
        setLoader(false)
      );
  }, []);

  if (Loader) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
    );
  }
  return (
    <>
      <div>
        <div class="container mx-auto p-4  rounded-lg text-center">
          <p class="p-4 text-3xl text-white dark:text-white">Product List</p>
        </div>

        <ul className="grid grid-cols-3 gap-4">
          {products.map((products, index) => (
            <li key={index}>
              <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="p-6">
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    Id No. :-{products.id}
                  </p>
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Name - {products.name}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {products.discription}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <p
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    {products.price} RS
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
