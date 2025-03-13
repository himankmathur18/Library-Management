import React, { Component } from 'react'
import Questions from './Questions'
import Photo from './Photo'
import AboutUs from './AboutUs'
export default class Bookspages extends Component {
  render() {
    return (
      <div>
        <div className='flex border-2 border-black m-[1rem] rounded-xl '>
          <Questions />
          <Photo />
        </div>
          <AboutUs/>
      </div>
    )
  }
}
