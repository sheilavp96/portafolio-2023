import { AboutInfo } from "./AboutInfo";
import { AboutText } from "./AboutText";
import styles from "./styles.module.css";
// import { listSkills } from "../about/utils/list";

export const About = () => {
  return (
    <div className={styles.container}>
      <AboutText />
      <AboutInfo />
      {/* <div className={styles.container_skill}>
        {listSkills.map((skill) => {
          return (
            <div key={skill.name} className={styles.item}>
              <figure className={styles.item_img}>
                <img src={skill.img} />
              </figure>
              <h3 className={styles.text}>{skill.name}</h3>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
