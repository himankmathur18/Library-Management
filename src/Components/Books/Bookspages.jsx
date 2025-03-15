import React, { Component } from 'react'
import Questions from './Questions'
import Photo from './Photo'
import AboutUs from './AboutUs'
// import Reviews from './Reviews'
export default class Bookspages extends Component {
  render() {
    return (
      <div >
        <div className='flex border-2 border-black m-[1rem] rounded-xl backdrop-blur-lg'>
          <Questions />
          <Photo />
        </div>
        <div className='flex border-2 border-black m-[1rem] rounded-xl backdrop-blur-lg'>
          <AboutUs/>
          {/* <Reviews/> */}
        </div>
      </div>
    )
  }
}
