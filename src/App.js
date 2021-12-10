import React from "react";
import "./App.css";
import ItemsWapper from "./components/ItemsWapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import TableOrder from "./components/TableOrder";

function App() {
  const orderedTableId = useSelector(({ sidebar: { tableId } }) => {
    return tableId;
  });
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="mt-6">
          <Routes>
            {/* <Route path="/" element={<ItemsWapper />} /> */}
            <Route path="/" element={<Table />} />
            <Route path="/table/:tableId" element={<ItemsWapper />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
