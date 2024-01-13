import { CardMedia, Chip, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
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
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.name} <ArrowOutwardIcon />
                  </a>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {project.description}
                </Typography>
              </div>
              {project.lenguaje.length > 0 && (
                <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}>
                  {project.lenguaje.map((leng) => (
                    <Chip
                      sx={{
                        border: "1px solid #373a3c",
                        color: "#373a3c",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                      key={leng.name}
                      label={leng.name}
                      variant="outlined"
                      className={styles.chip}
                    />
                  ))}
                </Stack>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
