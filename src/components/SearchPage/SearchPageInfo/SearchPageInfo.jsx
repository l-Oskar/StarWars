import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UiImg from "@ui/UiImg";

import styles from "./SearchPageinfo.module.scss";

const SearchPageinfo = ({ people }) => {
  return (
    <>
      {people.length ? (
        <ul className={styles.list__container}>
          {people.map(({ id, name, img }) => (
            <li className={styles.list__item} key={id}>
              <Link to={`/people/${id}`}>
                <UiImg cl="search_page" id={id} name={name} img={img} />
                <p className={styles.person__name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.person__comment}>No result!</h2>
      )}
    </>
  );
};

SearchPageinfo.propTypes = {
  people: PropTypes.array,
};

export default SearchPageinfo;
