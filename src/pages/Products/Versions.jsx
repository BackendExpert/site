import React from 'react'
import { FaCheckCircle, FaRocket, FaClock } from 'react-icons/fa'

const Versions = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">

            {/* HEADER */}
            <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    JKCSS Versions & Timeline
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                    A complete timeline of JKCSS — from early planning to the
                    current stable release and upcoming beta versions. Every
                    milestone reflects real production evolution.
                </p>
            </section>

            {/* CURRENT VERSION */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-r from-indigo-600 to-sky-500 rounded-3xl p-10 text-white shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <FaRocket size={28} />
                        <h2 className="text-2xl font-bold">
                            Current Stable Version
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-6">

                        {/* Current Stable */}
                        <div className="flex-1">
                            <p className="text-sm uppercase tracking-wide opacity-90">
                                Latest Release
                            </p>
                            <h3 className="text-4xl font-extrabold mt-2">
                                v6.0.0
                            </h3>
                            <p className="mt-3 text-white/90 max-w-xl">
                                The first fully stable, production-ready release of JKCSS,
                                optimized for real projects.
                            </p>
                        </div>

                        {/* Upcoming Release */}
                        <div className="flex-1 bg-white/15 rounded-3xl p-6 backdrop-blur text-white mt-6 md:mt-0">
                            <h3 className="text-xl font-semibold mb-2">
                                Upcoming Release
                            </h3>
                            <p className="text-white/90 mb-3">
                                v7.0.0 (Beta 1)
                            </p>
                            <ul className="text-white/80 text-sm space-y-2">
                                <li>• Next-gen architecture improvements</li>
                                <li>• New utilities & experimental features</li>
                                <li>• Feedback-driven enhancements</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* RELEASE HISTORY */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-10">
                    Release History
                </h2>

                <div className="space-y-6">

                    {/* PLANNING */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Project Planning
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Jan 2022 – May 2023
                        </p>
                        <p className="mt-4 text-gray-600">
                            Concept validation, design philosophy definition,
                            and early architecture planning for a scalable
                            utility-first CSS framework.
                        </p>
                    </div>

                    {/* INITIAL DEV */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Initial Development
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Jan 2022 – Apr 2023
                        </p>
                        <p className="mt-4 text-gray-600">
                            Core utility system implementation, layout primitives,
                            and internal testing across multiple projects.
                        </p>
                    </div>

                    {/* FIRST RELEASE */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            First Public Release — v0.10
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            18 May 2023
                        </p>
                        <p className="mt-4 text-gray-600">
                            Initial public release marking the foundation of
                            JKCSS as a usable framework.
                        </p>
                    </div>

                    {/* FEATURE EXPANSION */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Feature Expansions — v1.0 to v3.9
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Jun 2023 – Jan 2024
                        </p>
                        <p className="mt-4 text-gray-600">
                            Major utility expansions, layout refinements,
                            and developer-experience improvements.
                        </p>
                    </div>

                    {/* NPM */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            NPM Packaging — v4.0.0
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Feb 2024
                        </p>
                        <p className="mt-4 text-gray-600">
                            Official NPM distribution introduced for easier
                            adoption and version control.
                        </p>
                    </div>

                    {/* VITE */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Vite Integration — v5.0.0
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Mar 2024
                        </p>
                        <p className="mt-4 text-gray-600">
                            Optimized build pipeline and first-class Vite support.
                        </p>
                    </div>

                    {/* REACT */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            ReactJKCSS Release
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Mar 2024
                        </p>
                        <p className="mt-4 text-gray-600">
                            Dedicated React bindings and conventions introduced.
                        </p>
                    </div>

                    {/* STABLE */}
                    <div className="bg-white border border-green-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Stable Release — v6.0.0
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Apr 2024
                        </p>
                        <p className="mt-4 text-gray-600">
                            Official stable release with production-grade
                            guarantees.
                        </p>
                    </div>

                </div>
            </section>

            {/* ROADMAP */}
            <section className="bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="flex items-center gap-4 mb-8">
                        <FaClock size={24} />
                        <h2 className="text-3xl font-bold">
                            Current & Upcoming
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border border-white/10 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">
                                Optimization & Feedback Loop
                            </h3>
                            <p className="text-slate-300 text-sm">
                                May 2024 – Present<br />
                                Continuous refinements based on production usage.
                            </p>
                        </div>

                        <div className="border border-white/10 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">
                                JKCSS v7.0.0 — Beta 1
                            </h3>
                            <p className="text-slate-300 text-sm">
                                April 2025 – Present<br />
                                Next-generation architecture and experimental
                                features.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Versions
