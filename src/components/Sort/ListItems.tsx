import { StudentsParametrI } from "../../interface/api/Interface.Students";
import style from "./Sort.module.sass";
import { YearsOld } from "../../core/YearsOld";
import basket from "../../assets/icon/basket.svg";
import rating from "../../assets/icon/rating.svg";

export const ListItems = (e: StudentsParametrI): React.ReactElement => {
  const deleteItem = (id: number) => {
    console.log("Click");
    return e.update(id);
  };

  return (
    <tr className={style["sort__section-item"]}>
      <td className={style["sort__item-full-name"]}>
        <img className={style["sort__item-student-img"]} src={e.avatar} />
        <span className={style["sort__item-name"]}>{e.name}</span>
        <span className={style["sort__item-name-rating"]}>
          <span className={style["sort__item-name"]}>{e.name}</span>
          <span className={style["sort__item-rating-block"]}>
            <span className={style["sort__item-color"]} style={{ background: `var(--color-${e.color})` }} />
            <img src={rating} className={style["sort__item-rating-icon"]} />
            <span className={style["sort__item-rating-text"]}>{e.rating}</span>
          </span>
        </span>
        <span className={style["sort__item-basket"]}>
          <img src={basket} className={style["sort__item-basket-img"]} onClick={() => deleteItem(e.arrId)} />
        </span>
      </td>
      <td>
        <span className={style["sort__item-line"]} />
      </td>
      <td className={style["sort__item-specialty"]}>{e.specialty}</td>
      <td className={style["sort__item-group"]}>{e.group}</td>
      <td className={style["sort__item-birthday-block"]}>
        <span className={style["sort__item-ellipse-block"]}>
          <span className={style["sort__item-ellipse"]} />
        </span>
        <span className={style["sort__item-birthday"]}>{`${YearsOld(e.birthday)}  y.o.`}</span>
      </td>
      <td className={style["sort__item-specialty-block"]}>
        <span className={style["sort__item-ellipse-block"]}>
          <span className={style["sort__item-ellipse"]} />
        </span>
        <span className={style["sort__item-specialty"]}>{e.specialty}</span>
      </td>
      <td className={style["sort__item-group-block"]}>
        <span className={style["sort__item-ellipse-block"]}>
          <span className={style["sort__item-ellipse"]} />
        </span>
        <span className={style["sort__item-group"]}>{e.group}</span>
      </td>
      <td className={style["sort__item-birthday"]}>{YearsOld(e.birthday)}</td>
      <td className={style["sort__item-rating"]}>
        <span className={style["sort__item-rating-text"]}>{e.rating}</span>
        <span className={style["sort__item-rating-block"]}>
          <span className={style["sort__item-color"]} style={{ background: `var(--color-${e.color})` }} />
          <span className={style["sort__item-basket"]}>
            <img src={basket} className={style["sort__item-basket-img"]} onClick={() => deleteItem(e.arrId)} />
          </span>
        </span>
      </td>
    </tr>
  );
};