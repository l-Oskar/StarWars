import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/people/?page=">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
