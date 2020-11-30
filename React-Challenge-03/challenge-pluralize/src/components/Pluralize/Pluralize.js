import React from 'react'
import classes from './Pluralize.css'
var pluralize = require('pluralize')


const pluralized = (props) => {
  let text = pluralize('bicycle', props.number)
  return (
    <div className={classes.Pluralize}>
      <h1>Pluralizing</h1>
      <h5>With color changing!</h5>
      <p style={{
        borderColor: props.colorBorder, 
        color: props.colorText
      }}>
        <span>{props.number}</span> {text}
      </p>
    </div>
  )
}

export default pluralized