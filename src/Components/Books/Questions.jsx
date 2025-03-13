import React, { Component } from 'react';
// import Photo from './photo';
export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleDropdown = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    closeDropdown = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <div>
                <div className='text-left ml-[50px]'>
                    <p className='text-blue-800 text-3xl'>A Little More About This Web page</p>
                    <h1 className='font-bold text-5xl'>Frequently Asked Questions</h1>
                    <p className='text-5xl'>About Our Site</p>
                </div>
                <div className="flex flex-col">
                    <button onClick={this.toggleDropdown} className='border-2 border-black rounded-full p-2 bg-gray-400 text-white hover:bg-white hover:text-black font-bold text-2xl w-[30rem] m-[3rem]'>
                        {this.state.isOpen ? 'Frequently Asked Question One' : 'Frequently Asked Question One'}
                    </button>
                    {this.state.isOpen && (
                        <div className=' font-bold text-xl  text-white '>
                            <p className='border-2 border-black rounded-xl bg-gray-400 w-[30rem] ml-[3rem] text-center'>
                                Morbi Vehicula Arcu Et Pellentesque Tincidunt.
                                Nunc Ligula Nulla, Lobortis A Elementum Non, Vulputate Ut Arcu.
                                Aliquam Erat Volutpat. Nullam Lacinia Felis.
                            </p>
                        </div>
                    )}
                </div>
                {/* <Photo/> */}
            </div>
        );
    }
}