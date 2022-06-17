import axios from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export async function fetchCharacters() {
  const res = axios.get("/character");
  return res;
}

export async function fetchCharactersByQuery(q) {
  const res = axios.get(`/character/?name=${q}`);
  return res;
}

export async function fetchCharacterById(id) {
  const res = axios.get(`/character/${id}`);
  return res;
}
