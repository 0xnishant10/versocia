import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import SnackPage from "./components/SnackPage.jsx"; // <- Create this file next

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/snack" element={<SnackPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
