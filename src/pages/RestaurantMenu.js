import React, { useState } from 'react';
import HalfBanner from '../components/HalfBanner';
import productImage from '../images/products/product1.jpg'
import oishiiCard from '../images/oishiiCard.png'
import bwb from '../images/bwbCard.png' 
import fatboy from '../images/fatboyCard.png'
import allDay from  '../images/allDayCard.png'
import twenty from '../images/20Card.png'
import Footer from '../components/Footer';

function RestaurantMenu(props) {
    const [menuData] = useState(
      
            [
                {   
                    id:1,
                    name:"Smoked Brisket Sandwich",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:39,
                    recommended:true,
                    type:"burgers"
                },
                {   
                    id:2,
                    name:"Pulled Chicken Sandwich",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:12,
                    recommended:true,
                    type:"burgers"
                },
                {   
                    id:3,
                    name:"Ocean Spray Cranberry Juice",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:39,
                    recommended:false,
                    type:"beverages"
                },
                {   
                    id:4,
                    name:"Canada Dry Ginger Ale",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:39,
                    recommended:false,
                    type:"beverages"
                },
                {   
                    id:5,
                    name:"6 Piece Mozzarella Sticks",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:10,
                    recommended:true,
                    type:"chickens"
                },
                {   
                    id:6,
                    name:"Martinelli's Apple Juice",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:11,
                    recommended:false,
                    type:"beverages"
                },
                {   
                    id:7,
                    name:"Fatboy Combo",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:40,
                    recommended:false,
                    type:"burgers"
                },
                {   
                    id:8,
                    name:"Japanese Oishii Burger",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:11,
                    recommended:false,
                    type:"burgers"
                },
                {   
                    id:9,
                    name:"Double Decker",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:11,
                    recommended:false,
                    type:"burgers"
                },
                {   
                    id:10,
                    name:"Flame Mushroom Burger",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:11,
                    recommended:false,
                    type:"burgers"
                },
                {   
                    id:11,
                    name:"Cappuccino",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:2,
                    recommended:false,
                    type:"coffees"
                },
                {   
                    id:12,
                    name:"Pepperoni Pizza",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:11,
                    recommended:false,
                    type:"pizzas"
                },
                {   
                    id:13,
                    name:"Flamin hot",
                    desc:"Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side",
                    price:11,
                    recommended:false,
                    type:"pizzas"
                }
            ]
    )
    return (
        <>
            <HalfBanner headline="Menu" />
            <div className="container py-8 px-8">
                <div className="mt-24">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-brand-red text-lg font-extrabold mini-headline">MENU</p>
                        <h3 className="text-center font-black text-2xl md:text-5xl tracking-wide">Burger</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {menuData.filter(menuItem => menuItem.type === 'burgers').map(menuItem => (
                            <div className="flex gap-4">
                                <div className="w-4/12">
                                    <img src="http://placehold.jp/150x150.png" className="rounded-lg" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="bg-brand-red py-1 px-3 self-start rounded-2xl mb-2" style={{ display: menuItem.recommended ? 'block' : 'none' }}>
                                        <p className="text-white text-xs">RECOMMENDED</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex flex-col">
                                            <div className="flex gap-2">
                                                <h3 className="text-lg lg:text-lg font-bold mb-2">{menuItem.name}</h3>
                                                <div style={{ height: '1px' }} className="border-gray-400 mt-4 border-dashed border flex-1"></div>
                                            </div>
                                            <p className="text-gray-500">{menuItem.desc}</p>
                                        </div>
                                        <div>
                                            <p className="text-brand-red text-xl font-extrabold">${menuItem.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))}

                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 place-items-center px-4 md:px-0">
                    <img src={oishiiCard}/>
                    <img src={bwb}/>
                </div>            


                <div className="mt-24">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-brand-red text-lg font-extrabold">menu</p>
                        <h3 className="text-center font-black text-2xl md:text-5xl tracking-wide">Pizzas</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {menuData.filter(menuItem => menuItem.type === 'pizzas').map(menuItem => (
                            <div className="flex gap-4">
                                <div className="w-4/12">
                                    <img src="http://placehold.jp/150x150.png" className="rounded-lg" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="bg-brand-red py-1 px-3 self-start rounded-2xl mb-2" style={{ display: menuItem.recommended ? 'block' : 'none' }}>
                                        <p className="text-white text-xs">RECOMMENDED</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex flex-col">
                                            <div className="flex gap-2">
                                                <h3 className="text-lg lg:text-lg font-bold mb-2">{menuItem.name}</h3>
                                                <div style={{ height: '1px' }} className="border-gray-400 mt-4 border-dashed border flex-1"></div>
                                            </div>
                                            <p className="text-gray-500">{menuItem.desc}</p>
                                        </div>
                                        <div>
                                            <p className="text-brand-red text-xl font-extrabold">${menuItem.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))}

                    </div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 place-items-center px-4 md:px-0">
                    <img src={fatboy}/>
                    <img src={allDay}/>
                    <img src={twenty}/>
                </div>
             


                <div className="mt-24">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-brand-red text-lg font-extrabold">menu</p>
                        <h3 className="text-center font-black text-2xl md:text-5xl tracking-wide">Beverages</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {menuData.filter(menuItem => menuItem.type === 'beverages').map(menuItem => (
                            <div className="flex gap-4">
                                <div className="w-4/12">
                                    <img src="http://placehold.jp/150x150.png" className="rounded-lg" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="bg-brand-red py-1 px-3 self-start rounded-2xl mb-2" style={{ display: menuItem.recommended ? 'block' : 'none' }}>
                                        <p className="text-white text-xs">RECOMMENDED</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex flex-col">
                                            <div className="flex gap-2">
                                                <h3 className="text-lg lg:text-lg font-bold mb-2">{menuItem.name}</h3>
                                                <div style={{ height: '1px' }} className="border-gray-400 mt-4 border-dashed border flex-1"></div>
                                            </div>
                                            <p className="text-gray-500">{menuItem.desc}</p>
                                        </div>
                                        <div>
                                            <p className="text-brand-red text-xl font-extrabold">${menuItem.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))}

                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 place-items-center px-4 md:px-0">
                    <img src={oishiiCard}/>
                    <img src={bwb}/>
                </div> 


               

            </div>

            <Footer/>
        </>
    );
}

export default RestaurantMenu;