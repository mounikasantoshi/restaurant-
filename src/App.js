import React from "react";
import "./App.css";
import ItemsWapper from "./components/ItemsWapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="mt-6">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemsWapper />} />
            <Route path="/tables" element={<Table />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
