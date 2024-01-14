import { AboutMe } from "./AboutMe";
import { AboutSkills } from "./AboutSkills";
import { AboutText } from "./AboutText";
import styles from "./styles.module.css";

export const About = () => {
  return (
    <div id="section--02" className={styles.container}>
      <AboutText />
      <div className={styles["div-info"]}>
        <AboutMe />
        <AboutSkills />
      </div>
    </div>
  );
};
