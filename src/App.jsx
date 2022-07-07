import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Filters from "./components/Filters";
import Products from "./components/Products";

function App() {
  return (
    <div className="container">
      <main className="main-content">
        <Filters />
        <Products />
      </main>
    </div>
  );
}

export default App;
