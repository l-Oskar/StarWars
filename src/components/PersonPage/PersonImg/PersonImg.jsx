import PropTypes from "prop-types";
import UiImg from "@ui/UiImg";
import { useDispatch } from "react-redux";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteActive from "./img/favorite-fill.svg";

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
        <img
          src={personFavorite ? iconFavoriteActive : iconFavorite}
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          alt="Favorite"
        />
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
