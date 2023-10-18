import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { RoundProvider } from "./Context/RoundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <RoundProvider>
        <App />
        </RoundProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
