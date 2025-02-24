import withU from "./gif/with_u.gif";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          The dark side of the force has won. <br />
          We cannot display data.
          <br />
          Come back when we fix everything...
        </p>
        <img className={styles.gif} src={withU} alt="Error GIF" />
      </div>
    </>
  );
};

export default ErrorMessage;
