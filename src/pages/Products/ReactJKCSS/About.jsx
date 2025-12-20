import React from "react";
import { FaBookOpen, FaGithub, FaNpm } from "react-icons/fa";
import sitelogo from "../../../assets/SiteLogo.png";
import reactJkcssImage from "../../../assets/ReactJKCSS.png"; // replace with actual image

const About = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="relative">
                <div className="max-w-7xl mx-auto px-6 py-28">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-gray-100 text-indigo-600">
                                <img src={reactJkcssImage} alt="BlackAlphaLabs" className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
                                About ReactJKCSS
                            </span>
                        </div>

                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            Sri Lanka’s <br />
                            <span className="text-indigo-600">
                                First React Support Front-End CSS Framework
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            ReactJKCSS is the React extension of JKCSS — built in parallel with the core framework.
                            It provides ready-to-use components for dynamic front-end development while maintaining
                            clean, utility-first styling.
                        </p>

                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            This includes Buttons, Tables, and other UI elements following JKCSS principles for consistent styling.
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
                                title: "React Components",
                                desc: "Prebuilt, reusable components for fast React front-end development.",
                            },
                            {
                                title: "Dynamic UI",
                                desc: "Interactive front-end experiences using React with JKCSS styling.",
                            },
                            {
                                title: "Parallel Development",
                                desc: "Developed alongside JKCSS, ensuring consistency and seamless integration.",
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
                                date: "18 April 2024",
                                notes: "Initial release of the project, adding Buttons.",
                            },
                            {
                                version: "v1.1.0",
                                date: "16 May 2024",
                                notes: "Updating Buttons, adding Tables.",
                            },
                            {
                                version: "v1.2.0",
                                date: "01 June 2024",
                                notes: "Updating Buttons (adding Large and Small Buttons).",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                            >
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {item.version}
                                </h3>
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
                        Access ReactJKCSS via NPM
                    </h2>

                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-xl">
                        <div className="flex items-center gap-3 mb-4 text-red-600">
                            <FaNpm size={28} />
                            <h3 className="text-xl font-semibold text-gray-900">NPM Package</h3>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Install ReactJKCSS via NPM to integrate into your React projects:
                        </p>

                        <code className="block bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 mb-6">
                            npm i @jehankandy/react-jkcss
                        </code>

                        <a
                            href="https://www.npmjs.com/package/@jehankandy/react-jkcss"
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
