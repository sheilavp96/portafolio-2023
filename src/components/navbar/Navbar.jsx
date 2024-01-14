import { Link } from "react-scroll";
import { Box, Toolbar, Typography, AppBar, Avatar, Stack } from "@mui/material";
import { listAppBar } from "./utils/list";
import perfil from "../../assets/perfil.png";
import styles from "./styles.module.css";
import "animate.css/animate.min.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          boxShadow: "0 10px 100px rgba(0,0,0,.1)",
          padding: "20px",
          background: "#ffffff",
        }}
      >
        <Toolbar className={styles.toolbar}>
          <Stack className={styles.stack} direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={perfil} sx={{ width: 56, height: 56 }} />
            <b
              style={{ fontSize: "18px" }}
              className=" animate__animated animate__fadeInRightBig"
            >
              Sheila Vázquez Pérez
            </b>
          </Stack>
          <div className={styles["list-menu"]}>
            {listAppBar.map((list) => (
              <Link
                key={list.id}
                to={`section--${list.id}`}
                smooth={true}
                duration={1000}
              >
                <Typography
                  key={list.id}
                  variant="p"
                  component="div"
                  className={styles.list}
                >
                  <b>{list.id} </b>

                  {list.name}
                </Typography>
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
