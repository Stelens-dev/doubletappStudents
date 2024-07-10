import React, { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import style from "./Main.module.sass";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { Search } from "../../components/Search/Search";
import { Sort } from "../../components/Sort/Sort";
import { selectList } from "./selectList";
import { MainI } from "../../interface/pages/interface.Main";
import { StudentsI, StudentsParametrI } from "../../interface/api/Interface.Students";
import { useApi } from "../../hooks/useApi";
import { DropdownParametrsI } from "../../interface/components/Interface.Dropdown";
import { filterStudents } from "./filterStudents";

const ListMain = (): React.ReactElement => {
  const [students, setStudents] = useState<StudentsParametrI[] | undefined>(undefined);
  const [filterItem, setFilterItem] = useState<StudentsParametrI[] | undefined>(undefined);
  const [search, setSearch] = useState<MainI | null>(null);
  const [flag, setFlag] = useState<boolean>(false);
  const { request } = useApi();
  const title: string = "Студенты";
  let colorOptions: DropdownParametrsI[] | undefined = undefined;
  let data: DropdownParametrsI[] | string[] | undefined = undefined;

  const persons = useCallback(async () => {
    const data: StudentsI | undefined = await request("https://front-assignment-api.2tapp.cc/api/persons", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    setStudents(data?.students);
  }, [request]);

  useEffect(() => {
    persons();
  }, [persons]);

  
  const searchItemInList = (str: string) => {
    setSearch({ str: str });
  };
  
  if (students !== undefined) {
    const colorSet: Set<string> = new Set(students.map((e) => e.color).sort());
    colorOptions = Array.from(colorSet).map((color) => ({ value: color, text: color, select: false }));
    data = selectList.concat(colorOptions);
  }

  const filterItemInList = (arr: DropdownParametrsI[] | null | undefined, _setFilterFlag: boolean) => {
    if (students !== undefined && arr !== null && arr !== undefined) {
      const str: string = arr[0].value;
      setFilterItem(filterStudents(students, str, colorOptions));
      setFlag(!flag);
    }
  };

  return (
    <div className={style["list-main"]}>
      <h1 className={style["list-main__title"]}>{title}</h1>
      <div className={style["list-main__section-search"]}>
        <Search searchItem={searchItemInList} />
        <Dropdown data={data} filterItem={filterItemInList} />
      </div>
      <div className={style["list-main__section-students"]}>
        <Sort data={search} students={(filterItem !== undefined) ? filterItem : students} />
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