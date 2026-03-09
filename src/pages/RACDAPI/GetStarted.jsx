import React from "react";

const GetStarted = () => {
    const baseUrl = "https://racd-api-v1.vercel.app/api";

    return (
        <section className="py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-sm uppercase tracking-widest text-indigo-500 font-semibold">
                        Quickstart Guide
                    </h2>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        Get Started with RACD API
                    </h1>

                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                        Follow these steps to quickly connect to the RACD API and retrieve your first citizen or household data.
                        All endpoints use the base URL below:
                    </p>

                    {/* Base URL */}
                    <div className="mt-6 bg-gray-900 text-green-400 px-4 py-3 rounded font-mono">
                        {baseUrl}
                    </div>
                </div>

                {/* Steps */}
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Step 1 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            1. Install React + Vite
                        </h3>
                        <p className="text-gray-600 mb-3">
                            Make sure you have a React Vite project set up. If not, run:
                        </p>
                        <code className="block bg-gray-100 text-gray-800 text-sm px-4 py-3 rounded font-mono">
                            npm create vite@latest my-app --template react
                        </code>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            2. Fetch All Citizens
                        </h3>
                        <p className="text-gray-600 mb-3">
                            Use fetch in your React component to retrieve data from RACD API:
                        </p>
                        <pre className="bg-gray-100 text-gray-800 text-sm px-4 py-3 rounded font-mono overflow-x-auto">
                            {`import { useEffect, useState } from 'react';

function Citizens() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('${baseUrl}/citizen')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}

export default Citizens;`}
                        </pre>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            3. Fetch Household Data
                        </h3>
                        <p className="text-gray-600 mb-3">
                            Similarly, fetch household / housing data using:
                        </p>
                        <pre className="bg-gray-100 text-gray-800 text-sm px-4 py-3 rounded font-mono overflow-x-auto">
                            {`fetch('${baseUrl}/houses')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`}
                        </pre>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            4. Display Data in UI
                        </h3>
                        <p className="text-gray-600 mb-3">
                            Render the fetched data in your React components for real-time display.
                        </p>
                        <pre className="bg-gray-100 text-gray-800 text-sm px-4 py-3 rounded font-mono overflow-x-auto">
                            {`function CitizensList({ citizens }) {
  return (
    <ul>
      {citizens.map(c => (
        <li key={c.id}>{c.name} - {c.nationalId}</li>
      ))}
    </ul>
  );
}`}
                        </pre>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GetStarted;