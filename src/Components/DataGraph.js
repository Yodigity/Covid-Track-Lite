import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { fetchGlobalData } from "./api";

export const DataGraph = ({ selectedCountry, data }) => {
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    const getCountryData = async () => {
      setCountryData(await fetchGlobalData(selectedCountry));
    };

    getCountryData();
  }, []);

  console.log(selectedCountry);

  var country = selectedCountry
    ? `for ${capitaliseCountry(selectedCountry)}`
    : "Globally";

  const barChart =
    data.confirmed != 0 ? (
      <Bar
        data={{
          labels: ["Confirmed", "Deaths", "Recovered"],
          datasets: [
            {
              label: "People",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [data.confirmed, data.deaths, data.recovered],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Latest update ${country}`,
          },
        }}
      />
    ) : null;

  return <div>{barChart}</div>;
};

//Helper functions
const capitaliseCountry = (country) => {
  return country.charAt(0).toUpperCase() + country.slice(1);
};
