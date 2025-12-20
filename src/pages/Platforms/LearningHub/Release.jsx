import React from "react";
import { BookOpen, Users, Zap, Calendar, ArrowRight } from "lucide-react";

const Release = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">

            {/* HEADER */}
            <section className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
                    Learning Hub
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    By BlackAlphaLabs — a modern, mobile and desktop-friendly web platform
                    designed for developers, students, and tech enthusiasts.
                </p>
            </section>

            {/* ABOUT THIS RELEASE */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <BookOpen size={28} className="text-indigo-500" /> About This Release
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Learning Hub by BlackAlphaLabs is a modern, mobile and desktop-friendly
                        web platform designed specifically for developers, students, and tech enthusiasts.
                        This is the initial release of Learning Hub, focusing entirely on web development
                        using the MERN stack.
                    </p>
                </div>
            </section>

            {/* CURRENT FEATURES */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
                    <Zap size={28} className="text-green-500" /> Current Features
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        "Browse categorized, quick-access tech resources curated by developers.",
                        "Instantly view guides, frameworks, database references, and deployment tutorials for MERN projects.",
                        "Responsive, clean and attractive UI optimized for mobile and desktop browsers.",
                        "Strictly view-only access for public users. Only authorized platform developers can add or manage resources for now.",
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                        >
                            <Users size={24} className="text-indigo-400 mt-1" />
                            <p className="text-gray-700">{feature}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PLANNED FUTURE UPDATES */}
            <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 rounded-3xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
                    <Calendar size={28} className="text-orange-500" /> Planned Future Updates
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        "Add support for other tech stacks like Python, Django, Java, PHP, and Go.",
                        "Expand categories to cover UI/UX, cloud hosting, DevOps, security, AI, and more.",
                        "Implement a user-submitted Q&A section.",
                        "Introduce public contributor access for verified developers.",
                        "Continuous monthly resource updates.",
                    ].map((update, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                        >
                            <ArrowRight size={24} className="text-indigo-400 mt-1" />
                            <p className="text-gray-700">{update}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Release;
