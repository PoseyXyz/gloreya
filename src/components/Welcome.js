import React from 'react';
import { FaPeopleCarry, FaUserFriends, FaUsers } from 'react-icons/fa';
import PepsiImg from '../images/pepsi.png'

function Welcome(props) {
    return (
    
            <div>
            <div className="container flex flex-1 flex-col gap-3 md:gap-6 md:grid md:grid-cols-2 items-center my-8 xl:my-16 p-6">
                <div className="flex flex-col gap-1 py-2">
                    <p className="text-brand-red text-lg font-extrabold mini-headline">WELCOME</p>
                    <h3 className="text-black font-black text-2xl md:text-5xl tracking-wide">We make the best burgers in town</h3>
                    <p className="my-4 text-gray-500">Quis labore voluptate incididunt officia officia proident pariatur consequat fugiat occaecat proident. Adipisicing ut cillum ea pariatur. Excepteur cupidatat proident veniam do magna non consequat aute culpa aute.</p>
                    <button className="btn font-bold self-start flex items-center gap-3 hover:bg-brand-yellow duration-500"><i><FaUserFriends/></i> MORE ABOUT US</button>
                </div>
                <div className="flex flex-1">
                    <img src={PepsiImg} alt=''/>
                </div>
            </div>
        </div>
        
    );
}

export default Welcome;