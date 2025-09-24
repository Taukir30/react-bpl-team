import React from 'react';
import navImg from '../../assets/logo.png'
import coinIcon from '../../assets/Currency.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar w-[85%] mx-auto my-5 p-0.5 sora">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className=" text-xl">
                        <img className='w-[60px]' src={navImg} alt="" />
                    </a>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 text-gray-500 text-sm">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>

                    </ul>
                    <div className="border border-gray-300 rounded-md px-3 py-2 text-black text-sm font-semibold flex gap-1 items-center"><span>600000</span> Coin <img className='h-[16px] mx-1' src={coinIcon} alt="" /> </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;