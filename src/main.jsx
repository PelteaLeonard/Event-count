import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/app";
import "./assets/css/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
