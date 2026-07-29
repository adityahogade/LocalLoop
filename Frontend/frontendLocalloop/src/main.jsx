import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Global CSS
import "./index.css";

// Main App
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);