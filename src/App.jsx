import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;
