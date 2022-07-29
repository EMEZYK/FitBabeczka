import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
