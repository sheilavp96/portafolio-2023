import { Box, Toolbar, AppBar, Avatar, Stack } from "@mui/material";
import { listAppBar } from "./utils/list";

import perfil from "../../assets/perfil.png";
import styles from "./styles.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import "animate.css/animate.min.css";
import MenuBurguer from "./MenuBurguer";
import { MenuNormal } from "./MenuNormal";

export default function Navbar() {
  const matches = useMediaQuery("(max-width:710px)");
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
            <b className={`" animate__animated animate__fadeInRightBig" ${styles.name}`}>
              Sheila Vázquez Pérez
            </b>
          </Stack>
          {matches ? (
            <MenuBurguer listAppBar={listAppBar} />
          ) : (
            <MenuNormal listAppBar={listAppBar} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
