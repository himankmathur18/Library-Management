import './App.css';
import React, { Component } from 'react'
import Navebar from './Components/Navebar';
// import Home from './Components/Homepage/Home';
// import Bookspages from './Components/Books/Bookspages';
import Importent from './Components/Importent'
import Welcomepage from './Components/Welcomepage';
import { Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div className='font-[Elephant]'>
        <Navebar />
        <Routes>
          <Route path='/home' element={<Welcomepage />} />
          <Route path='/books' element={<Importent/>} />
          {/* <Route path='/logout' element={} /> */}
        </Routes>
      </div>
    )
  }
}
