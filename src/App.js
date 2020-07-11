import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { DataGraph } from "./Components/DataGraph";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <NavBar /> */}
        <DataGraph />
      </header>
    </div>
  );
}

export default App;
