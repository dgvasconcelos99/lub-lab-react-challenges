import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

import classes from './ShoppingList.css'
var pluralize = require('pluralize')

const shoppingList = (props) => {

  const [isDropped, setIsDropped] = useState(false)

  const quantityItems = () => {
    return props.shoppingItems.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  const descriptionItems = () => {
    return props.shoppingItems.reduce((total, item, index) => {
      let name = item.quantity + ' ' + pluralize(item.name, item.quantity)
      return total.concat(
        index === props.shoppingItems.length - 1 ? 
        ' and ' + name + '.' : 
        index === 0 ? name : ', ' + name
      )
    }, '')
  }

  const calculatePriceItem = (item) => {
    let finalPrice = item.price * item.quantity
    return finalPrice.toLocaleString(
      'pt-BR', 
      {style: 'currency', 'currency': 'BRL'}
    )
  }

  const calculateTotalPrice = () => {
    const result =  props.shoppingItems.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)

    return result.toLocaleString(
      'pt-BR', 
      {style: 'currency', 'currency': 'BRL'}
    )
  }

  let shoppingItems = props.shoppingItems
    .map(item => {
      return (
        <li key={item.name}>
          <span>{item.quantity}x {pluralize(item.name, item.quantity)}:</span>
          <span className={classes.Price}>{calculatePriceItem(item)}</span> 
        </li>
      )
    })

  const detailsList = (
    <div>
      <ul>
        {shoppingItems}
      </ul>
      <p className={classes.Summary}>Summary</p>
      <p className={classes.Summary}>
        {quantityItems()} {pluralize('item', quantityItems())}: {descriptionItems()}
      </p>
      <h5 className={classes.FinalPrice}>Total: {calculateTotalPrice()}</h5>
    </div>
  )

  const buttonDrop = (
    isDropped ? 
      <BsChevronUp 
        onClick={() => setIsDropped(!isDropped)}
        className={classes.ButtonDrop}
        size="2rem"
      /> : 
      <BsChevronDown 
        onClick={() => setIsDropped(!isDropped)}
        className={classes.ButtonDrop}
        size="2rem"
      />
  )
  return (
    <div className={classes.Main}>
      <div 
        className={classes.ShoppingList}
        style={{
          backgroundColor: props.bgColor, 
          color: props.textColor}}
      >
        <div className={classes.Title}>
          <p>Shopping list: {quantityItems()} products</p>
          {buttonDrop}
        </div>
        {isDropped ? detailsList : null}
      </div>
    </div>
  )
}

export default shoppingList