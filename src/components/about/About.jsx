import { AboutInfo } from "./AboutInfo";
import { AboutText } from "./AboutText";
import styles from "./styles.module.css";

export const About = () => {
  return (
    <div id="section--02" className={styles.container}>
      <AboutText />
      <AboutInfo />
    </div>
  );
};
