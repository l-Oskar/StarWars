import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import UiImg from "@ui/UiImg";

import styles from "./PeopleList.module.scss";

const PeopleList = ({ people }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {people.map(({ id, name, img }) => (
          <li className={styles.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <UiImg cl="people_list" img={img} name={name} id={id} />
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
