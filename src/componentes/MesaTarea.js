import React, { useState } from "react";
import Formulario from "./Formulario";
import styles from "./mesaTarea.module.css";
import Tareas from "./Tareas";

const initialMesa = null;

const MesaTarea = () => {
  const [input, setInput] = useState(initialMesa);

  const deleteTarea = (tarea) => {
    const newData = input.filter((el) => el !== tarea);
    setInput(newData);
  };
  return (
    <article className={styles.container}>
      <h2>Mis Tareas</h2>
      <Formulario setInput={setInput} input={input} />
      {input ? (
        <Tareas input={input} deleteTarea={deleteTarea} />
      ) : (
        <article className={styles.sinTareas}>Sin Tareas</article>
      )}
    </article>
  );
};

export default MesaTarea;
