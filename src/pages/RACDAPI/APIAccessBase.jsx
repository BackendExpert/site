import React from "react";

const APIAccessBase = () => {
    const baseUrl = "https://racd-api-v1.vercel.app/api";

    const endpoints = [
        {
            title: "Get All Citizens",
            method: "GET",
            endpoint: "/citizan",
            description: "Retrieve all simulated citizen records."
        },
        {
            title: "Get Citizen By ID",
            method: "GET",
            endpoint: "/citizan/{id}",
            description: "Retrieve a specific citizen using their unique ID."
        },
        {
            title: "Get All Houses",
            method: "GET",
            endpoint: "/house",
            description: "Retrieve all household/housing records."
        },
        {
            title: "Get House By ID",
            method: "GET",
            endpoint: "/house/{id}",
            description: "Retrieve a specific household using its unique ID."
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
                        RACD API Base Access
                    </h1>

                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                        Connect directly to the RACD API using the base URL below. All
                        endpoints provide simulated administrative citizen and household data
                        for development, testing, and research purposes.
                    </p>

                    {/* Base URL Display */}
                    <div className="mt-6 bg-gray-900 text-green-400 px-4 py-3 rounded font-mono">
                        {baseUrl}
                    </div>
                </div>

                {/* Endpoint Section */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-10">
                        Available Endpoints
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {endpoints.map((api, index) => {
                            // Correct spelling for display
                            let displayEndpoint = api.endpoint
                                .replace("citizan", "citizen")
                                .replace("house", "houses");

                            return (
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

                                    <code className="block bg-gray-900 text-green-400 text-sm px-4 py-3 rounded font-mono">
                                        {baseUrl + displayEndpoint}
                                    </code>

                                    {/* React Vite Example */}
                                    <pre className="bg-gray-100 text-gray-800 text-sm p-3 rounded mt-4 overflow-x-auto font-mono">
                                        {`// React (Vite) example
import { useEffect, useState } from 'react';

function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('${baseUrl + displayEndpoint.replace("{id}", "1")}')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}

export default Example;`}
                                    </pre>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default APIAccessBase;