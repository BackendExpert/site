import React from 'react';
import racdImage from '../../assets/racdapi.PNG'; 

const HotProjects = () => {
    const projects = [
        {
            id: 1,
            name: 'RACD API',
            longname: 'Regional Administrative Citizen Data API',
            shortDesc:
                'A sandbox & real API infrastructure for structured citizen and household data. Perfect for testing, research, and experimentation with admin datasets.',
            link: '/api/racd-api',
            img: racdImage,
        },
    ];

    return (
        <section className="py-28 bg-gray-50 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-sm uppercase tracking-widest text-indigo-500 font-semibold">
                        Notable Projects
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                        Projects I Developed
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Highlighting key products and APIs I’ve built entirely myself, from sandbox simulations to real-world backend solutions.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                } bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200`}
                        >
                            {/* Left / Right Image */}
                            <div className="md:w-1/2 w-full h-64 md:h-auto relative">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Details */}
                            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                                <p className="text-indigo-500 font-semibold mt-2">{project.longname}</p>
                                <p className="mt-4 text-gray-600 leading-relaxed">{project.shortDesc}</p>

                                <a
                                    href={project.link}
                                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
                                >
                                    View Docs
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotProjects;