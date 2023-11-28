import React, { useState } from "react";
import Item from "../Item/Item";
import styles from "./Items.module.css";

const Items = ({ fooditems }) => {

  const [activeItems, setActiveItems] = useState([])

  const handleBuyButton = (index) => {
    setActiveItems([...activeItems, index])    
    console.log(index)
  }

  return (
    <ul className={`list-group ${styles.items}`}>
      {fooditems.map((item, index) => (
        <Item key={index } item={item} handleBuyButton={() => handleBuyButton(index)} bought={activeItems.includes(index)} ></Item>
      ))}
    </ul>
  );
};

export default Items;
