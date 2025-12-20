import React from "react";
import { BookOpen, Users, Layers, Zap } from "lucide-react";
import sitelogo from "../../../assets/SiteLogo.png";

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-b from-indigo-50 via-purple-50 to-white overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-300/30 blur-3xl animate-blob"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-300/30 blur-3xl animate-blob animation-delay-2000"></div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-6">
                    {/* Brand */}
                    <div className="flex items-center gap-4">
                        <img src={sitelogo} alt="BlackAlphaLabs" className="w-12 h-12 object-contain" />
                        <span className="text-sm font-semibold text-gray-600 tracking-wide">
                            BlackAlphaLabs · Learning Hub
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Welcome to the <br />
                        <span className="text-indigo-600">Learning Hub</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-2xl md:text-3xl font-medium text-gray-700 max-w-xl">
                        Your centralized, high-performance tech knowledge platform.
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
                        Built for South Asian developers seeking fast, reliable, and developer-focused resources.
                        Access tutorials, guides, and real-world examples to accelerate your coding journey.
                    </p>

                    {/* Features */}
                    <div className="flex flex-col sm:flex-row gap-6 mt-6">
                        <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-2xl transition">
                            <BookOpen size={24} className="text-indigo-500" />
                            <span className="font-medium text-gray-800">Comprehensive Tutorials</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-2xl transition">
                            <Users size={24} className="text-purple-500" />
                            <span className="font-medium text-gray-800">Community Learning</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-2xl transition">
                            <Zap size={24} className="text-indigo-400" />
                            <span className="font-medium text-gray-800">Fast & Interactive</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="#get-started"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition"
                        >
                            Get Started
                        </a>
                        <a
                            href="#explore"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
                        >
                            Explore Content
                        </a>
                    </div>

                    {/* Meta */}
                    <p className="mt-6 text-gray-500 text-sm">
                        Developer-focused · South Asia · Centralized Knowledge
                    </p>
                </div>

                {/* Right Content: Icon */}
                <div className="flex justify-center lg:justify-end">
                    <div className="flex items-center justify-center w-64 h-64 rounded-3xl bg-indigo-100/50 border border-indigo-200 shadow-2xl">
                        <Layers size={120} className="text-indigo-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
