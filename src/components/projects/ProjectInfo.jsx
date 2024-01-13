import { CardContent, CardMedia, Typography } from "@mui/material";
import { projectList } from "./utils/list";
import styles from "./styles.module.css";

export const ProjectInfo = () => {
  console.log(projectList);
  return (
    <div className={styles["container-project"]}>
      {projectList.map((project) => {
        return (
          <div className={styles.card} key={project.name}>
            <CardMedia
              component="img"
              sx={{
                width: "30%",
                height: 140,
                objectFit: "contain",
                borderRadius: "5px",
              }}
              alt="Live from space album cover"
              image={project.img}
            />
            <div className={styles["card-text"]}>
              <div>
                <Typography component="div" variant="h5" className={styles.name}>
                  <strong>{project.name}</strong>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {project.description}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
