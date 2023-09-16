import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="p-6 grid grid-cols-3 gap-6 flex-wrap">
      <App />
      <App />
      <App />
      <App />
    </div>
  </React.StrictMode>
);
