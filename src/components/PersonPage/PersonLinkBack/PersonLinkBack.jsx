import { useNavigate } from "react-router-dom";
import iconBack from "./img/back.png";
import UiButton from "@ui/UiButton";
import styles from "./PersonLinkBack.module.scss";

const PersonLinkBack = () => {
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
          theme="violet"
        />
      </div>
    </>
  );
};

export default PersonLinkBack;
