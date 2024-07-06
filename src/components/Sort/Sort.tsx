import React, { useCallback, useEffect, useState } from "react";
import { useApi } from "../../Hooks/useApi";
import style from "./Sort.module.sass";
import { StudentsInterface } from "../../interface/api/Interface.Students";
import { YearsOld } from "./YearsOld";
import basket from "../../assets/icon/basket.svg";
import rating from "../../assets/icon/rating.svg"

export const Sort = (): React.ReactElement => {
  const name: string[] = ["ФИО", "Специальность", "Группа", "Возраст", "Рейтинг"];
  const [students, setStudents] = useState<StudentsInterface | undefined>(undefined);
  const { request } = useApi();

  const persons = useCallback(async () => {
    const data: StudentsInterface | undefined = await request("https://front-assignment-api.2tapp.cc/api/persons", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    setStudents(data);
  }, [request]);

  useEffect(() => {
    persons();
  }, [persons]);

  return (
    <table className={style["sort__section-table"]}>
      <thead className={style["sort__section-thead"]}>
        <tr className={style["sort__section-th-title"]}>
          {name.map((e, i) => (
            <th id={`${i}`} className={style["sort__section-students-value"]} key={Math.random()}>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody className={style["sort__section-students"]}>
        {(students !== undefined)
          ? (students.students?.map((e) => (
            <tr className={style["sort__section-item"]} key={Math.random()}>
              <th className={style["sort__item-full-name"]}>
                <img className={style["sort__item-student-img"]} src={e.avatar} />
                <span className={style["sort__item-name"]}>{e.name}</span>
                <span className={style["sort__item-name-rating"]}>
                  <span className={style["sort__item-name"]}>{e.name}</span>
                  <span className={style["sort__item-rating-block"]}>
                    <span className={style["sort__item-color"]} />
                    <img src={rating} className={style["sort__item-rating-icon"]} />
                    <span className={style["sort__item-rating-text"]}>{e.rating}</span>
                  </span>
                </span>
                <span className={style["sort__item-basket"]}>
                  <img src={basket} className={style["sort__item-basket-img"]} />
                </span>
              </th>
              <div className={style["sort__item-line"]} />
              <th className={style["sort__item-specialty"]}>{e.specialty}</th>
              <th className={style["sort__item-group"]}>{e.group}</th>
              <th className={style["sort__item-birthday-block"]}>
                <div className={style["sort__item-ellipse-block"]}>
                  <span className={style["sort__item-ellipse"]} />
                </div>
                <span className={style["sort__item-birthday"]}>{`${YearsOld(e.birthday)}  y.o.`}</span>
              </th>
              <th className={style["sort__item-specialty-block"]}>
                <div className={style["sort__item-ellipse-block"]}>
                  <span className={style["sort__item-ellipse"]} />
                </div>
                <span className={style["sort__item-specialty"]}>{e.specialty}</span>
              </th>
              <th className={style["sort__item-group-block"]}>
                <div className={style["sort__item-ellipse-block"]}>
                  <span className={style["sort__item-ellipse"]} />
                </div>
                <span className={style["sort__item-group"]}>{e.group}</span>
              </th>
              <th className={style["sort__item-birthday"]}>{YearsOld(e.birthday)}</th>
              <th className={style["sort__item-rating"]}>
                <span className={style["sort__item-rating-text"]}>{e.rating}</span>
                <span className={style["sort__item-rating-block"]}>
                  <span className={style["sort__item-color"]} />
                  <span className={style["sort__item-basket"]}>
                    <img src={basket} className={style["sort__item-basket-img"]} />
                  </span>
                </span>
              </th>
            </tr>
          )))
          : <></>}
      </tbody>
    </table>
  );
};