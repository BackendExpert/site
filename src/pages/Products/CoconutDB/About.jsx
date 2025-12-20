import React from "react";
import { Database } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="relative">
                <div className="max-w-7xl mx-auto px-6 py-28">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
                                <Database size={28} />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
                                About CoconutDB
                            </span>
                        </div>

                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            Sri Lanka & South Asia’s <br />
                            <span className="text-emerald-600">
                                First Production-Ready
                            </span>{" "}
                            Document-Oriented NoSQL Database
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            CoconutDB is a modern, high-performance,
                            document-oriented NoSQL database developed in Sri
                            Lanka by BlackAlphaLabs. It is designed to power
                            real-world applications with flexible data models,
                            predictable behavior, and production-grade
                            reliability.
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
                                title: "Document-Centric Design",
                                desc: "Store, query, and evolve data using flexible JSON-like documents without rigid schemas."
                            },
                            {
                                title: "Built for Production",
                                desc: "Designed for real systems with consistency, durability, and performance as first-class goals."
                            },
                            {
                                title: "Predictable Performance",
                                desc: "Optimized query paths and indexing strategies for stable performance at scale."
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY COCONUTDB */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Why CoconutDB Exists
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Modern databases often sacrifice clarity for
                            flexibility or performance for simplicity.
                            CoconutDB was built to strike a deliberate balance —
                            enabling flexible document storage while preserving
                            structure, predictability, and operational control
                            in production environments.
                        </p>
                    </div>

                    <ul className="space-y-4 text-gray-600">
                        <li>• Document-oriented data modeling</li>
                        <li>• Optional schema validation</li>
                        <li>• Designed for large-scale applications</li>
                        <li>• Developer-friendly query APIs</li>
                        <li>• No vendor lock-in</li>
                    </ul>
                </div>
            </section>

            {/* VISION */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            A Global Database, Built in Sri Lanka
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                            CoconutDB represents a new generation of South Asian
                            systems engineering — focused on correctness,
                            performance, and long-term reliability. Our goal is
                            to build globally competitive database infrastructure
                            engineered and maintained locally.
                        </p>
                    </div>
                </div>
            </section>

            {/* BUILT BY */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 pb-32 pt-24">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Built by BlackAlphaLabs
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            CoconutDB is designed, built, and maintained by
                            BlackAlphaLabs — a Sri Lankan technology lab focused
                            on building reliable, scalable, and maintainable
                            software infrastructure for real-world systems.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
