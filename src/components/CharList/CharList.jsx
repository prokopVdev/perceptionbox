import { fetchCharacters, fetchCharactersByQuery } from "../../service/RAM-API";
import { useEffect, useState } from "react";
import s from "./CharList.module.css";
import { Notify } from "notiflix";

export default function CharList() {
  const [chars, setChars] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase());
  };

  async function getCharacters() {
    try {
      const res = await fetchCharacters();
      setChars(res.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCharactersByQuery(q) {
    try {
      const res = await fetchCharactersByQuery(q);
      setChars(res.data.results);
    } catch (error) {
      Notify.info("No characters was found");
    }
  }

  useEffect(() => {
    query ? getCharactersByQuery(query) : getCharacters();
  }, [query]);

  return (
    <>
      <div className={s.container}>
        <form className={s.form}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Browse characters"
            value={query}
            onChange={handleChange}
          />
        </form>
      </div>
      {chars && (
        <ul className={s.list}>
          {chars.map(({ name, status, image }, idx) => (
            <li className={s.item} key={idx}>
              <img src={image} alt={name} />
              <p>Name: {name}</p>
              <p>Status: {status}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
