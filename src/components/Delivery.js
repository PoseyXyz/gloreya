import React from 'react';
import { FaCartPlus, FaPlusCircle } from 'react-icons/fa';
import delivery from '../images/products/delivery.svg'

function Delivery(props) {
    return (
        <div className="bg-brand-pink px-4 py-20 md:px-8">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <p className="text-brand-red text-lg font-extrabold">DELIVERY</p>
                    <h3 className="text-black font-black text-2xl md:text-5xl tracking-wide">Choose what you want, select a pick up time</h3>
                    <p className="text-gray-500">As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat.</p>
                    <button className="btn font-bold self-start flex items-center gap-3"><i><FaCartPlus /></i> ORDER ONLINE</button>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                <img src={delivery}/>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-brand-red text-lg font-extrabold text-right">REWARD</p>
                    <h3 className="text-black font-black text-2xl md:text-5xl tracking-wide text-right">Earn points every time you order online</h3>
                    <p className="text-gray-500 text-right">As well known and we are very busy all days advice you. advice you to call us of before arriving, so we can guarantee your seat.</p>
                    <button className="btn font-bold flex items-center gap-3 self-end"><i><FaPlusCircle/></i> LEARN MORE</button>
                </div>

            </div>
        </div>
    );
}

export default Delivery;