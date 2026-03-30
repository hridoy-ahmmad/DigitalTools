import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Nav = () => {
    return (
        <div className=' bg-[#f2f2f2a1] shadow-sm'>
            <div className="navbar flex-col md:flex-row gap-5 md:gap-0 max-w-7xl mx-auto">
                <div className="navbar-start mr-48 md:mr-0 ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Testimonial</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="md:text-3xl text-xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
                        DigiTools
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-[#101727]">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Testimonial</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex  flex-col md:flex-row gap-3 p-5 md:p-0">
                    <div className='relative'>
                        <HiOutlineShoppingCart />
                        <p className='absolute -top-4 -left-2'>0</p>
                    </div>
                    <p>Login</p>
                    <button className="buttonPrimary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;