import styles from "./styles.module.css";
import { listSkills } from "./utils/list";

export const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frontend developer skills</h1>
      <div className={styles.container_skill}>
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
      </div>
    </div>
  );
};
