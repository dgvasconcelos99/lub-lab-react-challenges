import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'

import classes from './RadioButton.css'

const radioButton = props => {
  const {markedbutton} = props
  return (
    <button
      {...props}
      className={classes.Button}
    >
      {markedbutton ? (
        <AiFillCheckCircle 
          size="2.5rem"
          color={props.color}
        />
      ) : (
        <BsCircle 
          size="2.5rem"
          color={props.color}
        />
      )}
      {props.children}
    </button>
  )
}

export default radioButton