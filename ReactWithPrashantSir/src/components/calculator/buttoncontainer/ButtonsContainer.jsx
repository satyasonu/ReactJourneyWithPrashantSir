import React from 'react'
import styles from './ButtonsContainer.module.css'
import Buttons from '../buttons/Buttons'

const ButtonsContainer = ({handleButton}) => {

  let symbols = [ 'C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0']
  return (
    <div className={styles.buttonContainer}>
          <Buttons handleButton={handleButton} symbols={symbols} />
      </div>
  )
}

export default ButtonsContainer