import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalProvider } from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <GlobalProvider>
      <App />
    </GlobalProvider>
  
);
