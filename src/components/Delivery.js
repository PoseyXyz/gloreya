import React from 'react';
import { FaCartPlus, FaPlusCircle } from 'react-icons/fa';
import delivery from '../images/products/delivery.svg'

function Delivery() {
    return (
        <div className="bg-brand-pink px-4 py-20 md:px-8">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-7">
                <div className="flex flex-col gap-4">
                    <span className="text-brand-red text-lg font-extrabold mini-headline">DELIVERY</span>
                    <h3 className="text-black font-black text-2xl md:text-5xl">Choose what you want, we'll drop it off</h3>
                    <p className="text-gray-500">Too busy to show up at any of our stores?? No worries. Let's help you svae time with our instant delivery service.</p>
                    <button className="btn font-bold self-start flex items-center gap-3"><i><FaCartPlus /></i> ORDER ONLINE</button>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                <img src={delivery}/>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-brand-red text-lg font-extrabold text-right mini-headline">REWARDS</span>
                    <h3 className="text-black font-black text-2xl md:text-5xl text-right">Earn points every time you order online</h3>
                    <p className="text-gray-500 text-right">With each online order, you get rewarded with loyalty points which can be used to redeem free meals and other prizes from us.</p>
                    <button className="btn font-bold flex items-center gap-3 self-end"><i><FaPlusCircle/></i> LEARN MORE</button>
                </div>

            </div>
        </div>
    );
}

export default Delivery;