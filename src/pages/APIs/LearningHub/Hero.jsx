import React from "react";
import { Database, Zap, Globe, Package, Key } from "lucide-react";
import sitelogo from "../../../assets/SiteLogo.png";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0f1835] to-[#0a0f1b] text-white">

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

            {/* Glow Accents */}
            <div className="hidden sm:block absolute -top-48 -left-48 w-[650px] h-[650px] bg-blue-600/20 blur-[180px]" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                {/* LEFT: Info */}
                <div className="space-y-7">

                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <img src={sitelogo} alt="LearningHUB API" className="w-9 h-9 sm:w-11 sm:h-11" />
                        <span className="text-[10px] sm:text-xs tracking-[0.25em] text-blue-300 font-semibold uppercase">
                            LearningHUB API · RapidAPI
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
                        LearningHUB <br />
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            API
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl">
                        High-performance educational API for mobile, web, and desktop applications.
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
                        LearningHUB API by BlackAlphaLabs provides secure, scalable endpoints delivering real-time access to course data, content, and user resources. Perfect for LMS, e-learning portals, or custom educational tools.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                        <Feature icon={<Database size={18} />} text="RESTful Endpoints" />
                        <Feature icon={<Zap size={18} />} text="Fast & Scalable" />
                        <Feature icon={<Globe size={18} />} text="Mobile, Web & Electron" />
                        <Feature icon={<Key size={18} />} text="Secured with API Keys" />
                        <Feature icon={<Package size={18} />} text="Flexible Plans" />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <a
                            href="https://rapidapi.com/jehankandy/api/learninghub"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 font-semibold hover:opacity-90 transition shadow-lg shadow-blue-500/30"
                        >
                            Try API
                        </a>

                        <a
                            href="#docs"
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-xl border border-blue-400 text-blue-400 hover:bg-blue-500/10 transition"
                        >
                            View Docs
                        </a>
                    </div>

                    <p className="text-[11px] sm:text-xs text-gray-500 pt-4 tracking-wide">
                        Fast · Secure · Scalable · Built by BlackAlphaLabs
                    </p>
                </div>

                {/* RIGHT: Info Card */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px]
                        rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 sm:p-8 relative">

                        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-blue-600 text-[10px] sm:text-xs font-semibold">
                            alpha
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-center gap-3 text-blue-400">
                                <Package size={18} />
                                <span className="font-semibold text-sm sm:text-base">
                                    API Status
                                </span>
                            </div>

                            <p className="font-mono text-xs sm:text-sm text-gray-300">
                                Currently in alpha version — endpoints not public yet.
                            </p>

                            <div className="mt-6 sm:mt-8 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const Feature = ({ icon, text }) => (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition">
        <span className="text-blue-400">{icon}</span>
        <span className="text-sm font-medium">{text}</span>
    </div>
);

export default Hero;
