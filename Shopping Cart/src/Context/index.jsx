//Create context
//provide state to the conetxt
// wrap context to the root component
//consume the context using usecontext

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [listofproduct, setlistofproduct] = useState([]);

  const fetchlistofproduct = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();

      if (result && result.products) {
        setlistofproduct(result.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchlistofproduct();
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ listofproduct, loading }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;

//this shoppingcartprovider recieve a children and this is a childeren of components.
