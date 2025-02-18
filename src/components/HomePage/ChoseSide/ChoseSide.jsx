import PropTypes from "prop-types";

import { useTheme } from "@context/ThemeProvider";
import THEMES from "@constants/themes";
import styles from "./ChoseSide.module.scss";

const ChoseSide = () => {
  const isTheme = useTheme();
  return (
    <div className={styles.container}>
      <h1 className="header__text">ChoseSide</h1>
      <button onClick={() => isTheme.change(THEMES.THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.change(THEMES.THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.change(THEMES.THEME_VIOLET)}>
        Violet
      </button>
      <button onClick={() => isTheme.change(THEMES.THEME_RED)}>Red</button>
      <button onClick={() => isTheme.change(THEMES.THEME_GREEN)}>Green</button>
      <button onClick={() => isTheme.change(THEMES.THEME_BLUE)}>Blue</button>
      <button onClick={() => isTheme.change(THEMES.THEME_YELLOW)}>Yelow</button>
    </div>
  );
};

ChoseSide.propTypes = {
  setErrorApi: PropTypes.func,
};

export default ChoseSide;
