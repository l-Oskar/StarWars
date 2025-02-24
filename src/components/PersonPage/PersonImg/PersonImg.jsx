import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import UiImg from "@ui/UiImg";

import IconFavorite from "./img/favorite.svg?react";

import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

import styles from "./PersonImg.module.scss";

const PersonImg = ({ img, name, id, personFavorite, setPersonFavorite }) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(id));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [id]: {
            name,
            img,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <UiImg cl="img" img={img} name={name} id={id} />
        <IconFavorite
          className={`${styles.icon} ${personFavorite ? styles.icon__active : ""}`}
          onClick={dispatchFavoritePeople}
        />
        {/* <img
          src={personFavorite ? iconFavoriteActive : iconFavorite}
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          alt="Favorite"
        /> */}
      </div>
    </>
  );
};

PersonImg.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonImg;
