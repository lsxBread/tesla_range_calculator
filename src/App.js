import React, { Component } from 'react';
import './App.scss'
import Header from './Header/Header'
import TeslaContainer from './TeslaContainer/TeslaContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaContainer />
      </div>
    );
  }
}

export default App;
