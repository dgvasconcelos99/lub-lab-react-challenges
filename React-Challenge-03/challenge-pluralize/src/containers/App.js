import React, { Component } from 'react';
import Pluralized from '../components/Pluralize/Pluralize';

class App extends Component {
  render() {
    return(
      <div>
        <Pluralized 
          number={3} 
          colorBorder="#F48024"
          colorText="#8CB0F0"
        />
      </div>
    )
  }
}

export default App;
