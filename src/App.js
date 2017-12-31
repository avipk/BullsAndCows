import React, { Component } from 'react';
import PinSlot from './components/PinSlot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<PinSlot value="4321"/>
      </div>
    );
  }
}

export default App;
