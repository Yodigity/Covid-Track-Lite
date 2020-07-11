import React, { useState, useEffect } from "react";
import axios from "axios";

export const NavBar = () => {
  const [countries, setCountries] = useState([]);
  const baseURL = "https://api.covid19api.com";

  useEffect(() => {
    axios.get(`${baseURL}/countries`).then((res) => {
      if (res.data != null) {
        setCountries(res.data);
      }
    });
  }, []);

  const countryList =
    countries == null ? (
      <p>Loading...</p>
    ) : (
      countries.map((country) => {
        console.log(country);
        return (
          <option
            key={country.ISO2}
            className='countryOption'
            value={country.Slug}
          >
            {country.Country}
          </option>
        );
      })
    );

  return (
    <select name='countries' id='countrySelector'>
      {countryList}
    </select>
  );
};
