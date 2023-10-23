import React from "react";
import styles from "./styles.module.css";

const AboutText = () => {
  return (
    <div className={styles.divText}>
      <h1 style={{ color: "#6563ff", margin: "10px", fontSize: "40px" }}>
        Hi I'am Sheila
      </h1>
      <h3 style={{ color: "#696969", margin: "10px", fontSize: "22px" }}>
        Frontend developer
      </h3>
      <p style={{ margin: "10px", fontSize: "18px" }}>
        Biotechnology engineering student seeking professional practice to gain work
        experience in web development. Eager to apply my knowledge in CSS, html and
        JavaScript.
      </p>
    </div>
  );
};

export default AboutText;
