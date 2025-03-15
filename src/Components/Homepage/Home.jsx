import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Books from './BookList'

export default class Home extends Component {
  render() {
    return (
      <div className='font-[Elephant]'>
        <Header/>
        <div className='border-2 border-black m-5 rounded-2xl flex backdrop-blur-lg '>
        <Sidebar/>
        <Books/>
        </div>
      </div>
    )
  }
}
