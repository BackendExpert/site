import React from "react";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
} from "react-icons/si";
import { HiOutlineLockClosed, HiCode } from "react-icons/hi";

const extensions = [
    {
        id: "jkcss-vscode",
        name: "JKCSS VS Code",
        icon: HiCode, // valid icon
        accent: "from-indigo-500 to-sky-500",
        description:
            "VS Code extension for JKCSS including syntax highlighting, snippets, and live preview.",
        href: "/vscode/jkcss-vscode",
        comingSoon: false,
    },
    {
        id: "coconutdb-vscode",
        name: "CoconutDB VS Code",
        icon: SiTypescript,
        accent: "from-emerald-500 to-lime-500",
        description:
            "Extension to manage CoconutDB queries, schemas, and database interactions directly in VS Code.",
        href: "#",
        comingSoon: true,
    },
    {
        id: "coconutservejs-vscode",
        name: "CoconutServeJS VS Code",
        icon: SiJavascript,
        accent: "from-amber-500 to-orange-500",
        description:
            "Helper extension for CoconutServeJS to scaffold endpoints, routes, and project structure.",
        href: "#",
        comingSoon: true,
    },
];

const VScodeEx = () => {
    return (
        <section className="relative bg-white px-6 md:px-12 py-28 overflow-hidden">

            {/* Ambient gradients */}
            <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-100/50 blur-3xl" />

            <div className="relative max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                        VS Code Extensions
                    </h1>
                    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                        Official VS Code extensions by BlackAlphaLabs for JKCSS, CoconutDB.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {extensions.map((ext) => {
                        const Icon = ext.icon;

                        return (
                            <div
                                key={ext.id}
                                className="relative group rounded-3xl bg-gray-50 border border-gray-200
                                backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1
                                hover:border-gray-300"
                            >
                                {/* Coming Soon Overlay */}
                                {ext.comingSoon && (
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
                                    className={`inline-flex rounded-2xl bg-gradient-to-br ${ext.accent}
                                    p-4 text-white shadow-lg`}
                                >
                                    <Icon size={28} />
                                </div>

                                {/* Text */}
                                <div className={ext.comingSoon ? "blur-sm select-none" : ""}>
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                        {ext.name}
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                        {ext.description}
                                    </p>

                                    {/* Action */}
                                    {!ext.comingSoon && (
                                        <a
                                            href={ext.href}
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

export default VScodeEx;
