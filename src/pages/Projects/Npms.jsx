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
        id: "blackalpha-utils",
        name: "BlackAlpha Utils",
        icon: SiJavascript,
        accent: "from-indigo-500 to-sky-500",
        description:
            "A collection of utility functions for rapid development and consistent code patterns.",
        href: "/npms/blackalpha-utils",
        comingSoon: false,
    },
    {
        id: "coconut-db-helper",
        name: "Coconut DB Helper",
        icon: SiTypescript,
        accent: "from-emerald-500 to-lime-500",
        description:
            "Helpers and connectors for CoconutDB to simplify database operations.",
        href: "/npms/coconut-db-helper",
        comingSoon: false,
    },
    {
        id: "jkcss-react",
        name: "JKCSS React",
        icon: SiReact,
        accent: "from-fuchsia-500 to-pink-500",
        description:
            "React integration package for JKCSS, including prebuilt components and styling helpers.",
        href: "#",
        comingSoon: true,
    },
    {
        id: "alpha-cli",
        name: "Alpha CLI",
        icon: SiNpm,
        accent: "from-amber-500 to-orange-500",
        description:
            "Command-line tools for managing BlackAlphaLabs projects and automation.",
        href: "#",
        comingSoon: true,
    },
];

const Npms = () => {
    return (
        <section className="relative bg-white px-6 md:px-12 py-28 overflow-hidden">

            {/* Ambient gradients */}
            <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-100/50 blur-3xl" />

            <div className="relative max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                        NPM Packages
                    </h1>
                    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                        Internally developed NPM packages by BlackAlphaLabs for faster, maintainable, and consistent development.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {npms.map((npm) => {
                        const Icon = npm.icon;

                        return (
                            <div
                                key={npm.id}
                                className="relative group rounded-3xl bg-gray-50 border border-gray-200
                                backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1
                                hover:border-gray-300"
                            >
                                {/* Coming Soon Overlay */}
                                {npm.comingSoon && (
                                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center
                                    rounded-3xl bg-white/60 backdrop-blur-sm">
                                        <HiOutlineLockClosed
                                            size={34}
                                            className="mb-3 text-gray-400"
                                        />
                                        <span className="text-sm font-semibold tracking-widest text-gray-500">
                                            COMING SOON
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div
                                    className={`inline-flex rounded-2xl bg-gradient-to-br ${npm.accent}
                                    p-4 text-white shadow-lg`}
                                >
                                    <Icon size={28} />
                                </div>

                                {/* Text */}
                                <div className={npm.comingSoon ? "blur-sm select-none" : ""}>
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                        {npm.name}
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                        {npm.description}
                                    </p>

                                    {/* Action */}
                                    {!npm.comingSoon && (
                                        <a
                                            href={npm.href}
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold
                                            text-indigo-600 hover:text-indigo-400 transition"
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
