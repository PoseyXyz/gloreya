import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import reviewImg1 from '../images/review1.png'

function Testimonial(props) {
    return (
        <div className="px-4 py-16 md:px-4 relative">
            <div className="hidden lg:block bg-brand-red h-52 w-4/12 rounded-r-md absolute overflow-hidden bottom-0"></div>
            <div className="container z-20 relative flex flex-col gap-12">

                <div className="flex flex-col items-center justify-center">
                    <p className="text-brand-red text-lg font-extrabold">INGREDIENTS</p>
                    <h3 className="text-black font-black text-2xl md:text-5xl tracking-wide">Clients review</h3>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div>
                       <img src={reviewImg1} className="w-screen"/> 
                    </div>
                    <div className="mt-4 flex flex-col gap-4 px-4">
                        <i className="text-6xl text-gray-200"><FaQuoteLeft/></i>
                        <p className="text-gray-800 font-bold text-2xl">A small river named Duden flows by their place and splies it with the necessary regalia. It is a paradisemic country, in which</p>
                        <div className="flex flex-col">
                            <span className="flex gap-2 items-center">
                            <h4 className="text-2xl font-black">Nina Margaret</h4>
                            <div style={{height:'1px', width:'2rem'}} className="mt-1 bg-brand-red"></div>
                            </span>
                            <p className="text-gray-500 text-sm mt-2">CEO, Apple</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Testimonial;