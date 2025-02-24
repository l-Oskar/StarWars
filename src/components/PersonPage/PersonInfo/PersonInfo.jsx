import PropTypes from "prop-types";

import styles from "./PersonInfo.module.scss";

const PersonInfo = ({ personInfo }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}>
          {personInfo.map(
            ({ title, data }) =>
              data && (
                <li className={styles.list__item} key={title}>
                  <span className={styles.list__title}>{title} </span>:{" "}
                  {data == "n/a"
                    ? "Unknown"
                    : data.charAt(0).toUpperCase() + data.slice(1)}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
