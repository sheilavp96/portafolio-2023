import { AboutMe } from "./AboutMe";
import { AboutSkills } from "./AboutSkills";
import styles from "./styles.module.css";

export const AboutInfo = () => {
  return (
    <div className={styles["div-info"]}>
      <AboutMe />
      <AboutSkills />
    </div>
  );
};
