import './App.css';
import React, { Component } from 'react'
import Navebar from './Components/Navebar';
import Home from './Components/Homepage/Home';
import Bookspages from './Components/Books/Bookspages';
// import Photo from "./Components/Books/Photo";


export default class App extends Component {
  render() {
    return (
      <div>
        <Navebar/>
        <Home/>
        <Bookspages/>
        {/* <Photo/> */}
      </div>
    )
  }
}
