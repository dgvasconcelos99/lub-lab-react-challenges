import React, { Component } from 'react';

import ShoppingList from '../components/ShoppingList/ShoppingList';

class App extends Component {
  render() {
    const itemsPrices = {
      bread: 5.5,
      milk: 3,
      egg: 0.4
    }

    const shoppingItems = {
      bread: 2,
      milk: 3,
      egg: 30
    }

    return(
      <div>
        <ShoppingList 
          bgColor="#8CB0F0"
          shoppingItems={shoppingItems}
          itemsPrices={itemsPrices}
        />
      </div>
    )
  }
}

export default App;
