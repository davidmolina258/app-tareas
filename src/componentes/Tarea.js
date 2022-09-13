import React, { useState } from "react";
import styles from "./mesaTarea.module.css";
import xbox from "../asset/icons8-xbox-x-30.png";

const Tarea = ({ valor, deleteTarea }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li
      onClick={() => setIsDone(true)}
      className={isDone ? styles.isDone : styles.tarea}
    >
      <p>{valor}</p>
      <span onClick={() => deleteTarea(valor)}>
        <img src={xbox} alt="xbox" />
      </span>
    </li>
  );
};

export default Tarea;
