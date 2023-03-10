import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { Provider } from "react-redux";
import reduxStore from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </Provider>
);
