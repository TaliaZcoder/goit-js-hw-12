import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54228664-7655a034885e7c8d5f8543052";

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 15,
      page,
    },
  });

  return response.data;
}
