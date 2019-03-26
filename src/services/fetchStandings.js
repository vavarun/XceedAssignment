export const fetchStandings = async () => {
  try {
    const response = await fetch(
      "http://api.football-data.org/v2/competitions/PD/standings",
      {
        method: "GET",
        headers: { "X-Auth-Token": "6333d617951c4a04b8ae9093f6f5b698" }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
