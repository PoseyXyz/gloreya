import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import bbq from '../images/bbq.png'

function ComboCard(props) {
    return (
        <div className="flex flex-col items-center border border-gray-200 py-10 px-4 gap-1">
        <h3 className="text-xl font-extrabold my-2">Smoked Brisket</h3>
        <p className="text-gray-700 tracking-wide">Pulled Pork, Beer Braised</p>
        <p className="text-gray-700 tracking-wide">Brisket, & Quarter</p>
        <h3 className='text-brand-red text-2xl font-extrabold my-4'>$40</h3>
        <button className="py-3 mb-4 px-6 rounded-3xl text-brand-red bg-white shadow-xl font-bold self-center flex items-center gap-3"><FaCartPlus/> ORDER NOW</button>
        <div>
            <img src={bbq}/>
        </div>
    </div>
    );
}

export default ComboCard;