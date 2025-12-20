import React from "react";
import { Package } from "lucide-react";
import sitelogo from "../../assets/SiteLogo.png";

const Hero = ({
    npmname = "JKCSS",
    title1 = "Utility-First",
    title2 = "CSS Framework",
    subtitle,
    shortdesc,
    mainfeuters = [],
    coremodules = [],
    npmlink,
    getstarted = "#install",
    version = "v1.0.0",
}) => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#12090d] via-[#1a0e12] to-[#0b0b0e] text-white">

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

            {/* Glow (hidden on very small screens) */}
            <div className="hidden sm:block absolute -top-48 -left-48 w-[650px] h-[650px] bg-red-600/20 blur-[180px]" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-500/10 blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 sm:py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                {/* LEFT */}
                <div className="space-y-7">

                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <img src={sitelogo} alt={npmname} className="w-9 h-9 sm:w-11 sm:h-11" />
                        <span className="text-[10px] sm:text-xs tracking-[0.25em] text-rose-300 font-semibold uppercase">
                            {npmname} · npm package
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
                        {title1} <br />
                        <span className="bg-gradient-to-r from-rose-400 to-red-600 bg-clip-text text-transparent">
                            {title2}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl">
                            {subtitle}
                        </p>
                    )}

                    {/* Description */}
                    {shortdesc && (
                        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
                            {shortdesc}
                        </p>
                    )}

                    {/* Features */}
                    {mainfeuters.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                            {mainfeuters.map((item, index) => (
                                <Feature
                                    key={index}
                                    icon={item.icon}
                                    text={item.text}
                                />
                            ))}
                        </div>
                    )}

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <a
                            href={getstarted}
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 font-semibold hover:opacity-90 transition shadow-lg shadow-red-500/30"
                        >
                            Get Started
                        </a>

                        {npmlink && (
                            <a
                                href={npmlink}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl border border-white/20 text-gray-200 hover:bg-white/10 transition"
                            >
                                View on npm
                            </a>
                        )}
                    </div>

                    <p className="text-[11px] sm:text-xs text-gray-500 pt-4 tracking-wide">
                        Open Source · npm Ecosystem · Built for Production
                    </p>
                </div>

                {/* RIGHT */}
                <div className="relative flex justify-center lg:justify-end">

                    <div className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px]
                        rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-6 sm:p-8 relative">

                        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-red-600 text-[10px] sm:text-xs font-semibold">
                            {version}
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-center gap-3 text-rose-400">
                                <Package size={18} />
                                <span className="font-semibold text-sm sm:text-base">
                                    {npmname} Modules
                                </span>
                            </div>

                            {coremodules.length > 0 && (
                                <div className="font-mono text-xs sm:text-sm text-gray-300 space-y-2">
                                    {coremodules.map((mod, i) => (
                                        <p key={i}>› {mod}</p>
                                    ))}
                                </div>
                            )}

                            <div className="mt-6 sm:mt-8 h-2 rounded-full bg-gradient-to-r from-rose-500 to-red-600" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

const Feature = ({ icon, text }) => (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
        <span className="text-rose-400">{icon}</span>
        <span className="text-sm font-medium">{text}</span>
    </div>
);

export default Hero;
