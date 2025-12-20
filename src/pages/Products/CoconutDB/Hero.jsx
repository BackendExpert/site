import React from "react";
import { ArrowRight, Github, Database } from "lucide-react";
import sitelogo from "../../../assets/SiteLogo.png";
import coconutimg from "../../../assets/Coconutdb.png";

const Hero = ({
    productName = "CoconutDB",
    tagline = "Document-oriented NoSQL database built for modern applications",
    description = "CoconutDB is a high-performance, document-oriented NoSQL database developed in Sri Lanka — the first of its kind in South Asia. Designed for scalability, flexibility, and developer-friendly data modeling.",
    docsLink = "",
    githubLink = "https://github.com/CoconutDB",
}) => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white px-6 md:px-12 py-28">

            {/* Ambient background */}
            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-teal-200/40 blur-3xl" />

            <div className="relative max-w-7xl mx-auto grid gap-14 lg:grid-cols-2 items-center">

                {/* LEFT: Text */}
                <div className="flex flex-col space-y-6">

                    {/* Brand */}
                    <div className="flex items-center gap-4">
                        <img
                            src={sitelogo}
                            alt="BlackAlphaLabs"
                            className="w-11 h-11 object-contain"
                        />
                        <span className="text-sm font-semibold text-gray-500 tracking-wide">
                            BlackAlphaLabs · Database Systems
                        </span>
                    </div>

                    {/* Icon + Name */}
                    <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-4 text-white shadow-lg">
                            <Database size={28} />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                            {productName}
                        </h1>
                    </div>

                    {/* Tagline */}
                    <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-xl">
                        {tagline}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 max-w-2xl leading-relaxed">
                        {description}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href={docsLink}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                            bg-gray-900 text-white font-semibold
                            hover:bg-gray-800 transition"
                        >
                            Read Docs <ArrowRight size={18} />
                        </a>

                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                            border border-gray-300 text-gray-700 font-semibold
                            hover:border-gray-400 hover:text-gray-900 transition"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                    </div>

                    {/* Meta */}
                    <div className="pt-4 text-sm text-gray-500">
                        Developed in Sri Lanka · South Asia’s first document DB · Open source
                    </div>
                </div>

                {/* RIGHT: Product Visual */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative rounded-3xl border border-gray-200 bg-white shadow-xl p-4">
                        <img
                            src={coconutimg}
                            alt="CoconutDB Preview"
                            className="rounded-2xl max-w-full h-auto"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
