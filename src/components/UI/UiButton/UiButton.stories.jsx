import UiButton from "./UiButton";

export default {
  component: UiButton,
};

const props = {
  text: "Button",
  handleChange: () => {},
  disabled: false,
  theme: "dark",
};

export const Dark = {
  args: {
    ...props,
    theme: "dark",
  },
};

export const Light = {
  args: {
    ...props,
    theme: "light",
  },
};

export const Voilet = {
  args: {
    ...props,
    theme: "violet",
  },
};

export const Yelow = {
  args: {
    ...props,
    theme: "yelow",
  },
};

export const Blue = {
  args: {
    ...props,
    theme: "blue",
  },
};

export const Red = {
  args: {
    ...props,
    theme: "red",
  },
};

export const Disabled = {
  args: {
    ...props,
    disabled: true,
  },
};
