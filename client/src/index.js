import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";

const rootElement =
  document.getElementById("root") || document.createElement("div");

createRoot(rootElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
