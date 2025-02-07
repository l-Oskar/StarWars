import { useNavigate } from "react-router-dom";
import styles from "./PersonLinkBack.module.scss";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <a href="#" onClick={handleGoBack} className={styles.link}>
        <span>Go back</span>
      </a>
    </>
  );
};

export default PersonLinkBack;
