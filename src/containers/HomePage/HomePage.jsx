import PropTypes from "prop-types";
import UiButton from "@ui/UiButton";
import styles from "./HomePage.module.scss";

const HomePage = (props) => {
  return (
    <>
      <h1 className="header__text">HomePage</h1>
      <UiButton
        text="Violet"
        handleChange={console.log("Pressed!")}
        disabled={false}
        theme="violet"
        classes
      />
    </>
  );
};

export default HomePage;
