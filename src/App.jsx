import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos";

const App = () => {
  return (
    <Routes>
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
};

export default App;
