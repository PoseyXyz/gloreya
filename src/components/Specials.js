import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Slider from './Slider';
import bbq from '../images/bbq.png'
import ComboCard from './ComboCard';
function Specials(props) {
    return (
        <div>
     <div className="container flex flex-1 flex-col gap-3 md:gap-6  items-center my-8 p-6">
     <div className="flex flex-col items-center gap-1 py-2">
                    <p className="text-brand-red text-lg font-extrabold">SPECIALS COMBO</p>
                    <h3 className="text-black font-black text-2xl md:text-5xl tracking-wide">Our delicious burgers</h3>
                </div>
                <div className="overflow-hidden whitespace-nowrap">
                <div className="grid grid-cols-4 overflow-hidden gap-2">
                    <ComboCard/>
                    <ComboCard/>
                    <ComboCard/>
                    <ComboCard/>
                    <ComboCard/>
                    <ComboCard/>
                </div>
                </div>
               
           
</div>
        </div>
    );
}

export default Specials;