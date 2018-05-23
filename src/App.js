import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FoodTruckTableContainer from './FoodTruckTableContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to <span style={{ color: 'green' }}>Foodio</span> the Food Truck Finder</h1>
        </header>
        <div className="App-main">
          {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
          <FoodTruckTableContainer />
        </div>
      </div>
    );
  }
}

export default App;
