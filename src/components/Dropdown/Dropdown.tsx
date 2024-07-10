import { useEffect, useState } from "react";
import { DropdownI, DropdownParametrsI } from "../../interface/components/Interface.Dropdown";
import style from "./DropDown.module.sass";
import check from "../../assets/icon/check.svg";
import sort from "../../assets/icon/sort.svg";

export const Dropdown = ({ data, filterItem }: DropdownI): React.ReactElement => {
  const [option, setOption] = useState<DropdownParametrsI | null>(null);
  const [select, setSelect] = useState<boolean>(false);
  const setFilter = data?.filter((e) => e.select === true);
  let flag: boolean | void | undefined = false;
  let setFlag: DropdownParametrsI[] | undefined = undefined;

  flag = (setFilter !== undefined && setFilter.length !== 0) ? true : false;

  if (data !== undefined && option !== null) {
    setFlag = data.filter((e) => e.value === option.value);
  }
  
  useEffect(() => {
    if (flag !== false) {
      const selectData: DropdownParametrsI[] = data!.filter((e) => e.select === true);
      filterItem(selectData, flag);
      setOption(selectData[0]);
    }
  }, [data, flag, filterItem]);

  return (
    <>
      {(data !== undefined)
        ? (
          <div className={style.dropdown}>
            <button className={style.dropdown__button} onClick={() => setSelect(!select)}>
              <span className={style.dropdown__text}>{(option === null) ? "Параметр" : option.text}</span>
              <img className={style["dropdown__check-icon"]} src={sort} alt="check_icon" />
            </button>
            <ul data-open={select} className={style.dropdown__menu}>
              {data.map((e, i) => (
                <li className={style["dropdown__menu-li"]} key={Math.random()} onClick={() => (data.splice(i, 1, { ...e, select: true }), setOption({ ...e }))}>
                  {`${e.text}`}
                  {(setFlag !== undefined && e.value === setFlag[0].value) ? <img className={style["dropdown__check-icon"]} src={check} alt="check_icon" /> : null}
                </li>
              ))}

            </ul>
          </div>
        ) : (
          <></>
        )}
    </>
  );
};
