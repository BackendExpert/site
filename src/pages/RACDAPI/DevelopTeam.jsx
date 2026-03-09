import React from 'react';
import CEO from '../../assets/CEO.jpg';

const DevelopTeam = () => {
    return (
        <section className="py-28 bg-gray-50 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center md:text-left">

                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-sm uppercase tracking-widest text-indigo-500 font-semibold">
                        About
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        Meet the Developer
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-3xl">
                        The RACD API was conceptualized, designed, and developed entirely by one person — no team involved. From architecture to implementation, every aspect was crafted for reliability, scalability, and real-world usability.
                    </p>
                </div>

                {/* Developer Card */}
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 space-y-6 md:space-y-0">
                    <div className="flex-shrink-0">
                        <img
                            src={CEO}
                            alt="Jehan Weerasuriya"
                            className="w-40 h-40 object-contain rounded-full border-4 border-indigo-500 shadow-lg"
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Jehan Weerasuriya
                        </h3>
                        <p className="mt-2 text-indigo-500 font-semibold">
                            Founder & CEO · Product Architect · Lead Software Engineer
                        </p>
                        <p className="mt-4 text-gray-600 max-w-xl">
                            Every feature, endpoint, and architectural decision of RACD API has been developed personally by Jehan. This includes the sandbox and real API, NestJS backend architecture, and all related documentation and demos.
                        </p>
                    </div>
                </div>

                {/* Credits / Note */}
                <div className="mt-16 text-gray-500 text-sm md:text-left text-center">
                    <p>© 2026 Jehan Weerasuriya · All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default DevelopTeam;