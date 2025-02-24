import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PeopleList from "@components/PeoplePage/PeopleList";

import styles from "./FavoritePage.module.scss";

const FavoritePage = () => {
  const [people, setPeople] = useState([]);
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);
    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      setPeople(res);
    }
  }, []);
  return (
    <>
      <h1 className="header__text">Favorite Page</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No favorite characters!</h2>
      )}
    </>
  );
};

export default FavoritePage;
