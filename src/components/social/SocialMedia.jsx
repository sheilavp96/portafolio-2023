import styles from "./styles.module.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { Fab, createTheme } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import { animateScroll as scroll } from "react-scroll";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
    },
  },
});
export default function SocialMedia() {
  return (
    <div className={styles["section-social"]}>
      <div className={styles["social-media"]}>
        <a
          className={styles["social"]}
          href="https://github.com/sheilavp96"
          target="_blank"
          rel="noreferrer"
        >
          <figure className={styles["fig"]}>
            <img className={styles["img-g"]} src={github} />
          </figure>
        </a>
        <a
          className={styles["social"]}
          href="https://www.linkedin.com/in/sheilavp96/"
          target="_blank"
          rel="noreferrer"
        >
          <figure className={styles["fig"]}>
            <img className={styles["img-g"]} src={linkedin} />
          </figure>
        </a>
        <Fab
          variant="extended"
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: "35px",
            },
          }}
        >
          <NavigationIcon onClick={() => scroll.scrollToTop()} />
        </Fab>
      </div>
    </div>
  );
}
