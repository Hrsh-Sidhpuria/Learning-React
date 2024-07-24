import { useState } from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState();

  return (
    <>
      <Navbar Title="Text Converter" />
      <Routes>
        <Route path="/textarea" element={<Textarea />} />

        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
