import { useTheme } from "@context/ThemeProvider";

import UiButton from "@ui/UiButton";

import THEMES from "@constants/themes";

import styles from "./ChoseSide.module.scss";

const ChoseSide = () => {
  const isTheme = useTheme();
  return (
    <div className={styles.wrapper}>
      <h1 className="header__text">Chose Your Theme</h1>
      <div className={styles.container}>
        <UiButton
          text="Light"
          handleChange={() => isTheme.change(THEMES.THEME_LIGHT)}
          disabled={false}
          theme="light"
        />
        <UiButton
          text="Dark"
          handleChange={() => isTheme.change(THEMES.THEME_DARK)}
          disabled={false}
          theme="dark"
        />
        <UiButton
          text="Violet"
          handleChange={() => isTheme.change(THEMES.THEME_VIOLET)}
          disabled={false}
          theme="violet"
        />
        <UiButton
          text="Red"
          handleChange={() => isTheme.change(THEMES.THEME_RED)}
          disabled={false}
          theme="red"
        />
        <UiButton
          text="Green"
          handleChange={() => isTheme.change(THEMES.THEME_GREEN)}
          disabled={false}
          theme="green"
        />
        <UiButton
          text="Blue"
          handleChange={() => isTheme.change(THEMES.THEME_BLUE)}
          disabled={false}
          theme="blue"
        />
        <UiButton
          text="Yellow"
          handleChange={() => isTheme.change(THEMES.THEME_YELLOW)}
          disabled={false}
          theme="yellow"
        />
      </div>
    </div>
  );
};

export default ChoseSide;
