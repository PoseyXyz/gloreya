import React from 'react';
import ingredientsImg from '../images/ingredients.png'

function BurgerComponenets() {
    return (
        <div className="bg-brand-black px-4 py-12">
            <div className="container flex flex-col gap-12">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-brand-red text-lg font-extrabold mini-headline">INGREDIENTS</p>
                    <h3 className="text-white font-black text-2xl text-center md:text-5xl tracking-wide">Baked with natural ingredients</h3>
                </div>
                <div className="text-white flex flex-col sm:grid grid-cols-3 gap-8 my-12">
                    <div className="flex flex-col gap-20">
                        <div>
                            <h5 className="text-2xl font-bold mb-4">Fresh<span className="text-brand-red"> Bread</span></h5>
                            <p>As well known and we are very busy all days. Advice you to call us before arriving so we.</p>
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold mb-4">Lettuce<span className="text-brand-red"> Leaf</span></h5>
                            <p>As well known and we are very busy all days. Advice you to call us before arriving so we.</p>
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold mb-4">Glow<span className="text-brand-red"> Cheese</span></h5>
                            <p>As well known and we are very busy all days. Advice you to call us before arriving so we.</p>
                        </div>
                    </div>

                    {/*Image */}
                    <div className="flex items-center">
                        <img className="" src={ingredientsImg} alt="" />
                    </div>

                    <div className="flex flex-col gap-20">
                        <div>
                            <h5 className="text-2xl font-bold mb-4">Mild<span className="text-brand-red"> Butter</span></h5>
                            <p>As well known and we are very busy all days. Advice you to call us before arriving so we.</p>
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold mb-4">Sleek<span className="text-brand-red"> Onion</span></h5>
                            <p>As well known and we are very busy all days. Advice you to call us before arriving so we.</p>
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold mb-4">Sliced<span className="text-brand-red"> Beef</span></h5>
                            <p>As well known and we are very busy all days. Advice you to call us before arriving so we.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
}

export default BurgerComponenets;