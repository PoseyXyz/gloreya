import React from 'react';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';
import gallery1 from '../images/gallery1.jpg'
import gallery2 from '../images/gallery2.jpg'
import gallery3 from '../images/gallery3.jpg'

function News(props) {
    return (
        <div className="bg-brand-gray py-16 relative" style={{ background: "#F2F2F2" }}>
            <div className="bg-white h-2/4 absolute bottom-0 w-screen overflow-hidden" style={{ background: '#f8f9fa' }}></div>
            <div className="container flex flex-col gap-12 relative z-30">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-brand-red text-lg font-extrabold">NEWS</p>
                    <h3 className="text-black font-black text-2xl md:text-5xl tracking-wide">This is all about burger</h3>
                </div>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
                    <div className="news-card hover:cursor-pointer flex flex-col shadow-lg hover:shadow-2xl rounded-lg px-4 py-1 bg-gray duration-1000 hover:bg-white">
                        <div className="flex flex-1 relative -top-6">
                            <img src={gallery1} className="rounded-lg w-screen shadow-lg" />
                        </div>
                        <div className="flex flex-col px-2 gap-2 mb-4 mt-2">
                            <div className="font-light text-xs text-brand-red flex flex-col gap-3 sm:flex-row sm:gap-4">
                                <span className="flex gap-2 font-light items-center"><i><FaUser /></i> WPTWUSER</span>
                                <span className="flex gap-2 items-center"><i><FaClock /></i>4, SEPTEMBER, 2021</span>
                            </div>
                            <div className='flex flex-col gap-3 mt-2'>
                                <h3 className='font-bold text-lg'>Labor Depar rules</h3>
                                <p className="text-gray-600">You're cooking a meal, especially a holiday meal, to be</p>
                                <span className="flex gap-2 items-center text-sm more-btn"><button className="font-bold">READ MORE</button>
                                    <i className="font-thin"><FaArrowRight /></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="news-card hover:cursor-pointer flex flex-col shadow-lg hover:shadow-2xl rounded-lg px-4 py-1 bg-gray duration-1000 hover:bg-white">
                        <div className="flex flex-1 relative -top-6">
                            <img src={gallery1} className="rounded-lg w-screen shadow-lg" />
                        </div>
                        <div className="flex flex-col px-2 gap-2 mb-4 mt-2">
                            <div className="font-light text-xs text-brand-red flex flex-col gap-3 sm:flex-row sm:gap-4">
                                <span className="flex gap-2 font-light items-center"><i><FaUser /></i> WPTWUSER</span>
                                <span className="flex gap-2 items-center"><i><FaClock /></i>4, SEPTEMBER, 2021</span>
                            </div>
                            <div className='flex flex-col gap-3 mt-2'>
                                <h3 className='font-bold text-lg'>Labor Depar rules</h3>
                                <p className="text-gray-600">You're cooking a meal, especially a holiday meal, to be</p>
                                <span className="flex gap-2 items-center text-sm more-btn"><button className="font-bold">READ MORE</button>
                                    <i className="font-thin"><FaArrowRight /></i>
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="news-card hover:cursor-pointer flex flex-col shadow-lg hover:shadow-2xl rounded-lg px-4 py-1 bg-gray duration-1000 hover:bg-white">
                        <div className="flex flex-1 relative -top-6">
                            <img src={gallery1} className="rounded-lg w-screen shadow-lg" />
                        </div>
                        <div className="flex flex-col px-2 gap-2 mb-4 mt-2">
                            <div className="font-light text-xs text-brand-red flex flex-col gap-3 sm:flex-row sm:gap-4">
                                <span className="flex gap-2 font-light items-center"><i><FaUser /></i> WPTWUSER</span>
                                <span className="flex gap-2 items-center"><i><FaClock /></i>4, SEPTEMBER, 2021</span>
                            </div>
                            <div className='flex flex-col gap-3 mt-2'>
                                <h3 className='font-bold text-lg'>Labor Depar rules</h3>
                                <p className="text-gray-600">You're cooking a meal, especially a holiday meal, to be</p>
                                <span className="flex gap-2 items-center text-sm more-btn"><button className="font-bold">READ MORE</button>
                                    <i className="font-thin"><FaArrowRight /></i>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default News;