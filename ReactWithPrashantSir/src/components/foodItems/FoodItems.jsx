import React, { useState } from "react";
import Items from "./Items/Items";
import styles from './FoodItems.module.css'
import FoodInput from "./FoodInput/FoodInput";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const FoodItems = () => {

  const [fooditems, setFoodItems] = useState([])
  
  const [text, setText] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      const newFoodItem = e.target.value;
      setText(newFoodItem)
      setFoodItems([newFoodItem, ...fooditems])
      e.target.value = '';
    }
  }

  return (
    <div className={styles.foodcontainer}>
      <h1 className={styles.heading}>FoodItems</h1>
      <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
      <ErrorMessage fooditems = {fooditems}></ErrorMessage>
      { text && <span className={styles.textspan}>User entered {text}</span>}
      <Items fooditems = {fooditems}></Items>
    </div>
  );
};

export default FoodItems;
