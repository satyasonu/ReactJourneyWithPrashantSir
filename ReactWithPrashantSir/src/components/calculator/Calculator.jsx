import React, { useState } from "react";
import styles from './Calculator.module.css'
import Display from './display/Display'
import ButtonsContainer from "./buttoncontainer/ButtonsContainer";

const Calculator = () => {
  
  const [inputVal, setInputValue] = useState("");

  const handleButton = (item) => {
    if(item === 'C'){
      setInputValue("")
    }else if(item === '='){
      const result = eval(inputVal);
      setInputValue(inputVal+item+result)
      // var lastChar = inputVal.slice(-1) ; // => "1"
      console.log(inputVal)
    }else{
      const newVal = inputVal + item;
      setInputValue(newVal)
    }
  };

   return (
    <center>
      <div className={styles.calculator}>
        <Display displayVal={inputVal}></Display>
        <ButtonsContainer handleButton={handleButton}></ButtonsContainer>
      </div>
    </center>
  );
};

export default Calculator;
