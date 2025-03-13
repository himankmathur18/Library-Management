import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div className='text-black flex flex-col gap-2 w-[25rem] m-2 '>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>All Books</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>Computer Science</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>Philosophy & Psychology</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>Religion</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>Science</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>Technology</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>Arts & Recreation</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>Literature</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>History & Geography</button>
        <button className='border-2 border-black rounded-full p-2 bg-gray-400 font-bold text-2xl text-white hover:bg-white hover:text-black'>Business</button>
      </div>
    )
  }
}