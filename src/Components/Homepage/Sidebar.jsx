import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div className='text-black flex flex-col gap-2 w-[25rem] m-2 '>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>All Books</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>Computer Science</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>Philosophy & Psychology</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>Religion</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>Science</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>Technology</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>Arts & Recreation</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>Literature</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>History & Geography</button>
        <button className='border rounded-full p-2 bg-gradient-to-r from-white to-gray-500 font-bold text-2xl'>Business</button>
      </div>
    )
  }
}