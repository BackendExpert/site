import React from 'react'
import { SiCss3 } from 'react-icons/si'

const About = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="relative">
                <div className="max-w-7xl mx-auto px-6 py-28">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-gray-100 text-indigo-600">
                                <SiCss3 size={28} />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
                                About JKCSS
                            </span>
                        </div>

                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            Sri Lanka & South Asia’s <br />
                            <span className="text-indigo-600">
                                First Production-Ready
                            </span>{" "}
                            Utility-First CSS Framework
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            JKCSS is a modern, enterprise-grade CSS framework
                            developed in Sri Lanka by BlackAlphaLabs. It is
                            designed to deliver predictable layouts, clean
                            semantics, and long-term maintainability for
                            real-world applications.
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
                                title: "Clarity First",
                                desc: "Human-readable utilities that encourage clean structure and reduce cognitive overhead."
                            },
                            {
                                title: "Production Ready",
                                desc: "Designed and tested for real applications, not demos or experiments."
                            },
                            {
                                title: "Predictable Layouts",
                                desc: "A layout system that behaves consistently across teams and projects."
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

            {/* WHY JKCSS */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Why JKCSS Exists
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Modern CSS frameworks often prioritize flexibility
                            over structure. JKCSS was built to bring balance —
                            allowing speed and freedom while enforcing patterns
                            that scale across large teams and long-term
                            projects.
                        </p>
                    </div>

                    <ul className="space-y-4 text-gray-600">
                        <li>• Minimal specificity conflicts</li>
                        <li>• Clean utility naming conventions</li>
                        <li>• Designed for large codebases</li>
                        <li>• Easy onboarding for new developers</li>
                        <li>• No opinionated design lock-in</li>
                    </ul>
                </div>
            </section>

            {/* VISION */}
            <section className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            A Global Framework, Built in Sri Lanka
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                            JKCSS represents a new generation of South Asian
                            engineering — confident, production-focused, and
                            globally competitive. Our mission is to prove that
                            world-class developer tools can be built locally and
                            adopted globally.
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
                            JKCSS is designed, built, and maintained by
                            BlackAlphaLabs — a Sri Lankan technology lab focused
                            on creating reliable, scalable, and maintainable
                            software solutions. Every line of JKCSS is shaped by
                            real production experience.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
