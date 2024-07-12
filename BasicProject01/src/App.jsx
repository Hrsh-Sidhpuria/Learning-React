import { useState } from "react";
import "./App.css";

//Learning File Structure of React , understanding overall working
//learning hooks and using "useState()" here.
function App() {
  let [value, setcounter] = useState(0);
  const IncreaseValue = () => {
    value++;
    setcounter(value);
    console.log(value);
  };
  const DecreaseValue = () => {
    if (value > 0) {
      value--;
      setcounter(value);
      console.log(value);
    }
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl border-2 border-indigo-600">
        Counter Project
      </h1>
      <h3>Count Value : {value}</h3>
      <br />
      <button onClick={IncreaseValue}>increase</button>
      <button onClick={DecreaseValue}>Decrease</button>
    </>
  );
}

export default App;
