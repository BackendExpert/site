import React from "react";

const Introduction = () => {
    return (
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-sm font-semibold tracking-widest text-indigo-500 uppercase">
                        Research Overview
                    </h2>

                    <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Introduction to{" "}
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            RACD API
                        </span>
                    </h1>

                    <div className="w-24 h-1 bg-indigo-500 mt-6 rounded"></div>
                </div>

                {/* Content Card */}
                <div className=" p-8 md:p-12">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Modern digital governance increasingly relies on interoperable
                        application programming interfaces (APIs) to facilitate secure and
                        efficient data exchange among administrative systems. This study
                        presents the prototype implementation of the{" "}
                        <span className="font-semibold text-indigo-500">
                            Regional Administrative Citizen Data API (RACD API)
                        </span>
                        , a sandbox RESTful service designed to simulate structured citizen
                        and household data access.
                    </p>

                    <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                        Implemented using Node.js and Express.js, the prototype is deployed
                        as a publicly accessible demonstration API through RapidAPI. The
                        RACD API provides endpoints for retrieving citizen and household
                        records from structured JSON datasets, enabling developers and
                        researchers to experiment with administrative data APIs without
                        accessing real government data.
                    </p>

                    <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                        The implementation follows a modular controller-based architecture
                        and RESTful design principles. Importantly, the dataset used in
                        this prototype contains simulated data to ensure privacy and
                        ethical compliance.
                    </p>

                    <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                        This implementation serves as an experimental step toward the
                        broader{" "}
                        <span className="font-semibold text-indigo-500">
                            Secure National Government API Infrastructure (SNGAPI)
                        </span>
                        , a conceptual architecture intended to support secure,
                        policy-driven, and interoperable government data services.
                    </p>

                    <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                        The RACD API demonstrates how lightweight API layers can simulate
                        administrative data systems for research, developer onboarding,
                        and architectural experimentation prior to deploying full-scale
                        secure infrastructures.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Introduction;