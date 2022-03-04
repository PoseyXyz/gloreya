import React from 'react';
import { FaCartPlus } from 'react-icons/fa';


function ComboCard({name,img}) {
    return (
        <div className="relative border-2 hover:border-0 border-dotted cursor-pointer group rounded-lg duration-100 border-gray-200 ">
       <div className="flex flex-col z-20 relative items-center py-10 px-4 gap-4 group">
       <h3 className="text-xl font-extrabold my-2 group-hover:text-white">{name}</h3>
        <p className="text-gray-700 tracking-wide group-hover:text-white">Pulled Pork, Beer Braised</p>
        <p className="text-gray-700 tracking-wide group-hover:text-white">Brisket, & Quarter</p>
        <h3 className='text-brand-red text-2xl font-extrabold my-4 group-hover:text-white'>$40</h3>
        <button className="py-3 mb-4 px-6 rounded-3xl text-brand-red group-hover:bg-brand-yellow group-hover:text-white bg-white shadow-xl font-bold self-center flex items-center gap-3"><FaCartPlus/> ORDER NOW</button>
        <div className="">
            <img className="group-hover:transform group-hover:scale-105" src={img}/>
        </div>
       </div>
        <div className="absolute z-10 top-0 right-0 rounded-lg group-hover:bg-brand-red transform group-hover:translate-y-20 bg-transparent w-full h-full"></div>
    </div>
    );
}

export default ComboCard;