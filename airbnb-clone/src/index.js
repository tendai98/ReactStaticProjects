import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import styles from "./css/style.css"

const divRef = document.getElementById("root");
const root = ReactDOM.createRoot(divRef);

root.render(
    <App/>
)
