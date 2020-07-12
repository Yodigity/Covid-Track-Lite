import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchData } from "./Components/api";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { DataGraph } from "./Components/DataGraph";

function App() {
  const [countryData, setCountryData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState([]);
  const baseURL = "https://api.covid19api.com";

  useEffect(() => {
    const setInitialData = async () => {
      setCountryData(await fetchData());
    };

    setInitialData();
  }, []);

  const setCountry = (country) => {
    axios
      .get(`${baseURL}/live/country/${country}/status/confirmed`)
      .then((res) => {
        if (res.data != null) {
          var data = res.data;
          console.log(data);
        } else {
          console.error(res.status);
        }

        setSelectedCountry(data);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar changeCountry={setCountry} />
        <DataGraph baseURL={baseURL} selectedCountry={selectedCountry} />
      </header>
    </div>
  );
}

export default App;
