import ChoseSide from "@components/HomePage/ChoseSide";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.main__text}>
          Welcome to the Star Wars fan hub!
          <br /> Explore detailed character information, search for your
          favorites, and add them to your personal collection. Customize your
          experience with dynamic theme changes and immerse yourself in the
          galaxy far, far away!
        </p>
        <ChoseSide />
      </div>
    </>
  );
};

export default HomePage;
