import React from "react";
import {
    SiCss3,
    SiNodedotjs,
    SiMongodb,
    SiReact,
} from "react-icons/si";
import { HiOutlineLockClosed } from "react-icons/hi";

const products = [
    {
        id: "jkcss",
        name: "JKCSS",
        icon: SiCss3,
        accent: "from-indigo-500 to-sky-500",
        description:
            "Sri Lanka & South Asia’s first production-ready utility-first CSS framework, built for clarity, predictable layouts, and long-term maintainability.",
        href: "/jkcss",
        comingSoon: false,
    },
    {
        id: "coconutdb",
        name: "CoconutDB",
        icon: SiMongodb,
        accent: "from-emerald-500 to-lime-500",
        description: "A high-performance document database developed in Sri Lanka.",
        href: "/coconutdb",
        comingSoon: false,
    },
    {
        id: "coconutservejs",
        name: "CoconutServeJS",
        icon: SiNodedotjs,
        accent: "from-amber-500 to-orange-500",
        description:
            "A modern backend framework built for clean APIs and long-term maintainability.",
        href: "#",
        comingSoon: true,
    },
    {
        id: "jkcss-native",
        name: "JKCSS Native",
        icon: SiReact,
        accent: "from-fuchsia-500 to-pink-500",
        description:
            "Native UI styling powered by the JKCSS ecosystem.",
        href: "#",
        comingSoon: true,
    },
];

const Products = () => {
    return (
        <section className="relative bg-white px-6 md:px-12 py-28 overflow-hidden">

            {/* Ambient gradients */}
            <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-100/50 blur-3xl" />

            <div className="relative max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                        Products
                    </h1>
                    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                        Internally engineered developer tools by BlackAlphaLabs.
                        Designed as a long-term ecosystem.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => {
                        const Icon = product.icon;

                        return (
                            <div
                                key={product.id}
                                className="relative group rounded-3xl bg-gray-50 border border-gray-200
                                backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-1
                                hover:border-gray-300"
                            >
                                {/* Coming Soon Overlay */}
                                {product.comingSoon && (
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
                                    className={`inline-flex rounded-2xl bg-gradient-to-br ${product.accent}
                                    p-4 text-white shadow-lg`}
                                >
                                    <Icon size={28} />
                                </div>

                                {/* Text */}
                                <div className={product.comingSoon ? "blur-sm select-none" : ""}>
                                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                                        {product.name}
                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                                        {product.description}
                                    </p>

                                    {/* Action */}
                                    {!product.comingSoon && (
                                        <a
                                            href={product.href}
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

export default Products;
