// import "@picocss/pico";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { ThemeContextProvider } from "./libs/context/ThemeContext";
import todoStore from "./libs/store/redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={todoStore}>
        <App />
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);
