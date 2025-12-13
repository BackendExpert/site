import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 py-16 relative overflow-hidden">

            {/* Soft Background Shapes */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-indigo-100 blur-3xl opacity-40" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-sky-100 blur-3xl opacity-40" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* BRAND */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            BlackAlphaLabs
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A product-driven innovation lab focused on building its own ecosystem:
                            <span className="font-medium text-gray-800"> JKCSS</span>,
                            <span className="font-medium text-gray-800"> CoconutDB</span>,
                            <span className="font-medium text-gray-800"> CoconutServeJS</span>,
                            APIs, NPM packages, and VS Code extensions.
                            <br />
                            All products are independently designed, maintained, and optimized
                            for developers worldwide.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="/aboutus" className="text-gray-600 hover:text-indigo-500 transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/projects" className="text-gray-600 hover:text-indigo-500 transition">
                                    Ecosystem
                                </a>
                            </li>
                            <li>
                                <a href="/contactus" className="text-gray-600 hover:text-indigo-500 transition">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/projects" className="text-gray-600 hover:text-indigo-500 transition">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                            Contact
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                            jehankandy@gmail.com
                        </p>
                        <p className="text-gray-600 text-sm">
                            +94 71 175 8851
                        </p>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                            Follow Us
                        </h4>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://facebook.com"
                                className="p-2 rounded-full border border-gray-200 text-gray-600
                                hover:text-indigo-500 hover:border-indigo-400 transition"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="p-2 rounded-full border border-gray-200 text-gray-600
                                hover:text-pink-500 hover:border-pink-400 transition"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                className="p-2 rounded-full border border-gray-200 text-gray-600
                                hover:text-sky-500 hover:border-sky-400 transition"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
                    <p>© {year} BlackAlphaLabs. All rights reserved.</p>
                    <p>
                        Built with <span className="text-red-500">❤️</span> by BlackAlphaLabs
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
