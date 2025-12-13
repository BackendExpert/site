import React from 'react';
import { ArrowRight, Code, Database, Server, Box, Terminal } from 'lucide-react';

const projectsData = [
    {
        name: 'JKCSS',
        description: 'A modern, utility-first CSS framework built to accelerate front-end development with scalable, reusable styles.',
        link: '/projects/jkcss',
        icon: <Code size={48} className="text-indigo-500" />
    },
    {
        name: 'CoconutDB',
        description: 'A lightweight, high-performance database designed for modern applications, focusing on simplicity and speed.',
        link: '/projects/coconutdb',
        icon: <Database size={48} className="text-green-500" />
    },
    {
        name: 'CoconutServeJS',
        description: 'A versatile Node.js server framework optimized for APIs, microservices, and high-performance applications.',
        link: '/projects/coconutservejs',
        icon: <Server size={48} className="text-cyan-500" />
    },
    {
        name: 'NPM Packages',
        description: 'Reusable, high-quality npm packages developed for the BlackAlphaLabs ecosystem.',
        link: '/projects/npm',
        icon: <Box size={48} className="text-orange-500" />
    },
    {
        name: 'VS Code Extensions',
        description: 'Custom VS Code extensions to enhance developer productivity and streamline coding workflows.',
        link: '/projects/vscode',
        icon: <Terminal size={48} className="text-purple-500" />
    }
];

const Projects = () => {
    return (
        <section className="relative bg-white py-28 overflow-hidden">
            {/* Optional decorative shapes */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 space-y-20">

                {/* Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
                        Our Exclusive Projects
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        BlackAlphaLabs is dedicated to creating a focused ecosystem of projects, designed to enhance developer productivity and software performance.
                        Our internal projects are built to be reliable, scalable, and innovative — forming a cohesive ecosystem for modern software development.
                    </p>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        JKCSS, CoconutDB, CoconutServeJS, NPM packages, and VS Code extensions are all carefully crafted under a single vision:
                        to provide high-quality, open-source solutions that empower developers and accelerate the creation of modern applications.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 flex flex-col items-center text-center group"
                        >
                            {/* Icon Circle */}
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-6 group-hover:bg-indigo-50 transition duration-300">
                                {project.icon}
                            </div>

                            {/* Project Name */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition duration-300">
                                {project.name}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-700 mb-6">
                                {project.description}
                            </p>

                            {/* Learn More */}
                            <a
                                href={project.link}
                                className="inline-flex items-center gap-2 font-semibold text-indigo-500 group-hover:text-indigo-600 hover:underline transition duration-300"
                            >
                                Learn More <ArrowRight size={18} />
                            </a>

                            {/* Decorative gradient circle */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full opacity-20 blur-2xl pointer-events-none"></div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Projects;
