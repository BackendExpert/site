import React from "react";
import { Package, Database, Zap, Globe } from "lucide-react";
import sitelogo from "../../../assets/SiteLogo.png";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#12090d] via-[#1a0e12] to-[#0b0b0e] text-white">

            {/* Original Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

            {/* Glow Accents */}
            <div className="hidden sm:block absolute -top-48 -left-48 w-[650px] h-[650px] bg-orange-600/20 blur-[180px]" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                {/* LEFT: Info */}
                <div className="space-y-7">

                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <img src={sitelogo} alt="JKRecipeAPI" className="w-9 h-9 sm:w-11 sm:h-11" />
                        <span className="text-[10px] sm:text-xs tracking-[0.25em] text-orange-300 font-semibold uppercase">
                            JKRecipeAPI · Public REST API
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
                        Food Recipes <br />
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            REST API
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl">
                        A modern, lightweight REST API for fetching food recipes,
                        perfect for developers, demos, and small projects.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                        <Feature icon={<Database size={18} />} text="Public REST API" />
                        <Feature icon={<Zap size={18} />} text="No Authentication Required" />
                        <Feature icon={<Globe size={18} />} text="Hosted on Vercel" />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <a
                            href="https://rapidapi.com/jehankandy/api/jkrecipeapi2"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 font-semibold hover:opacity-90 transition shadow-lg shadow-orange-500/30"
                        >
                            Try API
                        </a>

                        <a
                            href="https://jkrecipeapi.vercel.app/api/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-500/10 transition"
                        >
                            View Docs
                        </a>
                    </div>

                    <p className="text-[11px] sm:text-xs text-gray-500 pt-4 tracking-wide">
                        Free API · No Auth · Built by BlackAlphaLabs
                    </p>
                </div>

                {/* RIGHT: Endpoint Card */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px]
                        rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 sm:p-8 relative">

                        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-orange-600 text-[10px] sm:text-xs font-semibold">
                            v1.0.0-beta
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-center gap-3 text-orange-400">
                                <Package size={18} />
                                <span className="font-semibold text-sm sm:text-base">
                                    API Endpoints
                                </span>
                            </div>

                            <div className="font-mono text-xs sm:text-sm text-gray-300 space-y-2">
                                <p>› /api/alldata</p>
                                <p>› /api/onerecipe/:id</p>
                            </div>

                            <div className="mt-6 sm:mt-8 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const Feature = ({ icon, text }) => (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400/30 transition">
        <span className="text-orange-400">{icon}</span>
        <span className="text-sm font-medium">{text}</span>
    </div>
);

export default Hero;
