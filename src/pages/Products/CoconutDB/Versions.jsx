import React from "react";
import { FaRocket, FaClock } from "react-icons/fa";

const Versions = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">

            {/* HEADER */}
            <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    CoconutDB Versions & Timeline
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                    A complete timeline of CoconutDB — from early development to
                    the current beta release. Each milestone reflects real
                    architectural and production-driven evolution.
                </p>
            </section>

            {/* CURRENT VERSION */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-10 text-white shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <FaRocket size={28} />
                        <h2 className="text-2xl font-bold">
                            Current Release Status
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-6">

                        {/* Current */}
                        <div className="flex-1">
                            <p className="text-sm uppercase tracking-wide opacity-90">
                                Active Release
                            </p>
                            <h3 className="text-4xl font-extrabold mt-2">
                                v3.0.0-beta
                            </h3>
                            <p className="mt-3 text-white/90 max-w-xl">
                                Third major beta release featuring simplified
                                integration, refactored core architecture, and
                                major performance improvements.
                            </p>
                        </div>

                        {/* Next */}
                        <div className="flex-1 bg-white/15 rounded-3xl p-6 backdrop-blur text-white mt-6 md:mt-0">
                            <h3 className="text-xl font-semibold mb-2">
                                Upcoming
                            </h3>
                            <p className="text-white/90 mb-3">
                                Production Stable (v3.x)
                            </p>
                            <ul className="text-white/80 text-sm space-y-2">
                                <li>• Stability hardening</li>
                                <li>• API finalization</li>
                                <li>• Documentation & tooling</li>
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

                    {/* INITIAL DEV */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Initial Development — v1.0.0
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Sep – Nov 2024
                        </p>
                        <p className="mt-4 text-gray-600">
                            Core database structure, initial testing, and the
                            first public NPM release. Introduced CRUD
                            operations and a lightweight storage engine.
                        </p>
                    </div>

                    {/* v2 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Feature Expansion — v2.0.0
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Nov – Dec 2024
                        </p>
                        <p className="mt-4 text-gray-600">
                            Extended querying capabilities and internal
                            performance improvements focused on real workloads.
                        </p>
                    </div>

                    {/* WEB ALPHA */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            CoconutDB Web Alpha
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Jan – Feb 2025
                        </p>
                        <p className="mt-4 text-gray-600">
                            Temporary public web-based interface for early
                            adopters and testers. Insights from this phase
                            directly influenced the architectural changes in
                            v3.0.0-beta. This alpha has since concluded.
                        </p>
                    </div>

                    {/* PLANNING */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Planning & Proposal Drafting
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            March 2025
                        </p>
                        <p className="mt-4 text-gray-600">
                            Research objectives, long-term scope, and system
                            direction finalized based on prior development and
                            evaluation phases.
                        </p>
                    </div>

                    {/* v3 */}
                    <div className="bg-white border border-emerald-200 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Third Major Release — v3.0.0-beta
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            03 June 2025
                        </p>
                        <p className="mt-4 text-gray-600">
                            Refactored core engine, simplified integration, and
                            significant performance revamp. Marked CoconutDB’s
                            transition toward production stability.
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
                                Beta Stabilization Phase
                            </h3>
                            <p className="text-slate-300 text-sm">
                                June 2025 – Present<br />
                                Bug fixes, performance tuning, and API
                                consistency improvements.
                            </p>
                        </div>

                        <div className="border border-white/10 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">
                                Production Stable Release
                            </h3>
                            <p className="text-slate-300 text-sm">
                                Planned<br />
                                Finalized APIs, full documentation, and long-term
                                support readiness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Versions;
