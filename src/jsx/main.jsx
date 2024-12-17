import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../scss/index.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Hello</h1>
    <App />
  </StrictMode>
);
