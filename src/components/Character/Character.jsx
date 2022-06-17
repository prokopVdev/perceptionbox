import s from "./Character.module.css";

export default function Character({ character }) {
  const { name, image, species, gender, location, episode, status, created } =
    character ?? {};
  return (
    character && (
      <div className={s.container}>
        <div className={s.title}>
          <h2>{name}</h2>
          <h3>{String(new Date(created).getFullYear())}</h3>
        </div>
        <img src={image} alt={name} />
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Location: {location.name}</p>
        <ul className={s.list}>
          Episodes:
          {episode.map((ep, idx) => (
            <li key={idx}>{ep.slice(-2)},</li>
          ))}
        </ul>
      </div>
    )
  );
}
