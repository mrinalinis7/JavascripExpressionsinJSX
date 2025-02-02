import React from "react";
import ReactDOM from "react-dom";

const name = "Tina";
const num = 7;
ReactDOM.render(
  <div>
    <h1>My name is {name} !</h1>
    <p>My lucky number id {num}.</p>
  </div>,
  document.getElementById("root")
);
