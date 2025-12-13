import React from 'react';

const principles = [
    'Developer Experience First',
    'Minimal by Design',
    'Performance Over Complexity',
    'Scalable Architecture',
    'Open-Source Mindset'
];

const EngineeringPhilosophy = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    Engineering Philosophy
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {principles.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl bg-[#f8fafc] border border-gray-200"
                        >
                            <p className="text-lg font-medium text-gray-900">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeringPhilosophy;
