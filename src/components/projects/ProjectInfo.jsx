import { projectList } from "./utils/list";
import styles from "./styles.module.css";

export const ProjectInfo = () => {
  console.log(projectList);
  return (
    <div className={styles["container-project"]}>
      {projectList.map((project) => {
        return (
          <div key={project.name} className={styles["div-project"]}>
            <div className={styles["project-img"]}>
              <img alt={project.name} src={project.img} style={{ width: "100%" }} />
            </div>

            <p className={styles["project-info"]}> {project.name}</p>
          </div>
        );
      })}
    </div>
  );
};
