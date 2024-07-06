import React from "react";
import { Header } from "../../components/Header/Header";
import style from "./Main.module.sass";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { Search } from "../../components/Search/Search";
import { Sort } from "../../components/Sort/Sort";
import { selectList } from "./selectList";

const ListMain = (): React.ReactElement => {
  const title: string = "Студенты";

  return (
    <div className={style["list-main"]}>
      <h1 className={style["list-main__title"]}>{title}</h1>
      <div className={style["list-main__section-search"]}>
        <Search />
        <Dropdown data={selectList} />
      </div>
      <div className={style["list-main__section-students"]}>
        <Sort />
      </div>
    </div>
  );
};

export const Main = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ListMain />
    </>
  );
};