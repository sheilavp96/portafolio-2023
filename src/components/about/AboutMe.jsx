import styles from "./styles.module.css";

export const AboutMe = () => {
  return (
    <div className={styles["about-me"]}>
      <h3>Get to know me!</h3>
      <p>
        Con más de 2 años de experiencia como <strong>Frontend Developer</strong>, he
        tenido la oportunidad de colaborar en una variedad de proyectos desafiantes y
        emocionantes.
        <br />
        <br />
        Mi conjunto de habilidades abarca una amplia gama de tecnologías y herramientas.
        Estas habilidades me permiten crear experiencias de usuario atractivas y
        funcionales que impulsan el éxito de los proyectos.
        <br />
        <br />
        Además de mi experiencia técnica, cuento con un certificado de{" "}
        <strong>AWS Cloud Practitioner</strong>, lo que me permite comprender y aplicar
        soluciones en la nube para proyectos escalables y eficientes.
      </p>
    </div>
  );
};
