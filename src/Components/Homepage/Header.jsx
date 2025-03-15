import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='border-2 border-black rounded-xl m-[1.5rem] backdrop-blur-lg'>
                <div className='font-bold text-5xl text-center p-10'>
                    <h1>Available Books</h1>
                </div>
                <p className=' text-xl text-center m-7'>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt.</p>
            </div>
        )
    }
}
