import React, { useContext, useState } from 'react';
import { FaCartPlus, FaBars } from 'react-icons/fa'
import { CgLayoutGridSmall } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { HavenContext } from '../Context';
import Logo from '../images/logo.png'

function Navbar(props) {
    const { cart, setShowContactBar, miniNavbarOpen, setMiniNavbarOpen } = useContext(HavenContext)
    return (
        <div className="relative">

            <section className="flex justify-end">
                <header className="flex items-center relative z-40 w-full">
                    <nav className="flex w-full justify-between pb-8 pt-12 items-center">
                        <ul className="hidden md:flex space-x-8 text-sm">
                            <Link to='/' style={{ color: '#E7272D' }} className="nav-li">HOME</Link>
                            <Link to='/menu' className="nav-li">MENU</Link>
                            <Link to='/cart' className="nav-li">CART</Link>
                            {/* <li className="nav-li">SHOP</li> */}
                            <Link to='/contact' className="nav-li">CONTACT</Link>
                            <Link to='/products' className="nav-li hidden">ONLINE ORDER</Link>

                        </ul>
                        <button className="md:hidden" onClick={()=>setMiniNavbarOpen(!miniNavbarOpen)}>
                            <i className="text-white text-xl"><FaBars /></i>
                        </button>
                        <div>
                            <img src={Logo} className="w-20 h-24"/>

                        </div>
                        <div className="flex items-center space-x-10">
                            <Link to='/products'>
                                <button className="btn animate-bounce hidden md:block text-xs font-bold">ONLINE ORDER</button>
                            </Link>

                            <Link to='/cart' className="flex gap-1 justify-center">
                                <i className="text-white text-xl"><FaCartPlus /></i>
                                <span className="bg-brand-red px-2 flex items-center justify-center rounded-full"><span className="text-white text-xs font-bold">{cart.length}</span></span>
                            </Link>
                        </div>

                    </nav>
                    <div className="hidden w-5/12 h-10 bg-brand-red rounded-l-3xl p-4 mt-4 ml-10 lg:flex items-center"><button onClick={() => setShowContactBar(true)}><i className="text-white text-4xl"><CgLayoutGridSmall /></i></button></div>
                </header>
            </section>
            <div className={miniNavbarOpen?'miniNavbarOpen':'miniNavbarClosed'}>
                <Link to='/' style={{ color: '#E7272D' }} className="nav-li">HOME</Link>
                <Link to='/menu' className="nav-li">MENU</Link>
                <Link className="nav-li">SHOP</Link>
                <Link to='/contact' className="nav-li">CONTACT</Link>
                <Link to='/products' className="nav-li hidden">ONLINE ORDER</Link>
            </div>

        </div>
    );
}

export default Navbar;