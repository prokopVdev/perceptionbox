import s from "./Search.module.css";

export default function Search({ saveQuery }) {
  const handleChange = (e) => {
    const { value } = e.currentTarget;
    saveQuery(value.toLowerCase());
  };

  return (
    <div className={s.container}>
      <form className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Browse characters"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
