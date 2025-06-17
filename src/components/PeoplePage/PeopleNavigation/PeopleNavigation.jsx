import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useTheme } from "@context/ThemeProvider";

import UiButton from "@ui/UiButton";

import styles from "./PeopleNavigation.module.scss";

const PeopleNavigation = ({ getResource, prevPage, nextPage, countePage }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);
  const isTheme = useTheme().theme;

  return (
    <>
      <div className={styles.peopleNav}>
        <Link to={`/people/?page=${countePage - 1}`} className={styles.button}>
          <UiButton
            text="Previous"
            handleChange={handleChangePrev}
            disabled={!prevPage}
            theme={isTheme}
          />
        </Link>
        <Link to={`/people/?page=${countePage + 1}`} className={styles.button}>
          <UiButton
            text="Next"
            handleChange={handleChangeNext}
            disabled={nextPage}
            theme={isTheme}
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
