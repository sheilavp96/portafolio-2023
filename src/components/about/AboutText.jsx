import styles from "./styles.module.css";

export const AboutText = () => {
  return (
    <div className={styles["div-text"]}>
      <h2 className={styles.title}>ABOUT ME</h2>
      <p className={styles.line} />
      <span className={styles.text}>
        Here you will find more information about me, what I do, and my current skills
        mostly in terms of programming and technology
      </span>
    </div>
  );
};
