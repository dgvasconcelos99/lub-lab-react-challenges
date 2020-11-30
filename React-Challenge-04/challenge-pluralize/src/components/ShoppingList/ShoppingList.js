import React from 'react'
import classes from './ShoppingList.css'
var pluralize = require('pluralize')

const shoppingList = (props) => {

  const quantityItems = () => {
    return Object.keys(props.shoppingItems).length
  }

  const totalItems = () => {
    return Object.values(props.shoppingItems).reduce((total, num) => {
      return total + num
    })
  }

  const descriptionItems = () => {
    let result = ''
    return Object.keys(props.shoppingItems).map((item, index) => {
      let quantityItem = props.shoppingItems[item]
      let name = quantityItem + ' ' + pluralize(item, quantityItem)
      return result.concat(
        index === Object.keys(props.shoppingItems).length - 1 
        ? ' and ' : ', ', name
      )
    })
  }

  const calculatePriceItem = (item) => {
    const priceItem = props.itemsPrices[item]
    const quantityItem = props.shoppingItems[item]
    const result = priceItem * quantityItem
    return result.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})
  }

  let shoppingItems = Object.keys(props.shoppingItems)
    .map(item => {
      return (
        <li key={item}>
          <span>{props.shoppingItems[item]}x {item}:</span><span className={classes.Price}>{calculatePriceItem(item)}</span> 
        </li>
      )
    })
  return (
    <div className={classes.Main}>
      <div 
        className={classes.ShoppingList}
        style={{backgroundColor: props.bgColor}}
      >
        <h1>Shopping</h1>
        <p>Shopping list: {quantityItems()}</p>
        <ul>
          {shoppingItems}
        </ul>
        <p className={classes.Summary}>Summary</p>
        <p className={classes.Summary}>{totalItems()} {pluralize('item', totalItems())}: {descriptionItems()}</p>
      </div>
    </div>
  )
}

export default shoppingList