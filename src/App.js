import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Sum from "./pages/Sum";
import Prize from "./pages/Prize";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/1" element={<Sum />} />
        <Route path="/2" element={<Prize />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
