import React from "react";
import styles from "./mesaTarea.module.css";
import Tarea from "./Tarea";

const Tareas = ({ input, deleteTarea }) => {
  return (
    <ul className={styles.tareaContainer}>
      {input.map((el, index) => (
        <Tarea key={index} valor={el} deleteTarea={deleteTarea} />
      ))}
    </ul>
  );
};

export default Tareas;
