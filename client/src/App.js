import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <h1>Little-GadaBots-App</h1>
      <Footer />
      </div>
    );
  }
}

export default App;
