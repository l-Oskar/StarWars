import PropTypes from "prop-types";

import cn from "classnames";

import styles from "./UiButton.module.scss";

const UiButton = ({
  text,
  handleChange,
  disabled,
  theme = "dark",
  classes,
}) => {
  return (
    <>
      <button
        onClick={handleChange}
        disabled={disabled}
        className={cn(styles.button, styles[theme], classes)}>
        {text}
      </button>
    </>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

export default UiButton;
