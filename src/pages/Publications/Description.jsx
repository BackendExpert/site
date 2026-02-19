import React from "react";
import { SiBookstack } from "react-icons/si";

const Description = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

                {/* Left Icon */}
                <div className="flex-shrink-0 bg-white rounded-3xl p-8 shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                    <SiBookstack size={100} className="text-indigo-600" />
                </div>

                {/* Right Text */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Publications
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700">
                        Explore my portfolio of research and publications in <span className="font-semibold text-indigo-600">digital governance</span>,
                        <span className="font-semibold text-indigo-600"> secure infrastructures</span>, backend frameworks, and ICT policy development.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700">
                        The work highlights technical reports, conference papers, preprints, and presentations, bridging <span className="font-semibold text-indigo-600">theory with real-world solutions</span> for national and regional challenges.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700">
                        Focused on <span className="font-semibold text-indigo-600">security-first architectures</span>, policy-driven systems, sustainable technology strategies, and educational reforms.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Description;
