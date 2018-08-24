import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;

    //var canvas = document.getElementById("id");
    var ctx = e.currentTarget.getContext("2d");
    ctx.beginPath();
    ctx.arc(xPosition,yPosition, 40, 0, 2* Math.PI);
    ctx.stroke();
    console.log(xPosition, yPosition);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hell</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <canvas id = "canvas" className="myCanvas" onClick = {this.handleClick} ></canvas>
      </div>
    );
  }
}

export default App;
