import React from "react";
import { FaNpm, FaBookOpen, FaGithub } from "react-icons/fa";
import sitelogo from "../../../assets/SiteLogo.png";
import jkreactIconsImage from "../../../assets/JKReactICons.png"; 

const About = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="relative">
                <div className="max-w-7xl mx-auto px-6 py-28">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-gray-100 text-indigo-600">
                                <img src={jkreactIconsImage} alt="JKReact Icons" className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
                                About JKReact Icons
                            </span>
                        </div>

                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            Sri Lanka’s <br />
                            <span className="text-indigo-600">
                                First React Icons Support Library
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            JKReact Icons is the first React icon library developed in Sri Lanka, built in parallel with JKCSS.
                            It provides a wide range of scalable and customizable icons for React projects.
                        </p>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            It includes Bootstrap Icons (Icons, Logos) and follows best practices for React integration.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURE CARDS */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "React Integration",
                                desc: "Easily use icons as React components in your projects.",
                            },
                            {
                                title: "Bootstrap Icons",
                                desc: "Includes Bootstrap Icons (Icons, Logos) for all UI needs.",
                            },
                            {
                                title: "Parallel Development",
                                desc: "Developed alongside JKCSS for consistent design patterns.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VERSION HISTORY */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">
                        Version History
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                version: "v1.0.0",
                                date: "25 April 2024",
                                notes: "Initial release of the project, adding Bootstrap Icons (Icons, Logos).",
                            },
                            {
                                version: "v1.1.0",
                                date: "29 April 2024",
                                notes: "2nd release of the project, adding more Bootstrap Icons (Icons, Logos).",
                            },
                            {
                                version: "v1.2.0",
                                date: "18 May 2024",
                                notes: "3rd release of the project, adding additional Bootstrap Icons (Icons, Logos).",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                            >
                                <h3 className="text-xl font-semibold text-gray-900">{item.version}</h3>
                                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                                <p className="mt-4 text-gray-600">{item.notes}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NPM ACCESS */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Access JKReact Icons via NPM
                    </h2>

                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-xl">
                        <div className="flex items-center gap-3 mb-4 text-red-600">
                            <FaNpm size={28} />
                            <h3 className="text-xl font-semibold text-gray-900">NPM Package</h3>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Install JKReact Icons via NPM to integrate icons into your React projects:
                        </p>

                        <code className="block bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 mb-6">
                            npm i @jehankandy/jkreact-icons
                        </code>

                        <a
                            href="https://www.npmjs.com/package/@jehankandy/jkreact-icons"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            View on NPM →
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
