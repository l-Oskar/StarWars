import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { makeConcurrentRequest, changeHTTP } from "@utils/network";

import styles from "./PersonFilms.module.scss";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsName(response);
    })();
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}></ul>
        {filmsName &&
          filmsName
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(({ title, episode_id }) => (
              <li key={episode_id} className={styles.list__item}>
                <span className={styles.item__episode}>
                  Episode {episode_id}
                </span>
                <span className={styles.item__colon}> : </span>
                <span className={styles.item__title}> {title}</span>
              </li>
            ))}
      </div>
    </>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;
