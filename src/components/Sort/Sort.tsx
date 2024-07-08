import React, { useCallback, useEffect, useState } from "react";
import { useApi } from "../../Hooks/useApi";
import style from "./Sort.module.sass";
import { StudentsI, HandleButtonClickI, StudentsParametrI } from "../../interface/api/Interface.Students";
import { ListItems } from "./ListItems";

export const Sort = (): React.ReactElement => {
  const name: string[] = ["ФИО", "Специальность", "Группа", "Возраст", "Рейтинг"];
  const [students, setStudents] = useState<StudentsParametrI[] | undefined>(undefined);
  const [_parametr, setParametr] = useState<string | null>(null);
  const [deleteItem, setDeleteItem] = useState<HandleButtonClickI | null>(null);
  const { request } = useApi();

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

  const handleButtonClick = (id: number) => {
    setDeleteItem({ id: id });
  };

  if (deleteItem !== null) {
    // Using mutation we remove an object from the array using the splice method
    (students as StudentsParametrI[]).splice(deleteItem.id, 1);
  }

  // console.log(students?.map((e) => e.id));

  return (
    <table className={style["sort__section-table"]}>
      <thead className={style["sort__section-thead"]}>
        <tr className={style["sort__section-th-title"]}>
          {name.map((e, i) => (
            <th id={`${i}`} className={style["sort__section-students-value"]} onClick={() => setParametr(e)} key={Math.random()}>{e}</th>
          ))}
        </tr>
      </thead>
      {(students !== undefined && students.length !== 0)
        ? (<tbody className={style["sort__section-students"]}>
          {students.map((e, i) => <ListItems {...e} arrId={i} update={handleButtonClick} key={Math.random()} />)}
        </tbody>)
        : <tbody className={style["sort__section-students"]}>
          <tr className={style["sort__text-error"]}>
            <td>
              <p>{`Студенты пока не добавлены, зайдите позже...`}</p>
            </td>
          </tr>
        </tbody>}
    </table>
  );
};