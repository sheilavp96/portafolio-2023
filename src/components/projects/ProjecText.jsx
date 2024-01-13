import styles from "./styles.module.css";

export const ProjecText = () => {
  return (
    <div>
      <div className={styles["div-text"]}>
        <h2 className={styles.title}>PROJECTS</h2>
        <p className={styles.line} />
        <span className={styles.text}>
          Here you will find some of the personal projects that I created
        </span>
      </div>
    </div>
  );
};
