import React from 'react';
import logo from '../assets/Aadmi.png';
import playstore from '../assets/playstore2.png';
import appstore from '../assets/appstore.png';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-10">
            <div className="container px-10">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* Logo and Contact Info */}
                    <div className="mb-8 md:mb-0">
                        <img src={logo} alt="Zymo Logo" className="mb-4" width={130} />
                        <div className="mb-4">
                            <h2 className="font-bold text-lg">Contact</h2>
                            <p>Email: hello@zymo.app</p>
                            <p>Phone: +91 9987933348</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">Follow us</h2>
                            <div className="flex space-x-2 mt-2">
                                <a href="/" className="text-black"><i className="fab fa-facebook fa-lg"></i></a>
                                <a href="/" className="text-black"><i className="fab fa-instagram fa-lg"></i></a>
                                <a href="/" className="text-black"><i className="fab fa-linkedin fa-lg"></i></a>
                                <a href="/" className="text-black"><i className="fab fa-twitter fa-lg"></i></a>
                                <a href="/" className="text-black"><i className="fab fa-youtube fa-lg"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* About and Features */}
                    <div className="flex flex-col md:flex-row md:space-x-20 mb-8 md:mb-0">
                        <div className="mb-4 md:mb-0">
                            <h2 className="font-bold text-lg">About</h2>
                            <ul>
                                <li>Deals</li>
                                <li>Fleet</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">Features</h2>
                            <ul>
                                <li>Blogs</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cancellation Policy</li>
                            </ul>
                        </div>
                    </div>

                    {/* Install App and Payment Info */}
                    <div>
                        <h2 className="font-bold text-lg">Install App</h2>
                        <p>From App Store or Google Play</p>
                        <div className="flex space-x-2 mt-2">
                            <img src={playstore} alt="Google Play Store" className="w-24 h-auto" />
                            <img src={appstore} alt="Apple App Store" className="w-24 h-auto" />
                        </div>
                        <p className="mt-4">Secured Payment Gateway</p>
                        <div className="flex space-x-2 mt-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6YnQoM78NCEw3f--iWcGhpQFjBxfo9k6fw&s" alt="Visa" className="w-12 h-auto" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT533huz4LRgn50k_wO1eYSSQTtLCkcdPLMFw&s" alt="MasterCard" className="w-12 h-auto" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6E_h4dV8JdwcTl2n-HG6Pwnlf_nXyHaMivQ&s" alt="Maestro" className="w-12 h-auto" />
                            <img src="https://www.paisabazaar.com/wp-content/uploads/2024/06/American-Express-SmartEarn%E2%84%A2-Credit-Card.png" alt="American Express" className="w-12 h-auto" />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm">Copyright © 2023 Zep Tepi Technologies Pvt Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
