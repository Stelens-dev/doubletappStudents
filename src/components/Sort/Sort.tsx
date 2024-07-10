import React, { useState } from "react";
import style from "./Sort.module.sass";
import { HandleButtonClickI, StudentsParametrI } from "../../interface/api/Interface.Students";
import { ListItems } from "./ListItems";
import { SortI } from "../../interface/components/Interface.Sort";

export const Sort = ({ students, data }: SortI): React.ReactElement => {
  const [deleteItem, setDeleteItem] = useState<HandleButtonClickI | null>(null);
  const name: string[] = ["ФИО", "Специальность", "Группа", "Возраст", "Рейтинг"];

  const deleteButtonClick = (id: number) => {
    setDeleteItem({ id: id });
  };

  if (deleteItem !== null) {
    // Используя мутацию, мы удаляем объект из массива методом splice
    (students as StudentsParametrI[]).splice(deleteItem.id, 1);
    setDeleteItem(null);
  }

  if (data !== null) {
    const str: string = data.str!;
    students = (students as StudentsParametrI[]).filter((e) => (e.name.includes(str)) ? true : false);
  }

  return (
    <table className={style["sort__section-table"]}>
      <thead className={style["sort__section-thead"]}>
        <tr className={style["sort__section-th-title"]}>
          {name.map((e, i) => (
            <th id={`${i}`} className={style["sort__section-students-value"]} key={Math.random()}>{e}</th>
          ))}
        </tr>
      </thead>
      {(students !== undefined && students.length !== 0)
        ? (<tbody className={style["sort__section-students"]}>
          {students.map((e, i) => <ListItems {...e} arrId={i} update={deleteButtonClick} key={Math.random()} />)}
        </tbody>)
        : (<tbody className={style["sort__section-students"]}>
          <tr className={style["sort__text-error"]}>
            <td>
              <p>{`Студенты пока не добавлены или выбраны неправильно параметры, зайдите позже...`}</p>
            </td>
          </tr>
        </tbody>)}
    </table>
  );
};