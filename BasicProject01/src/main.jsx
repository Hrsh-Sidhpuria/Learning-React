import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card.jsx";
import App from "./App.jsx";

const obj1 = {
  Name: "harsh sidhpuria",
  city: "surat",
  working: "Currently Learning React Library",
};
const obj2 = {
  Name: "john william",
  city: "london",
  working: "Currently Learning javascript ",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Card obj={obj1} />
    <Card obj={obj1} />
    ``
  </>
);
