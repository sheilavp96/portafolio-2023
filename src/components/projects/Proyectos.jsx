import { ProjecText } from "./ProjecText";
import { ProjectInfo } from "./ProjectInfo";
import styles from "./styles.module.css";

const Proyectos = () => {
  return (
    <div className={styles.container}>
      <ProjecText />
      <ProjectInfo />
    </div>
  );
};

export default Proyectos;
