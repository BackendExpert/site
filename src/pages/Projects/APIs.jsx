import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi";

import { FaCloud, FaDatabase } from "react-icons/fa";
import { Database, Globe } from "lucide-react";
const apis = [
    {
        id: "jkrecipeapi",
        name: "JKRecipeAPI",
        subtitle: "by BlackAlphaLabs",
        description: "Public REST API for fetching structured food recipes including ingredients, instructions, and nutrition info.",
        icon: Database,
        accent: "from-orange-400 to-orange-600",
        href: "/api/foodapi",
        comingSoon: false,
    },
    {
        id: "learninghub-api",
        name: "LearningHUB API",
        subtitle: "by BlackAlphaLabs",
        description: "Modern high-performance API for educational applications, delivering course, content, and user resources.",
        icon: Globe,
        accent: "from-blue-400 to-blue-600",
        href: "/api/learningapi",
        comingSoon: false,
    },
    {
        id: "learninghub-api-1",
        name: "LearningHUB API",
        subtitle: "by BlackAlphaLabs",
        description: "Modern high-performance API for educational applications, delivering course, content, and user resources.",
        icon: Globe,
        accent: "from-blue-400 to-blue-600",
        href: "/api/learningapi",
        comingSoon: true,
    },
];

const APIs = () => {
    return (
        <section className="relative bg-black px-6 md:px-12 py-28 overflow-hidden">

            {/* Dynamic Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-indigo-700/20 blur-3xl animate-blob animation-delay-2000 mix-blend-multiply" />
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-pink-600/20 blur-3xl animate-blob mix-blend-multiply" />
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-sky-500/20 blur-3xl animate-blob mix-blend-multiply" />

            <div className="relative max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                        APIs
                    </h1>
                    <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto">
                        BlackAlphaLabs internal APIs to power products, platforms, and developer tools.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {apis.map((api) => {
                        const Icon = api.icon;

                        return (
                            <div
                                key={api.id}
                                className="relative group rounded-3xl bg-white/5 border border-white/10
                                backdrop-blur-xl p-7 transition-all duration-300
                                hover:-translate-y-1 hover:border-white/20"
                            >
                                {/* Coming Soon Overlay */}
                                {api.comingSoon && (
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center
                                    rounded-3xl bg-black/60">
                                        <HiOutlineLockClosed
                                            size={34}
                                            className="mb-3 text-gray-300"
                                        />
                                        <span className="text-sm font-semibold tracking-widest text-gray-300">
                                            COMING SOON
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div
                                    className={`inline-flex rounded-2xl bg-gradient-to-br ${api.accent}
                                    p-4 text-white shadow-lg`}
                                >
                                    <Icon size={28} />
                                </div>

                                {/* Text */}
                                <div className={api.comingSoon ? "blur-sm select-none" : ""}>
                                    <h3 className="mt-6 text-2xl font-bold text-white">
                                        {api.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-400">
                                        {api.subtitle}
                                    </p>

                                    <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                                        {api.description}
                                    </p>

                                    {/* Action */}
                                    {!api.comingSoon && (
                                        <a
                                            href={api.href}
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold
                                            text-white hover:text-indigo-400 transition"
                                        >
                                            Explore API →
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Animation for blobs */}
            <style>
                {`
                    @keyframes blob {
                        0%, 100% { transform: translate(0px, 0px) scale(1); }
                        33% { transform: translate(30px, -50px) scale(1.1); }
                        66% { transform: translate(-20px, 20px) scale(0.9); }
                    }
                    .animate-blob {
                        animation: blob 8s infinite;
                    }
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                `}
            </style>
        </section>
    );
};

export default APIs;
