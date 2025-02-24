import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import IconFavorite from "./img/favorite.svg?react";

import styles from "./Favorite.module.scss";

const Favorite = () => {
  const [counter, setCounter] = useState(0);
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;

    setCounter(length);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorite">
        <span className={styles.counter}>{counter}</span>
        <IconFavorite
          className={`${styles.icon} ${counter > 0 ? styles.icon__active : ""}`}
        />
      </Link>
    </div>
  );
};

export default Favorite;
