import styles from "./styles.module.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import { animateScroll as scroll } from "react-scroll";

// import arrow from "../../assets/right-arrow.svg";

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
        <Fab variant="extended">
          <NavigationIcon onClick={() => scroll.scrollToTop()} />
        </Fab>
      </div>
    </div>
  );
}
{
  /* <div className="social-media">
        <a
          className="social"
          href="https://github.com/sheilavp96"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="fig icon-git">
            <img className="github-icon img-g" src={github} />
          </figure>
        </a>
        <a
          className="social"
          href="https://www.linkedin.com/in/sheilavp96/"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="fig icon-lin">
            <img className="link-icon img-g" src={linkedin} />
          </figure>
        </a>
        {/* <img
          src={arrow}
          alt="arrow"
          className="up"
          onClick={() => scroll.scrollToTop()}
        /> */
}
{
  /* </div> */
}
