import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/styles/base.scss";
import TodoListProvider from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </React.StrictMode>
);
