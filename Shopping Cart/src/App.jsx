import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Pages/Products/index.jsx";
import ProductDetails from "./Pages/ProductsDetails/index.jsx";
import Carts from "./Pages/Carts/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/carts" element={<Carts />} />
    </Routes>
  );
}

export default App;
