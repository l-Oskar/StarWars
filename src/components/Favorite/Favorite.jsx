import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import iconFavorite from "./img/favorite.svg";
import iconFavoriteActive from "./img/favorite-fill.svg";
import styles from "./Favorite.module.scss";

const Favorite = () => {
  const [counter, setCounter] = useState(0);
  const storeData = useSelector((state) => state.favoriteReducer);
  const [icon, setIcon] = useState(iconFavorite);

  useEffect(() => {
    const length = Object.keys(storeData).length;

    setIcon(length > 0 ? iconFavoriteActive : iconFavorite);
    setCounter(length);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorite">
        <span className={styles.counter}>{counter}</span>
        <img className={styles.icon} src={icon} alt="favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
