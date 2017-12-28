import React, { Component } from 'react';
import Pin from './components/Pin';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Pin value="1"/>
      	<Pin value="2"/>
      	<Pin value="3"/>
      	<Pin value="4"/>
      	<Pin value="5"/>
      	<Pin value="6"/>
      	<Pin value="7"/>
      </div>
    );
  }
}

export default App;
