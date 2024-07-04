import React from "react";
import { Header } from "../../components/Header/Header";
import style from "./Main.module.sass";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { DropdownInterface } from "../../interface/components/Interface.Dropdown";

const ListMain = (): React.ReactElement => {
  const title: string = "Студенты";
  const selectList: DropdownInterface[] = [
    {
      id: 0,
      value: "name_senior",
      text: "Имя А-Я",
      select: false
    },
    {
      id: 1,
      value: "name_junior",
      text: "Имя Я-А",
      select: false
    },
    {
      id: 2,
      value: "younger_first",
      text: "Сначала моложе",
      select: false
    },
    {
      id: 3,
      value: "older_first",
      text: "Сначала старше",
      select: false
    },
    {
      id: 4,
      value: "high_rating",
      text: "Высокий рейтинг",
      select: false
    },
    {
      id: 5,
      value: "low_rating",
      text: "Низкий рейтинг",
      select: false
    }
  ];
  return (
    <div className={style["list-main"]}>
      <h1 className={style["list-main__title"]}>{title}</h1>
      <div className={style["list-main__section"]}>
        <input className={style["list-main__search"]} />
        <Dropdown data={selectList}/>
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