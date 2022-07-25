import React, { useContext } from 'react';
import Navbar from './Navbar'
import { CgLayoutGridSmall } from 'react-icons/cg'
import { HavenContext } from '../Context';

function HalfBanner({ headline }) {
    const { setShowContactBar } = useContext(HavenContext)
    return (

        <div className="bg-brand-yellow relative overflow-hidden flex flex-col px-4 sm:px-8 xl:px-0">
            {/* <div className="grid grid-cols-4">
                <div className="xl:col-span-1">

                </div>
                <div className="col-span-4 xl:col-span-3">
                    <Navbar />
                </div>
            </div> */}
            <div className='flex overflow-visible items-center container gap-4'>
                <div className='container'>
                    <Navbar />
                </div>
                <div className="hidden absolute 3xl:2/12 w-14% right-0 h-10 bg-brand-red rounded-l-3xl p-4 mt-4 ml-10 2xl:flex items-center"><button onClick={() => setShowContactBar(true)}><i className="text-white text-4xl"><CgLayoutGridSmall /></i></button></div>

            </div>
            <div className="flex items-center justify-center relative z-30" style={{ height: '40vh' }}>
                <h1 className="text-white tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-barlow">{headline}</h1>
            </div>

            <div className="donut absolute z-10 rounded-full border-brand-yellow bg-transparent">

            </div>
        </div>



    );
}

export default HalfBanner;

//money, jobs, whichiscloser, course