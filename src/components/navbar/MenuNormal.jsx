import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import styles from "./styles.module.css";

export const MenuNormal = (listAppBar) => {
  return (
    <div className={styles["list-menu"]}>
      {listAppBar?.listAppBar.map((list) =>
        list.id === "04" ? (
          <a
            style={{ color: "#000000", textDecoration: "none" }}
            href="https://www.linkedin.com/in/sheilavp96/"
            target="_blank"
            rel="noreferrer"
            key={list.id}
          >
            {" "}
            <b>{list.id} </b>
            {list.name}
          </a>
        ) : (
          <Link key={list.id} to={`section--${list.id}`} smooth={true} duration={1000}>
            <Typography key={list.id} variant="p" component="div" className={styles.list}>
              <b>{list.id} </b>

              {list.name}
            </Typography>
          </Link>
        )
      )}
    </div>
  );
};
