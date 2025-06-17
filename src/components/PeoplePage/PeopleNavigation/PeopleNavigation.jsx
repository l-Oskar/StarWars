import PropTypes from "prop-types";
import { useTheme } from "@context/ThemeProvider";
import UiButton from "@ui/UiButton";

import styles from "./PeopleNavigation.module.scss";

const PeopleNavigation = ({ currentPage, totalPages, onPageChange }) => {
  const isTheme = useTheme().theme;

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.peopleNav}>
      <UiButton
        text="Previous"
        handleChange={handlePrev}
        disabled={currentPage !== 1}
        theme={isTheme}
      />
      <span className={styles.pageNumber}>
        Page {currentPage} of {totalPages}
      </span>
      <UiButton
        text="Next"
        handleChange={handleNext}
        disabled={currentPage === totalPages}
        theme={isTheme}
      />
    </div>
  );
};

PeopleNavigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PeopleNavigation;
