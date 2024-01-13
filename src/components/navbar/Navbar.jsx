import { Box, Toolbar, Typography, AppBar } from "@mui/material";
import { listAppBar } from "./utils/list";
import { Avatar, Stack } from "@mui/material";
import perfil from "../../assets/perfil.png";
import styles from "./styles.module.css";
import "animate.css/animate.min.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          boxShadow: "0 10px 100px rgba(0,0,0,.1)",
          padding: "30px",
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
              <Typography
                key={list.id}
                variant="p"
                component="div"
                className={styles.list}
              >
                <b>{list.id} </b>

                {list.name}
              </Typography>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
