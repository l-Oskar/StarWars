import PropTypes from "prop-types";
import styles from "./PersonImg.module.scss";

const PersonImg = ({ img, name }) => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt={name + "_photo"} />
      </div>
    </>
  );
};

PersonImg.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default PersonImg;
