import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import CoverPhoto from './components/CoverPhoto/CoverPhoto';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar></NavBar>
      <div className="wrapper">
        <CoverPhoto></CoverPhoto>
        <div class="main">
        
        </div>
      </div>
      </div>
    );
  }
}

export default App;
