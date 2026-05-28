const base_url = "https://api.api-ninjas.com";
const apiKey= process.env.API_NINJAS_KEY;

const fetchFromApi = async () => {
  try {
    const response = await fetch(`${base_url}/v2/randomuser`, {
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

module.exports = { fetchFromApi };