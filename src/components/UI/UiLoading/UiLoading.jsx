//UiLoading.jsx
import PropTypes from "prop-types";
import { RevolvingDot } from "react-loader-spinner";

import { takeColor } from "@services/changeCss";

import styles from "./UiLoading.module.scss";

const UiLoading = ({ theme }) => {
  return (
    <>
      {console.log(theme)}
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color={takeColor(theme)}
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
