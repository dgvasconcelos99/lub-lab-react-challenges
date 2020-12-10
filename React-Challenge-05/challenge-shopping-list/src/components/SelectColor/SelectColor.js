import React from 'react'
import RadioButton from '../UI/RadioButton/RadioButton'

import classes from './SelectColor.css'

const selectColor = props => {
  return (
    <div className={classes.Main}>
      {props.listColors.map((colorItem, index) => (
        <div className={classes.DivRadio} key={index}>
          <RadioButton
            type="radio"
            value={colorItem.color}
            name={colorItem.name}
            color={colorItem.color}
            markedbutton={props.selectedColor === colorItem.color ? 1 : 0}
            onClick={() => props.handleSelectedColor(
              colorItem.color, 
              colorItem.textColor
            )}
          />
          <p 
            style={{justifySelf: 'center'}}
          >
            {colorItem.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default selectColor