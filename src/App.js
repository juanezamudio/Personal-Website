import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import CoverPhoto from './components/CoverPhoto/CoverPhoto';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar></NavBar>
      <div className="wrapper">
        <CoverPhoto></CoverPhoto>
        <div class="main">
          <Carousel></Carousel>
          <Footer></Footer>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
