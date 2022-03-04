import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import bbq from '../images/bbq.png'

function ComboCard(props) {
    return (
        <div className="flex flex-col items-center border hover:bg-red-500 border-dotted cursor-pointer group rounded-lg delay-75 duration-300 hover:mb-4 border-gray-200 py-10 px-4 gap-1">
        <h3 className="text-xl font-extrabold my-2 group-hover:text-white">Smoked Brisket</h3>
        <p className="text-gray-700 tracking-wide group-hover:text-white">Pulled Pork, Beer Braised</p>
        <p className="text-gray-700 tracking-wide group-hover:text-white">Brisket, & Quarter</p>
        <h3 className='text-brand-red text-2xl font-extrabold my-4 group-hover:text-white'>$40</h3>
        <button className="py-3 mb-4 px-6 rounded-3xl text-brand-red group-hover:bg-brand-yellow group-hover:text-white bg-white shadow-xl font-bold self-center flex items-center gap-3"><FaCartPlus/> ORDER NOW</button>
        <div className="group-hover:scale-125">
            <img  src={bbq}/>
        </div>
    </div>
    );
}

export default ComboCard;