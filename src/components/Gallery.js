import React from 'react';
import gallery1 from '../images/gallery1.jpg'
import gallery2 from '../images/gallery2.jpg'
import gallery3 from '../images/gallery3.jpg'
import gallery4 from '../images/gallery4.jpg'
import gallery5 from '../images/gallery5.jpg'
import gallery6 from '../images/gallery6.jpg'

function Gallery(props) {
    return (
        <div className="">
            <div className="container flex flex-col gap-12 my-4">
            <div className="flex flex-col items-center justify-center">
                    <p className="text-brand-red text-lg font-extrabold mini-headline">GALLERY</p>
                    <h3 className="text-black font-black text-2xl md:text-5xl tracking-wide">Burger gallery</h3>
                </div>
                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-4 sm:gap-4 md:gap-7">
                    <div className="flex items-center">
                    <div>
                        <img src={gallery1} className="rounded-lg"/>
                    </div>
                    </div>

                    <div className="flex flex-col gap-4">
                    <div>
                        <img src={gallery2} className="rounded-lg"/>
                    </div>
                    <div>
                        <img src={gallery3} className="rounded-lg"/>
                    </div>
                    </div>

                    <div className="flex flex-col gap-4 md:mt-12">
                    <div>
                        <img src={gallery4} className="rounded-lg"/>
                    </div>
                    <div>
                        <img src={gallery5} className="rounded-lg"/>
                    </div>
                    </div>
                  
                    <div className="flex md:items-center">
                    <div>
                        <img src={gallery6} className="rounded-lg"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;