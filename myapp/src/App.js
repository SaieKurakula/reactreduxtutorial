import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas name="Saie" age="35" belt="black" />
        <Ninjas name="Balto" age="30" belt="green" />
      </div>
    );
  }
}

export default App;
