import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";
import { listAppBar } from "./utils/list";
export default function Navbar() {
  return (
    <AppBar position="static" style={{ width: "100%" }}>
      <Toolbar className={styles.appbar}>
        {listAppBar.map((list) => (
          <Typography key={list.id} variant="h6" component="div" className={styles.list}>
            {list.name}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
}
