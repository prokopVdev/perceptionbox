import axios from "axios";

// export const IMG_URL = "https://image.tmdb.org/t/p/w500";
axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export async function fetchCharacters() {
  const res = axios.get("/character");
  return res;
}

export async function fetchCharactersByQuery(q) {
  const res = axios.get(`/character/?name=${q}`);
  return res;
}
