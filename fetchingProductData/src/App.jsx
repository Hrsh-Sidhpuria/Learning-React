import "./App.css";
import AddProduct from "./Components/AddProduct";
import FindProduct from "./Components/FindProduct";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar Title="Text Converter" />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/FindProduct" element={<FindProduct />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
