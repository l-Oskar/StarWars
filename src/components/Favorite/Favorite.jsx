import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import IconFavorite from "./img/favorite.svg?react";
import IconFavoriteActive from "./img/favorite-fill.svg?react";
import styles from "./Favorite.module.scss";

const Favorite = () => {
  const [counter, setCounter] = useState(0);
  const storeData = useSelector((state) => state.favoriteReducer);
  const [Icon, setIcon] = useState(() => IconFavorite);

  useEffect(() => {
    const length = Object.keys(storeData).length;

    setIcon(length > 0 ? () => IconFavoriteActive : () => IconFavorite);
    setCounter(length);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorite">
        <span className={styles.counter}>{counter}</span>
        <Icon className={styles.icon} />
      </Link>
    </div>
  );
};

export default Favorite;
