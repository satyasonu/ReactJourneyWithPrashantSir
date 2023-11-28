import React from 'react'
import styles from './FoodInput.module.css'

const FoodInput = ({handleKeyDown}) => {
  return (
    <input type='text' placeholder='Enter Food Name ↵' className={styles.foodInput} onKeyDown={handleKeyDown} />
  )
}

export default FoodInput