import React, { Component } from 'react';

import ShoppingList from '../components/ShoppingList/ShoppingList';

class App extends Component {
  render() {

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
          bgColor="#8CB0F0"
          shoppingItems={shoppingItems}
        />
      </div>
    )
  }
}

export default App;
