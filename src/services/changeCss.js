export const changeCss = (theme) => {
  const root = document.querySelector(":root");

  root.style.setProperty("--primary-color", `var(--color-${theme})`);
  root.style.setProperty("--theme-bg", `var(--theme-${theme}-bg)`);
};
