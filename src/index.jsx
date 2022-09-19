import React from "react";
import ReactDom from "react-dom";
import {Home} from "./views/Home/Home"
import 'assets/styles/main.css'

ReactDom.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>,
  document.getElementById("root")
);
