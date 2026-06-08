const BASE_URL = "https://api.tvmaze.com";

export const getShows = async () => {
  const response = await fetch(`${BASE_URL}/shows?page=1`);

  if (!response.ok) {
    throw new Error("Failed to fetch shows");
  }

  return response.json();
};

export const searchShows = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/shows?q=${query}`
  );

  if (!response.ok) {
    throw new Error("Failed to search");
  }

  const data = await response.json();

  return data.map((item) => item.show);
};

export const getShowDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/shows/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch details");
  }

  return response.json();
};