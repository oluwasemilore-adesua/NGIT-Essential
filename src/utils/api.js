const base_url = "https://api.api-ninjas.com";
const axios = require("axios");
const apiKey= process.env.API_NINJAS_KEY;

const fetchFromApi = async () => {
  try {
    const response = await fetch(`${base_url}/v2/randomuser?count=1&gender=female`, {
      headers: {
        "X-API-KEY": apiKey,
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch from API");
  }
};

const fetchFromApiWithAxios = async () => {
  try {
    const response = await axios.get(`${base_url}/v2/randomuser?count=1&gender=female`, {
        headers: {
          "X-API-KEY": apiKey,
        },
      });

    console.log("===== API Response =====");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch from API");
  }
};

module.exports = { fetchFromApi, fetchFromApiWithAxios };
