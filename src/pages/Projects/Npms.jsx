import React from "react";
import {
    SiNpm,
    SiJavascript,
    SiTypescript,
    SiReact,
} from "react-icons/si";
import { HiOutlineLockClosed } from "react-icons/hi";

const npms = [
    {
        id: "jkcss",
        name: "JKCSS",
        icon: SiNpm,
        accent: "from-rose-500 to-red-600",
        description:
            "The first Sri Lankan utility-first CSS framework, built for fast, scalable, and production-ready UI development.",
        href: "npms/jkcss",
        comingSoon: false,
    },
    {
        id: "coconutdb",
        name: "CoconutDB",
        icon: SiNpm,
        accent: "from-rose-500 to-red-600",
        description:
            "A lightweight NoSQL document-oriented database built in Sri Lanka, designed for simplicity, speed, and modern backend development.",
        href: "/npms/coconutdb",
        comingSoon: false,
    },
    {
        id: "reactjkcss",
        name: "ReactJKCSS",
        icon: SiNpm,
        accent: "from-rose-500 to-red-600",
        description:
            "A React-based UI component framework built on top of JKCSS for dynamic, scalable, and modern front-end development.",
        href: "/npms/reactjkcss",
        comingSoon: false,
    },
    {
        id: "mysqleasy",
        name: "JKMySQL Easy",
        icon: SiNpm,
        accent: "from-rose-500 to-red-600",
        description:
            "A Node.js backend support npm package that simplifies MySQL operations without writing SQL queries.",
        href: "/npms/mysqleasy",
        comingSoon: false,
    },
    {
        id: "source-mern",
        name: "Secure-MERN",
        icon: SiNpm,
        accent: "from-rose-500 to-red-600",
        description:
            "A lightweight yet powerful npm package that adds enterprise-grade security to MERN stack applications.",
        href: "/npms/source-mern",
        comingSoon: false,
    },
    {
        id: "source-mern-3",
        name: "Secure-MERN",
        icon: SiNpm,
        accent: "from-rose-500 to-red-600",
        description:
            "A lightweight yet powerful npm package that adds enterprise-grade security to MERN stack applications.",
        href: "/npms/source-mern",
        comingSoon: true,
    },
    {
        id: "source-mern-2",
        name: "Secure-MERN",
        icon: SiNpm,
        accent: "from-rose-500 to-red-600",
        description:
            "A lightweight yet powerful npm package that adds enterprise-grade security to MERN stack applications.",
        href: "/npms/source-mern",
        comingSoon: true,
    },
    {
        id: "source-mern-1",
        name: "Secure-MERN",
        icon: SiNpm,
        accent: "from-rose-500 to-red-600",
        description:
            "A lightweight yet powerful npm package that adds enterprise-grade security to MERN stack applications.",
        href: "/npms/source-mern",
        comingSoon: true,
    },
];


const Npms = () => {
    return (
        <section className="relative bg-[#0b0b0e] px-6 md:px-12 py-28 overflow-hidden">

            {/* Ambient red glows */}
            <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose-500/10 blur-3xl" />

            <div className="relative max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                        npm Packages
                    </h1>
                    <p className="mt-5 text-lg text-gray-400 max-w-3xl mx-auto">
                        Internally developed npm packages by BlackAlphaLabs for faster, maintainable,
                        and production-grade development.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {npms.map((npm) => {
                        const Icon = npm.icon;

                        return (
                            <div
                                key={npm.id}
                                className="relative group rounded-3xl bg-white/5 border border-white/10
                        backdrop-blur-xl p-7 transition-all duration-300
                        hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10"
                            >
                                {/* Coming Soon Overlay */}
                                {npm.comingSoon && (
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center
                            rounded-3xl bg-black/60 backdrop-blur-sm">
                                        <HiOutlineLockClosed
                                            size={34}
                                            className="mb-3 text-gray-400"
                                        />
                                        <span className="text-sm font-semibold tracking-widest text-gray-400">
                                            COMING SOON
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div
                                    className={`inline-flex rounded-2xl bg-gradient-to-br from-rose-500 to-red-600
                            p-4 text-white shadow-lg shadow-red-500/30`}
                                >
                                    <Icon size={26} />
                                </div>

                                {/* Text */}
                                <div className={npm.comingSoon ? "blur-sm select-none" : ""}>
                                    <h3 className="mt-6 text-2xl font-bold text-white">
                                        {npm.name}
                                    </h3>

                                    <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                                        {npm.description}
                                    </p>

                                    {/* Action */}
                                    {!npm.comingSoon && (
                                        <a
                                            href={npm.href}
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold
                                    text-rose-400 hover:text-red-400 transition"
                                        >
                                            Explore →
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

    );
};

export default Npms;
