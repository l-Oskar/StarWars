import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UiButton from "@ui/UiButton";

import styles from "./PeopleNavigation.module.scss";

const PeopleNavigation = ({ getResource, prevPage, nextPage, countePage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);

  return (
    <>
      <div className={styles.peopleNav}>
        <Link to={`/people/?page=${countePage - 1}`} className={styles.button}>
          <UiButton
            text="Previous"
            handleChange={handleChangePrev}
            disabled={!prevPage}
          />
        </Link>
        <Link to={`/people/?page=${countePage + 1}`} className={styles.button}>
          <UiButton
            text="Next"
            handleChange={handleChangeNext}
            disabled={!nextPage}
          />
        </Link>
      </div>
    </>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  countePage: PropTypes.number,
};

export default PeopleNavigation;
