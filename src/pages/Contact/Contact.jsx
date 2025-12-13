import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-16">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Contact BlackAlphaLabs
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We focus exclusively on our internal products: <strong>JKCSS</strong>, <strong>CoconutDB</strong>, <strong>CoconutServeJS</strong>, APIs, NPM packages, and VS Code extensions. <br />
                        For inquiries, suggestions, or ecosystem-related questions, feel free to reach out.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Email: <a href="mailto:jehankandy@gmail.com" className="text-indigo-500 hover:underline">jehankandy@gmail.com</a>
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Phone: <a href="tel:+94711758851" className="text-indigo-500 hover:underline">+94 71 175 8851</a>
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Follow Us</h2>
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <a
                                href="https://facebook.com"
                                className="p-2 rounded-full border border-gray-200 text-gray-600 hover:text-indigo-500 hover:border-indigo-400 transition"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="p-2 rounded-full border border-gray-200 text-gray-600 hover:text-pink-500 hover:border-pink-400 transition"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://twitter.com"
                                className="p-2 rounded-full border border-gray-200 text-gray-600 hover:text-sky-500 hover:border-sky-400 transition"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="text-center text-gray-500 text-sm mt-12">
                    BlackAlphaLabs is a founder-led innovation lab. We focus exclusively on our own ecosystem
                    and products. We do not provide client services or outsourcing.
                </div>

            </div>
        </section>
    );
};

export default Contact;
