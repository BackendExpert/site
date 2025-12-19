import React from "react";
import { HiOutlineAcademicCap, HiOutlineLockClosed } from "react-icons/hi2";
import { FaFlask, FaCloud } from "react-icons/fa";

const platforms = [
    {
        id: "learning-hub",
        name: "Learning Hub",
        subtitle: "by BlackAlphaLabs",
        description:
            "This platform helps you quickly access tech information, resources, and guides in one place.",
        icon: HiOutlineAcademicCap,
        accent: "from-indigo-500 to-sky-500",
        href: "/platforms/learning-hub",
        comingSoon: false,
    },
    {
        id: "labs-platform",
        name: "Labs Platform",
        subtitle: "by BlackAlphaLabs",
        description:
            "An experimental environment for internal tools, prototypes, and developer research.",
        icon: FaFlask,
        accent: "from-emerald-500 to-lime-500",
        href: "#",
        comingSoon: true,
    },
    {
        id: "cloud-platform",
        name: "Cloud Platform",
        subtitle: "by BlackAlphaLabs",
        description:
            "Unified cloud services designed for future BlackAlphaLabs infrastructure.",
        icon: FaCloud,
        accent: "from-fuchsia-500 to-pink-500",
        href: "#",
        comingSoon: true,
    },
];

const Platforms = () => {
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
                        Platforms
                    </h1>
                    <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto">
                        Internal platforms built by BlackAlphaLabs to support learning,
                        experimentation, and future infrastructure.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {platforms.map((platform) => {
                        const Icon = platform.icon;

                        return (
                            <div
                                key={platform.id}
                                className="relative group rounded-3xl bg-white/5 border border-white/10
                                backdrop-blur-xl p-7 transition-all duration-300
                                hover:-translate-y-1 hover:border-white/20"
                            >
                                {/* Coming Soon Overlay */}
                                {platform.comingSoon && (
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
                                    className={`inline-flex rounded-2xl bg-gradient-to-br ${platform.accent}
                                    p-4 text-white shadow-lg`}
                                >
                                    <Icon size={28} />
                                </div>

                                {/* Text */}
                                <div className={platform.comingSoon ? "blur-sm select-none" : ""}>
                                    <h3 className="mt-6 text-2xl font-bold text-white">
                                        {platform.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-400">
                                        {platform.subtitle}
                                    </p>

                                    <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                                        {platform.description}
                                    </p>

                                    {/* Action */}
                                    {!platform.comingSoon && (
                                        <a
                                            href={platform.href}
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold
                                            text-white hover:text-indigo-400 transition"
                                        >
                                            Visit Platform →
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

export default Platforms;
