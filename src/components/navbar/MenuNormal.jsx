import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import styles from "./styles.module.css";

export const MenuNormal = ({ listAppBar }) => {
  return (
    <div className={styles["list-menu"]}>
      {listAppBar?.map((list) => (
        <Link key={list.id} to={`section--${list.id}`} smooth={true} duration={1000}>
          <Typography key={list.id} variant="p" component="div" className={styles.list}>
            <b>{list.id} </b>

            {list.name}
          </Typography>
        </Link>
      ))}
    </div>
  );
};
