import React from 'react';
import { CheckCircle, Clock, Zap } from 'lucide-react';

const milestones = [
    {
        title: "v1 Beta Release (Sandbox)",
        date: "March 2026",
        description: "Initial public beta release with simulated citizen and household data endpoints.",
        status: "completed",
    },
    {
        title: "Alpha Access (Limited)",
        date: "",
        description: "Early access to the real API built with NestJS for selected developers and researchers. Limited time usage for testing real endpoints.",
        status: "upcoming",
    },
    {
        title: "v1 Full Release",
        date: "",
        description: "Official public release of the RACD API with stable real endpoints and production-ready documentation.",
        status: "upcoming",
    },
    {
        title: "Expanded Modules & Data",
        date: "2027",
        description: "Add additional administrative data modules, enhanced role-based access, and integration examples for regional government systems.",
        status: "upcoming",
    },
    {
        title: "v2 Full Simulation",
        date: "2027+",
        description: "Full-scale simulation of regional administrative data infrastructure with advanced features, real-time dashboards, and extended datasets.",
        status: "upcoming",
    },
];

const RoadMap = () => {
    return (
        <section className="py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-widest text-indigo-500 font-semibold">
                        Roadmap
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        RACD API Development Timeline
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Track the progress of RACD API, from sandbox endpoints to the fully-featured real API built with NestJS. Alpha and Beta releases are limited-time access for selected developers.
                    </p>
                </div>

                {/* Centered Timeline */}
                <div className="relative">
                    {/* Vertical line in the middle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-indigo-200"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className="relative w-full flex flex-col md:flex-row justify-between items-center"
                                >
                                    {/* Left Card */}
                                    <div
                                        className={`w-full md:w-1/2 md:pr-8 md:text-right ${isLeft ? 'order-1 md:order-1' : 'order-2 md:order-1'
                                            }`}
                                    >
                                        {(isLeft || window.innerWidth < 768) && (
                                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                                                <h3 className="text-xl font-semibold text-gray-900">
                                                    {milestone.title}
                                                </h3>
                                                <span className="text-sm text-gray-500">{milestone.date}</span>
                                                <p className="mt-2 text-gray-600">{milestone.description}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Timeline Circle */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-indigo-500 shadow-lg z-10">
                                        {milestone.status === 'completed' ? (
                                            <CheckCircle className="text-green-500 w-6 h-6" />
                                        ) : milestone.title.includes('Alpha') ? (
                                            <Zap className="text-yellow-500 w-6 h-6" />
                                        ) : (
                                            <Clock className="text-gray-400 w-6 h-6" />
                                        )}
                                    </div>

                                    {/* Right Card */}
                                    <div
                                        className={`w-full md:w-1/2 md:pl-8 md:text-left ${isLeft ? 'order-2 md:order-2' : 'order-1 md:order-2'
                                            }`}
                                    >
                                        {(!isLeft || window.innerWidth < 768) && (
                                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mt-6 md:mt-0">
                                                <h3 className="text-xl font-semibold text-gray-900">
                                                    {milestone.title}
                                                </h3>
                                                <span className="text-sm text-gray-500">{milestone.date}</span>
                                                <p className="mt-2 text-gray-600">{milestone.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadMap;