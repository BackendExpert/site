import React, { useState, useEffect } from "react";
import { ArrowRight, CloudCog, Database, Github } from "lucide-react";
import { SiCss3 } from "react-icons/si";

import sitelogo from "../../assets/SiteLogo.png";
import jkcssImage from "../../assets/JKCSS.png";
import { CgNpm } from "react-icons/cg";

const products = [
    {
        productName: "JKCSS",
        tagline: "Sri Lanka & South Asia’s first production-ready utility-first CSS framework",
        description:
            "JKCSS is a modern, production-ready CSS framework developed in Sri Lanka by BlackAlphaLabs, built for speed, predictable layouts, and long-term maintainability.",
        docsLink: "/jkcss",
        githubLink: "https://github.com/JKCSS-CSS-Framework",
        image: jkcssImage,
        icon: SiCss3,
    },
    {
        productName: "CoconutDB",
        tagline: "A lightweight modern database system",
        description:
            "CoconutDB is a fast, lightweight database solution designed for modern web applications with simplicity, scalability, and developer-friendly architecture.",
        docsLink: "/coconutdb",
        githubLink: "#",
        image: jkcssImage,
        icon: Database,
    },
    {
        productName: "RACD API",
        tagline: "Regional Administrative Citizen Data API",
        description:
            "RACD API provides structured access to regional administrative and citizen data systems for building scalable government and enterprise applications.",
        docsLink: "/racd-api",
        githubLink: "#",
        image: jkcssImage,
        icon: CloudCog,
    },
    {
        productName: "NPM Packages",
        tagline: "Developer utilities and open-source tools",
        description:
            "A collection of reusable NPM packages developed by BlackAlphaLabs to accelerate development across JavaScript, Node.js, and modern web ecosystems.",
        docsLink: "/npm-packages",
        githubLink: "#",
        image: jkcssImage,
        icon: CgNpm,
    }
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {

            // start fade out
            setAnimate(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % products.length);
                setAnimate(true);
            }, 300);

        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const product = products[index];

    const Icon = product.icon;
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 py-28">

            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-sky-200/40 blur-3xl" />

            <div
                className={`relative max-w-7xl mx-auto grid gap-14 lg:grid-cols-2 items-center transition-all duration-500
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >

                {/* LEFT */}
                <div className="flex flex-col space-y-6">

                    <div className="flex items-center gap-4">
                        <img
                            src={sitelogo}
                            alt="BlackAlphaLabs"
                            className="w-11 h-11 object-contain"
                        />
                        <span className="text-sm font-semibold text-gray-500 tracking-wide">
                            BlackAlphaLabs · Product
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        

                        <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 p-4 text-white shadow-lg">
                            <Icon size={28} />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                            {product.productName}
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-xl">
                        {product.tagline}
                    </p>

                    <p className="text-gray-600 max-w-2xl leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href={product.docsLink}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
                        >
                            Get Started <ArrowRight size={18} />
                        </a>

                        <a
                            href={product.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:text-gray-900 transition"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                    </div>

                    <div className="pt-4 text-sm text-gray-500">
                        Internally developed · No client services · Long-term maintained
                    </div>

                </div>

                {/* RIGHT */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative rounded-3xl border border-gray-200 bg-white shadow-xl p-4">
                        <img
                            src={product.image}
                            alt={product.productName}
                            className="rounded-2xl max-w-full h-auto"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;