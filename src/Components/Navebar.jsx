import React, { Component } from 'react'
import { FaBookOpen} from "react-icons/fa";

export default class Navebar extends Component {
    render() {
        return (

            <div className='border font-bold text-3xl p-4 bg-gray-400 rounded-xl m-3'>
                <nav className='flex justify-between'>
                    <div className='mt-[5px] hover:text-white'><FaBookOpen /></div>
                    <h1 className='ml-[-35rem] hover:text-white'>Liberary</h1>
                    <div className=' text-right'>
                        <a href="/Home" type="button" className='mr-10 hover:text-white'>HOME</a>
                        <a href="/Books" type="button" className='mr-10 hover:text-white'>BOOKS</a>
                        <a href="/Logout" type="button" className='mr-10 hover:text-white'>LOGOUT</a>
                        <a href="/Contact" type="button" className='mr-10 hover:text-white'>CONTACT</a>
                    </div>
                </nav>
            </div>

        )
    }
}
