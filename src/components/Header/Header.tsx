import style from "./Header.module.sass";
import logo from "../../assets/img/logo.svg";

export const Header = (): React.ReactElement => {
  const title: string[] = "STUDENTS by Stelens-dev".split(" ");

  return (
    <header className={style.header}>
      <div className={style.title}>
        <a href="/">
          <img className={style.logo} src={logo} alt="logo" />
        </a>
        <span>
          <span>{`${title[0]} ${title[1]}`} </span>
          <span className={style["title--clip"]}>{title[2]}</span>
        </span>
      </div>
    </header>
  );
};