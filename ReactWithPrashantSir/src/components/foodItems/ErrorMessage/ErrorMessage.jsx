import React from 'react'

const ErrorMessage = ({fooditems}) => {
  return (
  <>{fooditems.length === 0 && <h4 style={{margin: '10px'}}>I am hungry</h4>}</>
  )
}

export default ErrorMessage