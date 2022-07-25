import React, { useContext, useEffect, useState } from 'react';
import { FaCartPlus, FaCheck } from 'react-icons/fa';
import HalfBanner from '../components/HalfBanner';
import { HavenContext } from '../Context';

function ProductsFile() {
    const { price, values, handleChange, setPrice, minPrice, filterList, activeFilters, onFilterChange, maxPrice, filteredList, filterPriceRange, addToCart } = useContext(HavenContext)

    useEffect(() => {
        filterPriceRange()

    }, [price, values, activeFilters])



    const [showPopup, setShowPopup] = useState(false)



    const triggerProductAddedPopup = () => {
        setShowPopup(true)

        setTimeout(() => {
            setShowPopup(false)
        }, 3000)
    }

    return (
        <div className="relative">

            {/*dissapearing button */}
            <div className="bg-yellow-500 inline-block px-6 py-3 text-xs font-extrabold fixed z-50 top-16 right-1/30" style={{ 'display': showPopup ? 'inline-block' : 'none' }}><p>PRODUCT HAS BEEN ADDED</p></div>

            <HalfBanner headline="Products" />


            <div className="grid grid-cols-4 px-4 sm:px-8 xl:px-0">
                <div className="xl:col-span-1">

                </div>
                <div className="col-span-4 xl:col-span-3 flex flex-col gap-4 my-8 md:grid grid-cols-3">

                    <div className="col-span-2">
                        <div className="flex flex-col my-8 gap-4">
                            <div className="flex flex-col sm:flex-row justify-between">
                                <h1 className="font-bold">Showing 1–6 of 16 results</h1>
                                <select name="sOrder" className="self-start rounded-2xl border border-gray-300 p-2" value={values.sOrder} onChange={handleChange}>
                                    <option>Sort by</option>
                                    <option value="descending">Sort by price: High to low</option>
                                    <option value="ascending">Sort by price: Low to high</option>
                                </select>
                            </div>
                            {/* <p>{values.sOrder}</p> */}

                            <div className="flex flex-col sm:grid sm:grid-cols-3">
                                <input className="col-span-3 rounded-2xl border border-gray-300 py-2 px-4" name="searchString" value={values.searchString} onChange={handleChange} placeholder="Enter your search" />

                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredList.map(product => (
                                <div>

                                    <img src={product.image} className="rounded-lg w-screen rounded-b-none product-card" alt="" />

                                    <div className="flex flex-col shadow-md rounded-lg border-t-0 rounded-t-none py-3 border-gray-300 px-4">
                                        <h3 className="font-bold text-xl text-center">{product.title}</h3>
                                        <p className="text-center text-lg my-2 text-gray-700 font-semibold">${product.price}</p>
                                        <button className={product.inCart ? 'productBtn bg-green-500 cursor-default' : 'productBtn bg-brand-red hover:bg-brand-yellow cursor-pointer'} disabled={product.inCart ? true : false} onClick={() => { addToCart(product.id); triggerProductAddedPopup() }}><span>{product.inCart ? 'Item in Cart' : 'Add to Cart'}</span> <i>{product.inCart ? <FaCheck /> : <FaCartPlus />}</i></button>
                                    </div>
                                    {/* <p>{product.type}</p>
                                    <button onClick={() => addToCart(product.id)}>Add to Cart</button> */}
                                </div>
                            ))}
                        </div>
                    </div>


                    <form className="col-span-1 flex flex-col gap-8 my-8">
                        <div>
                            <h3 className="text-xl font-bold">Product categories</h3>
                            <hr className="bg-brand-red h-1 w-12 mt-2 mb-4"></hr>
                            <div className="flex flex-col my-3">
                                <label htmlFor="myInput">
                                    All categories
                                </label>
                                <input
                                    id="myInput"
                                    type="checkbox"
                                    onClick={() => onFilterChange('All')}
                                    checked={activeFilters.length === filterList.length}
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                {
                                    filterList.map(filter => (
                                        <div className="flex flex-col">
                                            <label htmlFor={filter.id}>
                                                {filter.name}
                                            </label>
                                            <input
                                                id={filter.id}
                                                type="checkbox"
                                                key={filter.id}
                                                checked={activeFilters.includes(filter.value)}
                                                onClick={() => onFilterChange(filter.value)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold">
                                Price range:
                            </h3>
                            <hr className="bg-brand-red h-1 w-12 mt-2 mb-4"></hr>
                            <div className="flex items-center">
                                <label htmlFor="price">${price}</label>
                                <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
}

export default ProductsFile;