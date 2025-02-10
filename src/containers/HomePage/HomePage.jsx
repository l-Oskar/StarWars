import PropTypes from "prop-types";
import UiButton from "@ui/UiButton";
import styles from "./HomePage.module.scss";
import * as Spinners from "react-svg-spinners";

const HomePage = () => {
  return (
    <>
      <h1 className="header__text">HomePage</h1>
      <UiButton
        text="Violet"
        handleChange={console.log("Home Page!")}
        disabled={false}
        theme="violet"
        classes
      />
    </>
  );
};

export default HomePage;
