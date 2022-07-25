import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../images/logo.png'
function Footer() {
    return (
        <div className="bg-footer-black py-12 px-4">
            <div className="container flex flex-col gap-8">
                <div className="flex justify-center">
                    <img src={logo} alt="gloreya_logo" />
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-around text-footer-text">
                    <div className="text-center">
                        <h3 className="text-white text-xl mb-3 font-bold">Address</h3>
                        <p className="">570 8th Ave,</p>
                        <p>New York, NY 10018</p>
                        <p>United States</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-white text-xl mb-3 font-bold">Book a table</h3>
                        <p>Table services provided</p>
                        <p>Place a call with the number below</p>
                        <h3>(850) 435-4155</h3>
                    </div>
                    <div className="text-center">
                        <h3 className="text-white text-xl mb-3 font-bold">Opening hours</h3>
                        <p>Monday - Friday</p>
                        <p>10.00 AM – 11.00 PM</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:flex-start gap-4 text-footer-text px-4 pt-6 border-t border-gray-50">
                    <div className="flex flex-col gap-4 items-center md:justify-between">
                        <div className="flex gap-4">
                            <p className="text-sm">About us</p>
                            <p className="text-sm">Menu</p>
                            <p className="text-sm">Blog</p>
                            <p className="text-sm">Gallery</p>
                            <p className="text-sm">Faq</p>
                            <p className="text-sm">Contact</p>
                        </div>
                        <p className="self-center md:self-start text-sm">
                            Copyright © 2021 Gloreya.All Right Reserved
                        </p>

                    </div>
                    <div className="flex mt-4 md:mt-0 self-center md:self-end">
                        <i className="bg-blue-700 social-icon"><FaFacebook /></i>
                        <i className="bg-blue-500 social-icon"><FaTwitter /></i>
                        <i className="bg-pink-700 social-icon"><FaInstagram /></i>
                        <i className="bg-red-600 social-icon"><FaYoutube /></i>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Footer;