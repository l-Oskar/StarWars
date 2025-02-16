import PropTypes from "prop-types";
import { useState } from "react";
import { getOtherImg } from "@services/getPeopleData";
import styles from "./UiImg.module.scss";

const UiImg = ({ cl, img, name, id }) => {
  const [error, setError] = useState(false);

  const fallbackImage = getOtherImg(id);
  return (
    <img
      className={`${styles[cl] || ""}`}
      src={error ? img : fallbackImage}
      alt={name + "_photo"}
      onError={() => setError(true)}
    />
  );
};

UiImg.propTypes = {
  cl: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default UiImg;
