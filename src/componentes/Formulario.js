import React, { useState } from "react";
import styles from "./mesaTarea.module.css";

const Formulario = ({ input, setInput }) => {
  const [text, setText] = useState(null);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (text) {
      e.preventDefault();
      setInput(input ? [...input, text] : [text]);
      setText(null);
    } else {
      e.preventDefault();
      alert("Debes Agregar una Tarea");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tarea"
        className={styles.inputText}
        placeholder="Agrega una Tarea"
        onChange={handleText}
      />
      <input type="submit" value={"Agregar Tarea"} className={styles.submit} />
    </form>
  );
};

export default Formulario;
