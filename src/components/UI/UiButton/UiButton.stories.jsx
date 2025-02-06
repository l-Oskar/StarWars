import UiButton from "./UiButton";

export default {
  component: UiButton,
};

const props = {
  text: "Button",
  handleChange: () => {
    console.log("Pressed!");
  },
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

export const Disabled = {
  args: {
    ...props,
    disabled: true,
  },
};
