import style from "./Search.module.sass";
import search from "../../assets/icon/search.svg";

export const Search = () => {
  const placeholder: string = "Поиск по имени";

  return (
    <>
      <img src={search} className={style.search__icon} />
      <input className={style.search__input} onChange={(e) => console.log(e.target.value)} placeholder={placeholder} />
    </>
  );
};