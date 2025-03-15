import React, { Component } from 'react'
import Home from './Homepage/Home'
import Bookspages from './Books/Bookspages'

export default class importent extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Bookspages/>
      </div>
    )
  }
}
