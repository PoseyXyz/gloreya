import React from 'react';
import Navbar from './Navbar';
import bannerImg from '../images/burger1.png'
import { FaPlus } from 'react-icons/fa';

function Banner(props) {
    return (
        <div className="bg-brand-yellow relative overflow-hidden flex px-4 sm:px-8 xl:px-0">
            <div className="xl:w-1/6 2xl:w-1/4 w-0">
               
            </div>
            <div className="w-3/4 flex-1">
            <Navbar/>
        <div className="sm:pt-12 flex justify-end">
            
            <div className="z-30 relative h-full w-screen flex flex-col">
           
            
           <div className="relative grid grid-cols-2 w-full gap-0 items-center">
                <div className="flex flex-1 justify-center flex-col w-2/4 gap-2">
                    <div style={{color:'#EB452F'}} className="flex gap-4 items-center">
                    <p className="text-sm font-bold sm:font-extrabold sm:text-xl md:text-2xl">NEW IN MENU</p>
                    <span style={{background:'#EB452F'}} className="h-1 hidden lg:block w-1/4 mt-2"></span>
                    </div>
                    <h1 className="text-white tracking-wide text-2xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black">DOUBLE <br></br> MUSHROOM <br></br> BURGER</h1>
                    <div className=" rect w-80 sm:w-106 md:w-128 lg:w-180 2xl:w-192 bg-brand-red text-white rounded-lg relative z-30 px-6 py-3 sm:py-4 md:py-6 flex gap-3 justify-between">
                      <ul className="list-disc flex gap-6 sm:gap-4 justify-around items-center w-full text-xs text sm:text-base md:text-xl lg:mx-4 lg:px-8 lg:text-2xl font-bold">
                            <li>Bacon</li>
                            <li>Cheese</li>
                            <li>Mushroom</li>
                        </ul>
                        <div className="mx-2 md:mx-4">
                        <p>Only</p>
                        <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">$15.99</h2>

                        </div>
                        <div className="bg-white rounded-full p-2 md:p-4 absolute -right-4 top-1/4 md:-right-8 sm:top-7">
                            <i className="text-brand-red font-black text-xl md:text-3xl"><FaPlus/></i>
                        </div>
                    </div>
                </div>
                <div className="">
                <img src={bannerImg} alt="" className=""/>
                </div>
                   
                
            </div>
           </div>
        

{/*             
           <div className="w-screen bg-red-500">
           w-screen px-2 sm:px-4 lg:bg-green-500 lg:w-11/12 2xl:w-10/12
           <div className="bg-yellow-500 z-50 relative container flex flex-1 flex-col-reverse md:flex-row items-center p-4 space-x-12">
                <div className="w-3/6 flex justify-center flex-col">
                    <p className="text-brand-red font-semibold text-3xl">NEW IN MENU</p>
                    <h1 className="text-white text-8xl font-black">DOUBLE <br></br> MUSHROOM <br></br> BURGER</h1>
                    <div>
                        <ul>
                            <li>Bacon</li>
                            <li>Cheese</li>
                            <li>Mushroom</li>
                        </ul>
                        <p>Only</p>
                        <h2>$15.99</h2>
                    </div>
                </div>
                <div className="bg-yellow-100 w-3/6">
                <img src={bannerImg} alt="" className=""/>
                </div>
                   
                
            </div>
           </div> */}
            <div className="donut absolute z-10 rounded-full border-brand-yellow bg-transparent">

            </div>
        </div>
            </div>
        </div>
    );
}

export default Banner;