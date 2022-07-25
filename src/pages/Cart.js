import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import HalfBanner from '../components/HalfBanner';
import { HavenContext } from '../Context';
import { FaCartPlus } from 'react-icons/fa'

function Cart(props) {
    const {total, removeFromCart, cart, incrementSingleCartItemCount, decrementSingleCartItemCount, controlQuantity } = useContext(HavenContext)
   
    return (
        <>
            <HalfBanner headline="Cart" />
            {/* <div>
                <h1>These are the products</h1>
                <div>
                    {products.map(product => (
                        <div style={styles}>
                            <p>{product.title}</p>
                            <b>{product.price}</b>
                            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="container my-8 flex flex-col">
                {cart.length === 0
                    ?
                    <div className='py-12 px-8 border border-gray-50 shadow-lg flex flex-col gap-8 rounded-md mx-4'>
                        <div className='p-4 flex gap-4 border-t-2 rounded-r-md border-blue-700 text-gray-500 bg-gray-50 items-center'>
                            <i className='text-blue-700'><FaCartPlus /></i>
                            <p>Your cart is currently empty</p>
                        </div>
                        <Link to='/products'>
                            <button className="btn text-sm font-bold hover:bg-gray-200 duration-500 hover:text-black">VIEW PRODUCTS</button>
                        </Link>
                    </div>
                    // <div className="self-center"><h3 className="text-center font-black text-2xl md:text-5xl tracking-wide">Your cart is currently empty</h3></div>
                    :
                    <>
                        <div className="">
                            <div className="alt-table w-full block md:hidden">
                                {
                                    cart.map((product, index) => {
                                        const { id, title, price, count, total, image } = product
                                        return (
                                            <div className="my-4">
                                                <div className="border-2 border-b-0 py-2 px-4 flex font-bold text-white justify-center">
                                                    <span className="text-brand-red font-bold text-lg">{title}</span>
                                                </div>

                                                <div className="border-2 border-b-0 py-2 px-4 flex justify-between items-center">
                                                    <span className="font-bold">Photo:</span>
                                                    <img src={image} className="w-16" />
                                                </div>



                                                <div className="border-2 border-b-0 py-2 px-4 flex justify-between">
                                                    <span className="self-center font-bold">Price:</span>
                                                    <span className="font-semibold"><p>${price}</p></span>
                                                </div>

                                                <div className="border-2 border-b-0 py-2 px-4 flex justify-between items-center">
                                                    <span className="font-bold">Quantity:</span>
                                                    <input className="border border-black rounded-md p-2" value={count} min='1' onChange={(e) => controlQuantity(id, e.target.value)} type="number"></input>


                                                </div>

                                                <div className="border-2 border-b-0 py-2 px-4 flex justify-between">
                                                    <span className="font-bold">Subtotal:</span>
                                                    <span className="font-semibold">${total}</span>

                                                </div>

                                                <div className="border-2 py-2 px-4 flex justify-center">
                                                    <button className="bg-brand-red rounded-lg py-3 px-4 text-white font-bold w-full" onClick={() => removeFromCart(id)}>Remove item</button>
                                                </div>

                                            </div>

                                        )
                                    })
                                }
                            </div>
                            <table className="hidden md:table w-full">
                                <tr>
                                    <th>Photo</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                                {
                                    cart.map(product => {
                                        let { id, title, price, count, total, image } = product

                                        return (
                                            <tr>
                                                <td className="grid place-items-center"><img src={image} className="w-16" /></td>
                                                <td className="text-brand-red font-semibold">{title}</td>
                                                <td className="font-semibold">${price}</td>
                                                <td className=""> <input className="border border-black rounded-md p-2 inline-block w-7/12" value={count} min='1' onChange={(e) => controlQuantity(id, e.target.value)} type="number"></input></td>
                                                <td className="font-semibold">${total}</td>
                                                <td><button className="bg-brand-red rounded-lg p-3 text-sm text-white font-semibold w-full" onClick={() => removeFromCart(id)}>Remove item</button></td>
                                                {/* <button onClick={() => incrementSingleCartItemCount(id)}>+</button>
                                        <button onClick={() => decrementSingleCartItemCount(id)}>-</button> */}
                                            </tr>

                                        )
                                    })
                                }
                            </table>



                        </div>

                        <div className="self-end w-2/4 my-8 flex flex-col gap-4">
                            <h1 className="font-bold text-2xl">Cart totals</h1>
                            <div className="flex justify-around gap-4 border-2 rounded-md py-4">
                                <p className="font-semibold">Total</p>
                                <p className="font-bold text-xl">${total}</p>
                            </div>
                            <button className="bg-brand-red w-full text-white py-3 px-8; rounded-md font-bold">CHECKOUT</button>

                        </div>
                    </>
                }
            </div>
            <Footer />
        </>
    );
}

export default Cart;