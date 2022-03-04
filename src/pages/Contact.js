import React from 'react';
import { FaCaretRight, FaPhone } from 'react-icons/fa';
import Footer from '../components/Footer';
import HalfBanner from '../components/HalfBanner';
import Map from '../images/map.png'

function Contact(props) {
    return (
        <div>
            <HalfBanner headline='Contact' />
            <div>
                <div className='bg-brand-gray py-12'>
                <div className="container px-8">
                    <div className="flex flex-col md:grid grid-cols-3 gap-3">
                        <div className="flex flex-col items-center px-8 py-14">
                            <h3 className="font-extrabold text-2xl mb-4 md:text-xl lg:text-2xl">Contact Us</h3>
                            <h3 className="text-brand-red flex items-center gap-2 mb-4 font-bold text-xl md:text-base lg:text-xl"><i><FaPhone /></i><span>+1 123-456-789</span></h3>

                            <p className="text-gray-500 text-sm">Tel: +91 11 4050 0000</p>
                            <p className="text-gray-500 text-sm">Email: info@example.com</p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg bg-white shadow-xl px-10 py-14">
                            <i className="mb-6 font-bold text-2xl"><FaCaretRight /></i>
                            <h3 className="mb-4 font-extrabold text-2xl md:text-xl lg:text-2xl">Get Direction</h3>
                            <p className="text-center text-gray-500">85 Bay Meadows Drive Woodstock, GA 30188, United States</p>
                        </div>
                        <div className="px-8 py-14">
                            <h3 className="text-center mb-8 font-extrabold text-2xl md:text-xl lg:text-2xl">Opening Hours</h3>
                            <span className="flex justify-between md:flex-col md:items-center md:gap-2 lg:flex-row lg:gap-0">
                                <span className="text-gray-500 text-sm">Monday - Friday</span>
                                <span className="text-gray-500 text-sm">9.00 - 20.00</span>
                            </span>
                            <hr className="border-dashed my-4"></hr>
                            <span className="flex justify-between md:flex-col md:items-center md:gap-2 lg:flex-row lg:gap-0">
                                <span className="text-gray-500 text-sm">Saturday - Sunday</span>
                                <span className="text-gray-500 text-sm">8.00 - 22.00</span>
                            </span>
                        </div>
                    </div>

                </div>
                </div>

                <div className="container px-8 py-12">
                <div className="flex flex-col md:grid gap-16 grid-cols-2">
                    <div>
                        <h3 className="font-bold text-xl mb-6">Ask a question</h3>
                        <form className="flex flex-col gap-4">
                            <input className="rounded-lg py-3 px-4 border-gray-300 border text-sm placeholder-gray-600" placeholder="Name" />
                            <input className="rounded-lg py-3 px-4 border-gray-300 border text-sm placeholder-gray-600" placeholder="Email" />
                            <input className="rounded-lg py-3 px-4 border-gray-300 border text-sm placeholder-gray-600" placeholder="Phone Number" />
                            <textarea className="rounded-lg pt-3 pb-8 px-4 border-gray-300 border text-sm placeholder-gray-600" placeholder="Your Message" />
                            <button className="bg-brand-red text-white font-bold rounded-full self-start px-5 py-3">SEND MESSAGE</button>
                        </form>
                    </div>
                    <div>
                        <img src={Map}/>
                    </div>
                </div>
           

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;