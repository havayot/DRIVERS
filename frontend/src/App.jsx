import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecretaryPage from "./pages/SecretaryPage";
import DriverPage from "./pages/DriverPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/secretary" element={<SecretaryPage />} />
        <Route path="/driver" element={<DriverPage />} />
        <Route path="*" element={<div>בחר /secretary או /driver</div>} />
      </Routes>
    </BrowserRouter>
  );
}
