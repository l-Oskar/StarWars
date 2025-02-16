import PropTypes from "prop-types";
import UiImg from "@ui/UiImg";
import { Link } from "react-router";

import styles from "./PeopleList.module.scss";

const PeopleList = ({ people }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {people.map(({ id, name, img }) => (
          <li className={styles.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <UiImg cl="person__photo" img={img} name={name} id={id} />
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
