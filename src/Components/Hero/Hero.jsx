import React from 'react';
import dott from "/Group 5.svg"
import hero from "../../assets/banner.png"
import { FiPlay } from 'react-icons/fi';

const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-9 justify-between items-center gap-5 my-10 md:my-22 p-4 flex-col md:flex-row'>
            <div className='flex-5'>
                <div className='py-2 px-4 bg-[#E1E7FF] inline-block rounded-full'>
                    <div className='flex gap-1 items-center'>
                        <img src={dott} alt="dott" className='h-4 w-4' />
                        <p className='textStyle'> New: AI-Powered Tools Available</p>
                    </div>
                </div>
                <h2 className='md:text-4xl lg:text-7xl text-2xl font-extrabold my-5 text-[#101727d8]'>Supercharge Your  Digital Workflow</h2>
                <p className='primaryText'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today. <br />Explore Products
                </p>
                <div className='flex items-center gap-5 my-5'>
                    <button className='buttonPrimary'>Explore Products</button>
                    <button className='text-purple-700 border border-purple-700  py-3 px-4 rounded-full  flex items-center justify-between gap-1 text-[16px] font-semibold transition hover:scale-95 duration'  >
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text bg-transparent text-2xl font-bold '><FiPlay />
                        </span>
                        <span>Watch Demo</span>
                    </button>
                </div>
            </div>
            <div className='flex-4 justify-end hidden md:flex' >
                <img src={hero} alt="" className='object-contain'/>
            </div>
            <div className='md:hidden h-42 w-full  ' >
                <img src={hero} alt="" className='h-full w-full object-cover '/>
            </div>
        </div>
    );
};

export default Hero;