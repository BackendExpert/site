import React from "react";
import { BookOpen } from "lucide-react";

const Hero = ({
    label = "Research Portfolio",
    title1 = "Research.",
    title2 = "Policy & Architecture.",
    subtitle,
    shortdesc,
    version = "2026 Edition",
    focusareas = [],
}) => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#07121f] via-[#0b1b2d] to-[#050b14] text-white">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-7">

                    <div className="flex items-center gap-3">
                        <BookOpen className="text-blue-400" />
                        <span className="text-xs tracking-[0.25em] text-blue-300 font-semibold uppercase">
                            {label}
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
                        {title1} <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            {title2}
                        </span>
                    </h1>

                    {subtitle && (
                        <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
                            {subtitle}
                        </p>
                    )}

                    {shortdesc && (
                        <p className="text-gray-400 leading-relaxed max-w-2xl">
                            {shortdesc}
                        </p>
                    )}

                </div>

                <div className="relative flex justify-center lg:justify-end">
                    <div className="w-[320px] rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-8 relative">

                        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-blue-600 text-xs font-semibold">
                            {version}
                        </div>

                        {focusareas.length > 0 && (
                            <div className="space-y-5">
                                <p className="text-blue-400 font-semibold">Focus Areas</p>

                                <div className="space-y-2 text-sm text-gray-300 font-mono">
                                    {focusareas.map((item, index) => (
                                        <p key={index}>› {item}</p>
                                    ))}
                                </div>

                                <div className="mt-6 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
