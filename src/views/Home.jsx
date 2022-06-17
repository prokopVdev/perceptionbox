import CharList from "../components/CharList";
import Search from "../components/Search";
import { fetchCharacters, fetchCharactersByQuery } from "../service";
import { useEffect, useState } from "react";
import { Notify } from "notiflix";

export default function Home() {
  const [chars, setChars] = useState([]);
  const [query, setQuery] = useState("");

  const saveQuery = (value) => {
    setQuery(value);
  };

  const getChars = (data) => data.map((el) => ({ liked: false, ...el })) || [];

  // const onLikeToggle = (id) =>
  //   setChars(
  //     chars.map((el) => (el.id === id ? { liked: !el.liked, ...el } : el))
  //   );

  async function getCharacters() {
    try {
      const res = await fetchCharacters();
      setChars(getChars(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }

  async function getCharactersByQuery(q) {
    try {
      const res = await fetchCharactersByQuery(q);
      setChars(getChars(res.data.results));
    } catch (error) {
      Notify.info("No characters were found");
    }
  }

  useEffect(() => {
    query ? getCharactersByQuery(query) : getCharacters();
  }, [query]);

  return (
    <>
      <Search saveQuery={saveQuery} />
      <CharList chars={chars} />
    </>
  );
}
