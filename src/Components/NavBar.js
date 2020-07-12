import React, { useState, useEffect } from "react";
import { fetchCountries } from "./api";
import axios from "axios";

export const NavBar = ({ changeCountry }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setCurrentCountry] = useState("");

  useEffect(() => {
    const setCountryList = async () => {
      setCountries(await fetchCountries());
    };

    setCountryList();
  }, [setCountries]);

  const handleChange = (e) => {
    changeCountry(e.target.value);
    setCurrentCountry(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <select
        name='countries'
        id='countrySelector'
        value={selectedCountry}
        onChange={(value) => handleChange(value)}
      >
        {countries.map((country) => {
          return (
            <option
              key={country.ISO2}
              className='countryOption'
              value={country.Slug}
            >
              {country.Country}
            </option>
          );
        })}
      </select>
    </form>
  );
};
