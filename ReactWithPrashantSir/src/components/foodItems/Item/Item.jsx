import React from "react";
import styles from "./Item.module.css";

const Item = ({ item, handleBuyButton, bought }) => {
  return (
    <div>
      <li key={item} className={`list-group-item ${styles.item} ${bought && 'active'}`}>
        {item}
        <button className={`${styles.buybtn} `} onClick={handleBuyButton}>
          Buy
        </button>
      </li>
    </div>
  );
};

export default Item;
