import React from "react";

const APIAccess = () => {
    const endpoints = [
        {
            title: "Get All Citizens",
            method: "GET",
            endpoint: "/citizens",
            description: "Retrieve a list of all simulated citizen records."
        },
        {
            title: "Get Citizen By ID",
            method: "GET",
            endpoint: "/citizens/{id}",
            description: "Retrieve detailed information about a specific citizen using their unique identifier."
        },
        {
            title: "Get All Houses",
            method: "GET",
            endpoint: "/houses",
            description: "Retrieve a list of all household / housing records available in the dataset."
        },
        {
            title: "Get House By ID",
            method: "GET",
            endpoint: "/houses/{id}",
            description: "Retrieve detailed information about a specific household record."
        }
    ];

    return (
        <section className="py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-sm uppercase tracking-widest text-indigo-500 font-semibold">
                        API Access
                    </h2>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        RACD API Infrastructure
                    </h1>

                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                        The Regional Administrative Citizen Data API (RACD API) provides a
                        structured interface for accessing simulated administrative citizen
                        and household data. The API demonstrates how regional government
                        institutions could securely exchange structured data through
                        standardized RESTful endpoints.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        The current release <span className="font-semibold">RACD API v1 (Beta)</span>
                        includes endpoints for retrieving citizen records and housing data
                        using structured JSON responses. All datasets are simulated and
                        intended for development, research, and testing purposes only.
                    </p>

                    {/* RapidAPI Button */}
                    <a
                        href="https://rapidapi.com/jehankandy/api/racd-api1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
                    >
                        Access on RapidAPI →
                    </a>
                </div>

                {/* Endpoint Section */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-10">
                        Available Endpoints
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {endpoints.map((api, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        {api.title}
                                    </h4>

                                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded">
                                        {api.method}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4">{api.description}</p>

                                <code className="block bg-gray-900 text-green-400 text-sm px-4 py-3 rounded">
                                    {api.endpoint}
                                </code>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default APIAccess;