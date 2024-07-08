import { useState } from "react";
import { DropdownI /*, DropdownButtonInterface*/ } from "../../interface/components/Interface.Dropdown";
import style from "./DropDown.module.sass";
import check from "../../assets/icon/check.svg";
import sort from "../../assets/icon/sort.svg";

export const Dropdown = (props: { data: DropdownI[] }): React.ReactElement => {
  const [state, _setState] = useState(props.data);
  const [option, setOption] = useState<null | DropdownI>(null);
  const [select, setSelect] = useState(false);
  

  return (
    <div className={style.dropdown}>
      <button className={style.dropdown__button} onClick={() => setSelect(!select)}>
        <span className={style.dropdown__text}>{(option === null) ? state[0].text : option.text}</span>
        <img className={style["dropdown__check-icon"]} src={sort} alt="check_icon" />
      </button>
      <ul data-open={select} className={style.dropdown__menu}>
        {state.map((e, i) => (
          (e.select === true)
            ? <li className={style["dropdown__menu-li"]} key={e.id} onClick={() => (state.splice(i, 1, { ...e, select: false }), setOption({ ...e }))}>{e.text}<img className={style["dropdown__check-icon"]} src={check} alt="check_icon" /></li>
            : <li className={style["dropdown__menu-li"]} key={e.id} onClick={() => (state.splice(i, 1, { ...e, select: true }), setOption({ ...e }))}>{e.text}</li>
        ))}
      </ul>
    </div>
  );
};