import React from 'react'
import { FaTools, FaBox, FaCode, FaServer, FaDatabase, } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";


const HomeEco = () => {
    const ecosystem = [
        {
            name: "JKCSS",
            desc: "A modern utility-first CSS framework focused on clean, scalable UI systems.",
            icon: IoLayers,
            tags: [
                { name: "CSS" },
                { name: "UI" },
                { name: "Design" },
                { name: "Framework" },
                { name: "Responsive" },
                { name: "Utility-first" }
            ]
        },
        {
            name: "CoconutDB",
            desc: "A lightweight, developer-friendly database designed for performance and simplicity.",
            icon: FaDatabase,
            tags: [
                { name: "Database" },
                { name: "Lightweight" },
                { name: "NoSQL" },
                { name: "Performance" },
                { name: "Developer-friendly" },
                { name: "Simple" }
            ]
        },
        {
            name: "CoconutServeJS",
            desc: "A minimal server framework built for speed, clarity, and control.",
            icon: FaServer,
            tags: [
                { name: "Server" },
                { name: "Framework" },
                { name: "Node.js" },
                { name: "Fast" },
                { name: "Minimal" },
                { name: "Control" }
            ]
        },
        {
            name: "APIs",
            desc: "High-performance APIs engineered for modern applications and platforms.",
            icon: FaCode,
            tags: [
                { name: "API" },
                { name: "REST" },
                { name: "GraphQL" },
                { name: "High-performance" },
                { name: "Integration" },
                { name: "Backend" }
            ]
        },
        {
            name: "NPM Packages",
            desc: "Reusable libraries designed to improve developer productivity and code quality.",
            icon: FaBox,
            tags: [
                { name: "NPM" },
                { name: "Library" },
                { name: "Reusable" },
                { name: "Productivity" },
                { name: "JavaScript" },
                { name: "Code-quality" }
            ]
        },
        {
            name: "VS Code Extensions",
            desc: "Developer tools that enhance workflow, focus, and efficiency.",
            icon: FaTools,
            tags: [
                { name: "VS Code" },
                { name: "Extensions" },
                { name: "Productivity" },
                { name: "Workflow" },
                { name: "Developer-tools" },
                { name: "Efficiency" }
            ]
        }
    ];
    return (
        <div className='bg-[#131313] py-24 xl:px-32 px-8'>
            <h1 className="text-4xl text-white">The Ecosystem</h1>
            <p className="pt-8 text-[#ADABAA]">A focused collection of developer-first products built and maintained under the BlackAlphaLabs ecosystem.</p>

            <div className="grid xl:grid-cols-3 gap-8 mt-8">
                {
                    ecosystem.map((data, index) => {
                        const Icon = data.icon;
                        return (
                            <div className="bg-[#1C1B1B] p-8" key={index}>
                                <div className="p-3 bg-[#00E0FE]/20 inline-block">
                                    <Icon size={24} className="text-[#00E0FE]" />
                                </div>

                                <div className="mt-4">
                                    <h1 className="text-2xl font-semibold text-white">{data.name}</h1>

                                    <p className="text-[#ADABAA] pt-2">
                                        {data.desc}
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {data.tags.map((tag, tagIndex) => {
                                        return (
                                            <div
                                                key={tagIndex}
                                                className="p-2 bg-[#00E0FE]/20 text-[#00E0FE] text-sm rounded"
                                            >
                                                {tag.name}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeEco