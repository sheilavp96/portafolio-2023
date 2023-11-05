import React from "react";
import AboutText from "./AboutText";
import perfil from "../../assets/imagen.png";
//import perfil from "../../assets/mia.png";
import styles from "./styles.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <AboutText />
      <div
        style={{
          width: "40%",
          // //   margin: "auto",
          // //   display: "flex",
          // //   flexDirection: "center",
          // //   alignItems: "center",
          // //   padding: "0px",
        }}
      >
        <img src={perfil} alt="foto-perfil" className={styles.photo} />
      </div>
    </div>
  );
}
