import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ symbols, handleButton }) => {
  

  return symbols.map((item) => (
    <button
      key={item}
      onClick={() => handleButton(item)}
      className={styles.button}
    >
      {item}
    </button>
  ));
};

export default Buttons;
