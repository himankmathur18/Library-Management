import './App.css';
import React, { Component } from 'react'
import Navebar from './Components/Navebar';
import Home from './Components/Homepage/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navebar/>
        <Home/>
      </div>
    )
  }
}
