import { Link } from "react-router-dom";
import s from "./CharList.module.css";

export default function CharList({ chars }) {
  return (
    chars && (
      <ul className={s.list}>
        {chars.map(({ name, status, image, id }) => (
          <li className={s.item} key={id}>
            <Link to={`/character/${id}`}>
              <img src={image} alt={name} />
              <p>Name: {name}</p>
              <p>Status: {status}</p>
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
