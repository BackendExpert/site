import React from "react";
import { HiOutlineLockClosed, HiCode } from "react-icons/hi";
import { SiHtml5, SiJavascript } from "react-icons/si";


const extensions = [
    {
        id: "jkcss-vscode",
        name: "JKCSS VS Code",
        icon: HiCode,
        accent: "from-indigo-500 to-sky-500",
        description: "The JKCSS VS Code extension provides developers with full support for JKCSS, including syntax highlighting, intelligent code completion, ready-to-use snippets, and live preview capabilities. It accelerates front-end development by making utility-first CSS building faster and more efficient within VS Code.",
        href: "https://marketplace.visualstudio.com/items?itemName=JehanKandy.jkcss",
        comingSoon: false,
    },
    {
        id: "html-table-creator",
        name: "HTML Table Creator",
        icon: SiHtml5,
        accent: "from-orange-500 to-amber-500",
        description: "HTML Table Creator is a VS Code extension that helps developers create dynamic and responsive HTML tables effortlessly. Designed for MVC NodeJS projects, it generates tables with customizable columns, styling, and data placeholders, reducing manual HTML coding and improving workflow efficiency.",
        href: "https://marketplace.visualstudio.com/items?itemName=JehanKandy.html-table-creator",
        comingSoon: false,
    },
    {
        id: "mvc-nodejs-extension",
        name: "MVC NodeJS",
        icon: SiJavascript,
        accent: "from-green-500 to-lime-500",
        description: "The MVC NodeJS extension for VS Code is a powerful tool for Node.js developers building projects using the MVC architecture. It scaffolds controllers, routes, models, and views, allowing developers to focus on core logic instead of boilerplate code, and integrates seamlessly with other tools like JKCSS and HTML Table Creator.",
        href: "https://marketplace.visualstudio.com/items?itemName=JehanKandy.mern-development",
        comingSoon: false,
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
                                            target="_blank"
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
