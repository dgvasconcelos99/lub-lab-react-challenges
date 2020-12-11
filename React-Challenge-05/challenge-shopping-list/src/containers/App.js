import React, { useEffect, useState } from 'react';

import SelectColor from '../components/SelectColor/SelectColor';
import ShoppingList from '../components/ShoppingList/ShoppingList';
import colors from '../components/utility/colors'
import shoppingItems from '../components/utility/shopping-items'

const app = () => {
  const [shoppingList, setShoppingList] = useState([])
  const [listColors, setListColors] = useState([])
  const [selectedColor, setSelectedColor] = useState('#282828')
  const [selectedTextColor, setSelectedTextColor] = useState('#fff')
  
  useEffect(() => {
    setListColors(colors)
    setShoppingList(shoppingItems)
  }, [])

  const handleSelectedColors = (color, textColor) => {
    setSelectedColor(color)
    setSelectedTextColor(textColor)
  }

  return(
    <div>
      <ShoppingList 
        bgColor={selectedColor}
        textColor={
          selectedTextColor
        }
        shoppingItems={shoppingList}
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
