export const changeCss = (theme) => {
  const root = document.querySelector(":root");

  root.style.setProperty("--primary-color", `var(--color-${theme})`);
  root.style.setProperty("--theme-bg", `var(--theme-${theme}-bg)`);

  if (
    theme == "light" ||
    theme == "green" ||
    theme == "violet" ||
    theme == "yellow"
  ) {
    root.style.setProperty("--secondary-color", `black`);
    return;
  }
  root.style.setProperty("--secondary-color", `white`);
};

export const takeColor = (theme) => {
  const root = document.documentElement;
  const computedStyles = getComputedStyle(root);
  const color = computedStyles.getPropertyValue(`--color-${theme}`).trim();
  return color;
};
