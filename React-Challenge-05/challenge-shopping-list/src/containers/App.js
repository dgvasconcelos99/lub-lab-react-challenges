import React, { useEffect, useState } from 'react';

import SelectColor from '../components/SelectColor/SelectColor';
import ShoppingList from '../components/ShoppingList/ShoppingList';
import colors from '../components/utility/colors'

const app = () => {
  const [listColors, setListColors] = useState([])
  const [selectedColor, setSelectedColor] = useState('#282828')
  const [selectedTextColor, setSelectedTextColor] = useState('#fff')
  
  useEffect(() => {
    setListColors(colors)
  }, [])

  const handleSelectedColors = (color, textColor) => {
    setSelectedColor(color)
    setSelectedTextColor(textColor)
  }

  const shoppingItems = [
    {
      name: 'bread',
      quantity: 2,
      price: 5.5
    },
    {
      name: 'milk',
      quantity: 3,
      price: 3
    },
    {
      name: 'egg',
      quantity: 30,
      price: 0.5
    },
  ]

  return(
    <div>
      <ShoppingList 
        bgColor={selectedColor}
        textColor={
          selectedTextColor
        }
        shoppingItems={shoppingItems}
      />
      <SelectColor 
        listColors={listColors}
        setListColors={setListColors}
        selectedColor={selectedColor}
        handleSelectedColor={
          (color, textColor) => 
            handleSelectedColors(color, textColor)
        }
      />
    </div>
  )
}

export default app;
