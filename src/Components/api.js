import axios from "axios";

const baseURL = "https://api.covid19api.com";

export const fetchCountries = async () => {
  const res = await axios.get(`${baseURL}/countries`);

  console.log(res.data);
  return res.data.map((country) => country);
};

export const fetchGlobalData = async (country) => {
  var url = baseURL;

  if (country) {
    url = `${baseURL}/live/country/${country}/status/confirmed`;

    try {
      const { data } = await axios.get(url); //.then((res) => {

      var latestData = data[data.length - 1];

      if (latestData) {
        const sortedData = {
          confirmed: latestData.Confirmed,
          deaths: latestData.Deaths,
          recovered: latestData.Recovered,
        };

        return sortedData;
      }
    } catch (err) {
      console.error(err);
    }
  } else {
    try {
      const {
        data: { Global },
      } = await axios.get(`${baseURL}/summary`);

      const sortedData = {
        confirmed: Global.TotalConfirmed,
        deaths: Global.TotalDeaths,
        recovered: Global.TotalRecovered,
      };

      return sortedData;
    } catch (err) {
      console.error(err);
    }
  }
};

export const fetchData = async () => {
  var url = baseURL;

  try {
    const {
      data: { Global },
    } = await axios.get(`${baseURL}/summary`);

    const sortedData = {
      confirmed: Global.TotalConfirmed,
      deaths: Global.TotalDeaths,
      recovered: Global.TotalRecovered,
    };

    return sortedData;
  } catch (err) {
    console.error(err);
  }
};
