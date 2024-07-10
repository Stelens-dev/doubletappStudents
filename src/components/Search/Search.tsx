import style from "./Search.module.sass";
import search from "../../assets/icon/search.svg";
import { SearchI } from "../../interface/components/Interface.Searh";

export const Search = ({ searchItem }: SearchI) => {
  const placeholder: string = "Поиск по имени";

  const searchValue = (str: string) => {
    searchItem(str);
  };

  return (
    <>
      <img src={search} className={style.search__icon} />
      <input className={style.search__input} onChange={(e) => searchValue(e.target.value)} placeholder={placeholder} />
    </>
  );
};