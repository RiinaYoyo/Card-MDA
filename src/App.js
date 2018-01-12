import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
import Firebase from 'firebase';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Cards/>
      </div>
    );
  }
}

export default App;
