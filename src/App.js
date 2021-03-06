import React, { useState, useEffect } from "react";

import { fetchGlobalData } from "./Components/api";

import "./App.css";
import { NavBar } from "./Components/NavBar";
import { DataGraph } from "./Components/DataGraph";

function App() {
  const [countryData, setCountryData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");
  const baseURL = "https://api.covid19api.com";

  useEffect(() => {
    const setInitialData = async () => {
      setCountryData(await fetchGlobalData());
    };

    setInitialData();
  }, []);

  const setCountry = async (country) => {
    if (country !== selectedCountry) {
      setCountryData(await fetchGlobalData(country));
      setSelectedCountry(country);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar changeCountry={setCountry} selectedCountry={selectedCountry} />
        <DataGraph
          baseURL={baseURL}
          data={countryData}
          selectedCountry={selectedCountry}
        />
      </header>
    </div>
  );
}

export default App;
