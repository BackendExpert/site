import React from 'react';

const products = [
    {
        name: 'JKCSS',
        desc: 'A modern utility-first CSS framework focused on clean, scalable UI systems.'
    },
    {
        name: 'CoconutDB',
        desc: 'A lightweight, developer-friendly database designed for performance and simplicity.'
    },
    {
        name: 'CoconutServeJS',
        desc: 'A minimal server framework built for speed, clarity, and control.'
    },
    {
        name: 'APIs',
        desc: 'High-performance APIs engineered for modern applications and platforms.'
    },
    {
        name: 'NPM Packages',
        desc: 'Reusable libraries designed to improve developer productivity and code quality.'
    },
    {
        name: 'VS Code Extensions',
        desc: 'Developer tools that enhance workflow, focus, and efficiency.'
    }
];

const Ecosystem = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Ecosystem
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        A focused collection of developer-first products built and maintained under
                        the BlackAlphaLabs ecosystem.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl border border-gray-200
                            hover:border-indigo-400 transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {item.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
