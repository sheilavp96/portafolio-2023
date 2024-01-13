import styles from "./styles.module.css";
import "animate.css";
import "animate.css/animate.min.css";

export default function Home() {
  return (
    <div className={`${styles.divText} animate__animated animate__backInLeft`}>
      <p className={styles.title}>Hello, my name is Sheila</p>
      <h1>Frontend developer</h1>
      <p className={styles.text}>
        A Frontend focused Web Developer building the Frontend of Websites and Web
        Applications that leads to the success of the overall product
      </p>
    </div>
  );
}
