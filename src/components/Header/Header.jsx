import { NavLink } from "react-router-dom";
import Favorite from "@components/Favorite";

import ImgYoda from "./img/yoda.svg?react";
import ImgVayder from "./img/vayder.svg?react";
import ImgMando from "./img/mando.svg?react";
import ImgChewbacca from "./img/chewbacca.svg?react";
import ImgR2 from "./img/r2.svg?react";
import ImgStar from "./img/star.svg?react";
import ImgAhsoka from "./img/ahsoka.svg?react";
import ImgC3PO from "./img/c3po.svg?react";

import { useTheme } from "@context/ThemeProvider";
import THEMES from "@constants/themes";

import styles from "./Header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const isTheme = useTheme();
  const [Img, setImg] = useState(() => ImgYoda);

  useEffect(() => {
    switch (isTheme.theme) {
      case THEMES.THEME_LIGHT:
        setImg(() => ImgStar);
        break;
      case THEMES.THEME_DARK:
        setImg(() => ImgVayder);
        break;
      case THEMES.THEME_VIOLET:
        setImg(() => ImgAhsoka);
        break;
      case THEMES.THEME_RED:
        setImg(() => ImgMando);
        break;
      case THEMES.THEME_GREEN:
        setImg(() => ImgYoda);
        break;
      case THEMES.THEME_BLUE:
        setImg(() => ImgR2);
        break;
      case THEMES.THEME_YELLOW:
        setImg(() => ImgC3PO);
        break;

      default:
        break;
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <Img className={styles.icon} />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
