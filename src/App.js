import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
