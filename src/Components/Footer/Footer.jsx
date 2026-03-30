import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-12 mb-16">

                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Resources & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-gray-400 mb-8">
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Social Links</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                                <BsInstagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                                <BsTwitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © 2026 Digitools. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;