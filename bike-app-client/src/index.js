import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./globalstyles/reset.css";
import "./globalstyles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
