import { useLocation } from "react-router-dom";

import img from "./img/notFoundImg.png";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img src={img} alt="Not found" className={styles.notFoundImg} />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
