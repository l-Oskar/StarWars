//UiLoading.jsx
import PropTypes from "prop-types";
import { RevolvingDot } from "react-loader-spinner";

import styles from "./UiLoading.module.scss";

const UiLoading = ({ theme = "violet" }) => {
  return (
    <>
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color={theme}
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

UiLoading.prototype = {
  theme: PropTypes.string,
};
export default UiLoading;
