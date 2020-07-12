import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import Axios from "axios";

export const DataGraph = ({ baseURL }) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const getCountryData = async () => {
      setCountryData(await retrieveData());
    };

    getCountryData();
  }, []);

  const retrieveData = async () => {
    try {
      const { data } = await Axios.get(
        `${baseURL}/live/country/south-africa/status/confirmed`
      );
      const sortedData = data.map((resData) => ({
        confirmed: resData.Confirmed,
        deaths: resData.Deaths,
        recovered: resData.Recovered,
      }));

      return sortedData[data.length - 1];
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    labels: ["Confirmed", "Deaths", "Recovered"],
    datasets: [
      {
        label: "People",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          countryData.confirmed,
          countryData.deaths,
          countryData.recovered,
        ],
      },
    ],
  };

  const barChart = (
    <Bar
      data={data}
      options={{
        legend: { display: false },
        title: { display: true, text: `Latest update for` },
      }}
    />
  );

  return <div>{barChart}</div>;
};
