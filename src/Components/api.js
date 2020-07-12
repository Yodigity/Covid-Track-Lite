import axios from "axios";

const baseURL = "https://api.covid19api.com";

export const fetchCountries = async () => {
  const res = await axios.get(`${baseURL}/countries`);

  console.log(res.data);
  return res.data.map((country) => country);
};

export const fetchData = async (country) => {
  var url = baseURL;
  if (country) {
    url = `${baseURL}/live/country/${country}/status/confirmed`;

    axios.get(url).then((res) => {
      if (res.data != null) {
        var data = res.data;
        console.log(data);

        return data;
      } else {
        console.error(res.status);
      }
    });
  } else {
    url = `${baseURL}/summary`;
    axios.get(url).then((res) => {
      if (res.data != null) {
        var data = res.data.Global;
        console.log(data);

        return data;
      } else {
        console.error(res.status);
      }
    });
  }
};
