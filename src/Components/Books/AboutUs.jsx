import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="border-2 border-black m-[1rem] rounded-xl">
                <div className='text-left ml-[50px]'>
                    <p className='text-blue-800 text-3xl'>Testimonials</p>
                    <h1 className='font-bold text-5xl'>What Users Says</h1>
                    <p className='text-5xl'>About Us</p>
                </div>
                <div className='m-[3rem] border border-black rounded-xl bg-gray-400 text-white text-2xl'>
                    <p className='p-2'>
                        Go through life with moderation and balance. A group of companions gathers by the shore, bound together by tradition and new beginnings. Elegance shines, blending grace with harmony.
                        <p className='mt-[20px]'>
                            The foundation is set with stability, yet flexibility remains. Softness meets strength, creating a balance of motion and stillness.
                        </p>
                    </p>

                </div>
            </div>
        )
    }
}
