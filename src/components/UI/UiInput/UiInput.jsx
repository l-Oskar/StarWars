import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./img/x.svg?react";

import styles from "./UiInput.module.scss";

const UiInput = ({ value, handleInputChange, placeholder, classes }) => {
  return (
    <div className={cn(styles.wrapper_input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <Icon className={styles.icon} onClick={() => handleInputChange("")} />
    </div>
  );
};

UiInput.propTypes = {
  value: PropTypes.any,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};

export default UiInput;
