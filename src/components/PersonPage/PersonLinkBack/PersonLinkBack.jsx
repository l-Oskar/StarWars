import { useNavigate } from "react-router-dom";
import { useTheme } from "@context/ThemeProvider";
import iconBack from "./img/back.png";
import UiButton from "@ui/UiButton";
import styles from "./PersonLinkBack.module.scss";

const PersonLinkBack = () => {
  const isTheme = useTheme().theme;
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <UiButton
          img={iconBack}
          text="Back"
          handleChange={handleGoBack}
          theme={isTheme}
        />
      </div>
    </>
  );
};

export default PersonLinkBack;
