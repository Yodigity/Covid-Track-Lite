import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { fetchGlobalData, fetchData } from "./api";

import Axios from "axios";

export const DataGraph = ({ baseURL, selectedCountry, data }) => {
  const [countryData, setCountryData] = useState();

  useEffect(() => {
    const getCountryData = async () => {
      setCountryData(await fetchGlobalData(selectedCountry));
    };

    getCountryData();
  }, []);

  console.log(selectedCountry);

  // const data = {
  //   labels: ["Confirmed", "Deaths", "Recovered"],
  //   datasets: [
  //     {
  //       label: "Confirmed",
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: countryData.map(({ Confirmed }) => Confirmed),
  //     },
  //     {
  //       label: "Recovered",
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: countryData.map(({ Recovered }) => Recovered),
  //     },
  //     {
  //       label: "Deaths",
  //       backgroundColor: "rgba(255,99,132,0.2)",
  //       borderColor: "rgba(255,99,132,1)",
  //       borderWidth: 1,
  //       hoverBackgroundColor: "rgba(255,99,132,0.4)",
  //       hoverBorderColor: "rgba(255,99,132,1)",
  //       data: countryData.map(({ Deaths }) => Deaths),
  //     },
  //   ],
  // };

  const barChart = countryData ? (
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
          // {
          //   label: "Recovered",
          //   backgroundColor: "rgba(255,99,132,0.2)",
          //   borderColor: "rgba(255,99,132,1)",
          //   borderWidth: 1,
          //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
          //   hoverBorderColor: "rgba(255,99,132,1)",
          //   data: countryData.recovered,
          // },
          // {
          //   label: "Deaths",
          //   backgroundColor: "rgba(255,99,132,0.2)",
          //   borderColor: "rgba(255,99,132,1)",
          //   borderWidth: 1,
          //   hoverBackgroundColor: "rgba(255,99,132,0.4)",
          //   hoverBorderColor: "rgba(255,99,132,1)",
          //   data: countryData.deaths,
          // },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `Latest update for ${selectedCountry}`,
        },
      }}
    />
  ) : null;

  return <div>{barChart}</div>;
};

// const retrieveData = async () => {
//   try {
//     const { data } = await Axios.get(
//       `${baseURL}/live/country/south-africa/status/confirmed`
//     );
//     const sortedData = data.map((resData) => ({
//       confirmed: resData.Confirmed,
//       deaths: resData.Deaths,
//       recovered: resData.Recovered,
//     }));

//     return sortedData[data.length - 1];
//   } catch (error) {
//     console.log(error);
//   }
// };
