import React from 'react';
import { ArrowRight } from 'lucide-react';
import sitelogo from '../../assets/SiteLogo.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">

            {/* Soft background shapes */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-sky-100 blur-3xl opacity-60" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl text-center flex flex-col items-center space-y-8 py-24">

                {/* Logo */}
                <img
                    src={sitelogo}
                    alt="BlackAlphaLabs Logo"
                    className="w-24 md:w-28 object-contain"
                />

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                    Building the Future of <br />
                    <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
                        Software Innovation & Developer Tools
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                    <strong className="text-gray-900">BlackAlphaLabs</strong> is a
                    <span className="font-medium text-gray-800"> Software Innovation Company</span>
                    &nbsp;focused exclusively on its own ecosystem:
                    <span className="font-medium text-gray-800"> JKCSS</span>,
                    <span className="font-medium text-gray-800"> CoconutDB</span>,
                    <span className="font-medium text-gray-800"> CoconutServeJS</span>,
                    modern APIs, NPM packages, and VS Code extensions.
                    <br /><br />
                    Every project is independently designed, architected, and maintained
                    with a long-term vision for performance, developer experience, and scalability.
                    We do not engage in client services or outsourcing.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-5 pt-6">
                    <a
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                        bg-gray-900 text-white font-semibold
                        hover:bg-gray-800 transition"
                    >
                        Explore Ecosystem <ArrowRight size={18} />
                    </a>

                    <a
                        href="/aboutus"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                        border border-gray-300 text-gray-700 font-semibold
                        hover:border-gray-400 hover:text-gray-900 transition"
                    >
                        Learn More
                    </a>
                </div>

                {/* Sub brands */}
                <div className="pt-10 text-sm text-gray-500">
                    Focused ecosystem powering&nbsp;
                    <span className="font-medium text-gray-700">
                        JKCSS · CoconutDB · CoconutServeJS · APIs · NPMs · VS Code Extensions
                    </span>
                    <br />
                    <span className="text-gray-400">
                        Only internally developed products. No client services or outsourcing.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
