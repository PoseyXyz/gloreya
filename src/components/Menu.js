import React from 'react';
import burgerIcon from '../images/burgerIcon.png'
import pizzaIcon from '../images/pizzaIcon.png'
import chickenIcon from '../images/chickenIcon.png'
import beveragesIcon from '../images/beveragesIcon.png'
import coffeeIcon from '../images/coffeeIcon.png'
import oishiiCard from '../images/oishiiCard.png'
import bwb from '../images/bwbCard.png' 
import fatboy from '../images/fatboyCard.png'
import allDay from  '../images/allDayCard.png'
import twenty from '../images/20Card.png'


function Menu(props) {
    return (
        <div className="px-4 py-12">
            <div className="container flex flex-col items-center gap-16">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-brand-red text-lg font-extrabold mini-headline">MENU</p>
                    <h3 className="text-center font-black text-2xl md:text-5xl tracking-wide">Choose your combo and order now</h3>
                </div>

                {/*Images */}
                <div className="flex flex-wrap gap-8 md:gap-12 justify-center">
                    <div className="flex flex-col gap-2 items-center justify-between flex-1">
                        <img src={burgerIcon} />
                        <p>BURGERS</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-between flex-1">
                        <img src={pizzaIcon} />
                        <p>PIZZAS</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-between flex-1">
                        <img src={chickenIcon} />
                        <p>CHICKEN</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-between flex-1">
                        <img src={beveragesIcon} />
                        <p>BEVERAGES</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-between flex-1">
                        <img src={coffeeIcon} />
                        <p>COFFEE</p>
                    </div>
                </div>
                {/* <div className="flex flex-col gap-4">
                    <div className="flex gap-20">
                        <div className="flex flex-col gap-4 items-center flex-1">
                            <img src={burgerIcon} />
                        </div>
                        <div className="flex flex-col gap-4 items-center flex-1">
                            <img src={pizzaIcon} />

                        </div>
                        <div className="flex flex-col gap-4 items-center flex-1">
                            <img src={chickenIcon} />

                        </div>
                        <div className="flex flex-col gap-4 items-center flex-1">
                            <img src={beveragesIcon} />

                        </div>
                        <div className="flex flex-col gap-4 items-center flex-1">
                            <img src={coffeeIcon} />
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <p>Burgers</p>
                        <p>Pizzas</p>
                        <p>Chicken</p>
                        <p>Beverages</p>
                        <p>Coffee</p>
                    </div>
                </div> */}


                {/*Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-1">
                        <div className="bg-brand-red py-1 px-3 self-start rounded-2xl">
                            <p className="text-white text-xs">RECOMMENDED</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <h3 className="text-lg lg:text-lg font-bold mb-4">Smoked Brisket Sandwich</h3>
                                    <div style={{ height: '1px' }} className="w-2/4 border-gray-400 mt-4 border-dashed border"></div>
                                </div>
                                <p className="text-gray-500">Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side</p>
                            </div>
                            <div>
                                <p className="text-brand-red text-xl font-extrabold">$39</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="bg-brand-red py-1 px-3 self-start rounded-2xl">
                            <p className="text-white text-xs">RECOMMENDED</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <h3 className="text-lg lg:text-lg font-bold mb-4">Pulled Chicken Sandwich</h3>
                                    <div style={{ height: '1px' }} className="w-2/4 border-gray-400 mt-4 border-dashed border"></div>
                                </div>
                                <p className="text-gray-500">Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side</p>
                            </div>
                            <div>
                                <p className="text-brand-red text-xl font-extrabold">$39</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="hidden bg-brand-red py-1 px-3 self-start rounded-2xl">
                            <p className="text-white text-xs">RECOMMENDED</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <h3 className="text-lg lg:text-lg font-bold mb-4">Ocean Spray Cranberry Juice</h3>
                                    <div style={{ height: '1px' }} className="w-2/4 border-gray-400 mt-4 border-dashed border"></div>
                                </div>
                                <p className="text-gray-500">Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side</p>
                            </div>
                            <div>
                                <p className="text-brand-red text-xl font-extrabold">$39</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="hidden bg-brand-red py-1 px-3 self-start rounded-2xl">
                            <p className="text-white text-xs">RECOMMENDED</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <h3 className="text-lg lg:text-lg font-bold mb-4">Canada Dry Ginger Ale</h3>
                                    <div style={{ height: '1px' }} className="w-2/4 border-gray-400 mt-4 border-dashed border"></div>
                                </div>
                                <p className="text-gray-500">Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side</p>
                            </div>
                            <div>
                                <p className="text-brand-red text-xl font-extrabold">$39</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="bg-brand-red py-1 px-3 self-start rounded-2xl">
                            <p className="text-white text-xs">NEW</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <h3 className="text-lg lg:text-lg font-bold mb-4">6 Piece Mozzarella Sticks</h3>
                                    <div style={{ height: '1px' }} className="w-2/4 border-gray-400 mt-4 border-dashed border"></div>
                                </div>
                                <p className="text-gray-500">Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side</p>
                            </div>
                            <div>
                                <p className="text-brand-red text-xl font-extrabold">$39</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="hidden bg-brand-red py-1 px-3 self-start rounded-2xl">
                            <p className="text-white text-xs">RECOMMENDED</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <h3 className="text-lg lg:text-lg font-bold mb-4">Martinelli's Apple Juice</h3>
                                    <div style={{ height: '1px' }} className="w-2/4 border-gray-400 mt-4 border-dashed border"></div>
                                </div>
                                <p className="text-gray-500">Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side</p>
                            </div>
                            <div>
                                <p className="text-brand-red text-xl font-extrabold">$39</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="hidden bg-brand-red py-1 px-3 self-start rounded-2xl">
                            <p className="text-white text-xs">RECOMMENDED</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <h3 className="text-lg lg:text-lg font-bold mb-4">Peanutty Blast Smoothie</h3>
                                    <div style={{ height: '1px' }} className="w-2/4 border-gray-400 mt-4 border-dashed border"></div>
                                </div>
                                <p className="text-gray-500">Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side</p>
                            </div>
                            <div>
                                <p className="text-brand-red text-xl font-extrabold">$39</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="bg-brand-red py-1 px-3 self-start rounded-2xl">
                            <p className="text-white text-xs">NEW</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <h3 className="text-lg lg:text-lg font-bold mb-4">Mango Mania Smoothie</h3>
                                    <div style={{ height: '1px' }} className="w-2/4 border-gray-400 mt-4 border-dashed border"></div>
                                </div>
                                <p className="text-gray-500">Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with your choice of side</p>
                            </div>
                            <div>
                                <p className="text-brand-red text-xl font-extrabold">$39</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Cards */}
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <img src={oishiiCard}/>
                        </div>
                        <div>
                            <img src={bwb}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <img className="w-full" src={fatboy}/>
                        </div>
                        <div>
                            <img className="w-full" src={allDay}/>
                        </div>
                        <div>
                            <img className="w-full" src={twenty}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Menu;