import React, { Component } from 'react';
import Navbar from './Navbar';
import Books from './Books';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Books />
      </div>
    );
  }
}

export default App;
