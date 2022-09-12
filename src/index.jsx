import React from "react";
import ReactDom from "react-dom";
import {Home} from "./components/Home"
import './index.css'

ReactDom.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>,
  document.getElementById("root")
);
