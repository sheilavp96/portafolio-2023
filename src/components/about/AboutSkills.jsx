import { Chip, ListItem } from "@mui/material";
import styles from "./styles.module.css";
import { listSkills } from "./utils/list";

export const AboutSkills = () => {
  return (
    <div className={styles["about-skills"]}>
      <h3>My Skills</h3>
      <div className={styles.container_skill}>
        {listSkills.map((skill) => {
          return (
            <ListItem className={styles["list-item"]} key={skill.name}>
              <Chip label={skill.name} variant="outlined" className={styles.chip} />
            </ListItem>
          );
        })}
      </div>
    </div>
  );
};
