import React from 'react';
import sitelogo from '../../assets/SiteLogo.png';

const About = () => {
    return (
        <section className="bg-white min-h-screen py-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">

                {/* Header */}
                <div className="text-center">
                    <img
                        src={sitelogo}
                        alt="BlackAlphaLabs Logo"
                        className="w-28 mx-auto mb-6"
                    />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        About BlackAlphaLabs
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A founder-led product engineering lab dedicated to building
                        world-class developer tools, frameworks, and platforms.
                    </p>
                </div>

                {/* History */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Our History</h2>
                    <p className="text-gray-700 leading-relaxed">
                        BlackAlphaLabs was founded by Jehan Weerasuriya with a vision of creating
                        a unified ecosystem of developer-first tools and platforms. The
                        company has always focused on producing internally driven products
                        with scalability, performance, and developer experience as the core
                        principles.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The journey began in <strong>May 2023</strong> with the first
                        production release of <strong>JKCSS</strong>, a modern, utility-first
                        CSS framework designed to simplify and accelerate front-end
                        development. Building on this success, the lab launched its first
                        NPM package in <strong>April 2024</strong>, providing developers
                        reusable libraries to streamline workflows and increase productivity.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        In <strong>November 2024</strong>, <strong>CoconutDB</strong> was
                        introduced, a lightweight, high-performance database tailored for
                        modern applications. Shortly after, <strong>CoconutServeJS</strong>
                        and other tools such as APIs and VS Code extensions joined the
                        ecosystem, creating a fully integrated platform of developer products.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Each product in the BlackAlphaLabs ecosystem is conceived, architected,
                        and maintained independently, reflecting a consistent philosophy of
                        quality, long-term maintainability, and innovation. The lab does not
                        engage in client services or outsourcing, ensuring full focus on its
                        own ecosystem and long-term vision.
                    </p>
                </div>

                {/* Mission */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to build products that developers love, providing tools
                        and platforms that simplify development, enhance productivity, and
                        foster innovation. BlackAlphaLabs is committed to long-term solutions,
                        creating internally driven products rather than short-term client work.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        By focusing on an integrated ecosystem, every product contributes to a
                        seamless developer experience from front-end to back-end, from utilities
                        to frameworks, while maintaining performance, usability, and scalability.
                    </p>
                </div>

                {/* Vision */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        BlackAlphaLabs envisions a future where developers have access to
                        fully integrated, high-quality tools that empower them to build
                        innovative applications with confidence. We aim to set industry standards
                        for developer-first products while maintaining long-term maintainability
                        and consistency across the ecosystem.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The long-term vision is to continuously expand the ecosystem,
                        introducing new and innovative projects under the BlackAlphaLabs
                        umbrella, while keeping each product focused on clarity, scalability,
                        and developer experience.
                    </p>
                </div>

                {/* Core Values / Philosophy */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Our Philosophy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Every product at BlackAlphaLabs is guided by key principles:
                        developer experience first, minimal by design, performance over
                        complexity, scalable architecture, and an open-source mindset.
                        These principles ensure that our tools are intuitive, maintainable,
                        and reliable for years to come.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Being founder-led allows us to focus on long-term vision and quality
                        without compromise. This approach shapes every decision and product,
                        ensuring innovation, consistency, and trust throughout the ecosystem.
                    </p>
                </div>

                {/* Call to Explore */}
                <div className="text-center pt-12">
                    <a
                        href="#ecosystem"
                        className="inline-block px-8 py-3 rounded-full bg-gray-900 text-white font-semibold
                        hover:bg-gray-800 transition"
                    >
                        Explore the Ecosystem
                    </a>
                </div>

            </div>
        </section>
    );
};

export default About;
