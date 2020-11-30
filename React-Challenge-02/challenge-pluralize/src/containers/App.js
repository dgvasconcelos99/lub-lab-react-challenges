import React, { Component } from 'react';
import Pluralized from '../components/Pluralize/Pluralize';

class App extends Component {
  render() {
    return(
      <div>
        <Pluralized number={3}/>
      </div>
    )
  }
}

export default App;
