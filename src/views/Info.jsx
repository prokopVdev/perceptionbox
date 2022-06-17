import Character from "../components/Character";
import { fetchCharacterById } from "../service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Info() {
  const [character, setChar] = useState(null);
  const { characterId } = useParams();
  async function getCharacterById() {
    try {
      const res = await fetchCharacterById(characterId);
      setChar(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCharacterById();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Character character={character} />
    </>
  );
}
