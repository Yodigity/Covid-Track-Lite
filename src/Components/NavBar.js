import React, { useState, useEffect } from "react";
import { fetchCountries } from "./api";
import axios from "axios";

export const NavBar = ({ changeCountry }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const setCountryList = async () => {
      setCountries(await fetchCountries());
    };
    setCountryList();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedCountry(e.target.value);
  };

  return (
    <form>
      <select
        name='countries'
        id='countrySelector'
        value={selectedCountry}
        onChange={handleChange}
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
