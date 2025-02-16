import PropTypes from "prop-types";
import UiImg from "@ui/UiImg";
import { useDispatch } from "react-redux";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";
import styles from "./PersonImg.module.scss";

const PersonImg = ({ img, name, id }) => {
  const dispatch = useDispatch();

  const set = () => {
    dispatch(
      setPersonToFavorite({
        [id]: {
          name,
          img,
        },
      })
    );
  };
  const remove = () => {
    dispatch(removePersonFromFavorite());
  };

  return (
    <>
      <div className={styles.container}>
        <UiImg cl="img" img={img} name={name} id={id} />
      </div>
      <button onClick={set}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  );
};

PersonImg.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default PersonImg;
