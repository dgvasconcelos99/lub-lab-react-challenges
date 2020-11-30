import React from 'react'
import classes from './Pluralize.css'
var pluralize = require('pluralize')


const pluralized = (props) => {
  let text = pluralize('bicicle', props.number)
  return (
    <div className={classes.Pluralize}>
      <h1>Pluralizing</h1>
      <p><span>{props.number}</span> {text}</p>
    </div>
  )
}

export default pluralized