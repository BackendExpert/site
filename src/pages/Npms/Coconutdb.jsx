import React from 'react'
import { Layers, Zap, Terminal, Database } from "lucide-react";
import { Flag, Package, Globe, Wrench } from "lucide-react";

import About from '../../component/Npms/About';
import Hero from '../../component/Npms/Hero';

const CoconutDB = () => {
    return (
        <div>
            {/* Hero Section */}
            <div>
                <Hero
                    npmname="CoconutDB"
                    title1="NoSQL"
                    title2="Document Database"
                    subtitle="South Asia & Sri Lanka’s first production-ready NoSQL document-oriented database."
                    shortdesc="CoconutDB is a lightweight, developer-friendly NoSQL database that stores data as JSON files, designed for simplicity, speed, and local persistence."
                    version="v3.0.0"
                    npmlink="https://www.npmjs.com/package/coconutdb"
                    getstarted="#install"
                    mainfeuters={[
                        { icon: <Database />, text: "Document-Oriented NoSQL" },
                        { icon: <Zap />, text: "Lightweight & Fast" },
                        { icon: <Terminal />, text: "Built-in CLI Tools" },
                    ]}
                    coremodules={[
                        "json document storage",
                        "file-based persistence",
                        "cli model generator",
                        "zero-config setup",
                    ]}
                />
            </div>

            {/* About Section */}
            <div>
                <About
                    label="About CoconutDB"
                    title1="Built in Sri Lanka."
                    title2="Designed for Simplicity."
                    description="CoconutDB is South Asia’s and Sri Lanka’s first production-ready NoSQL document-oriented database."
                    paragraphs={[
                        "Development of CoconutDB started on 28 November 2024 with the goal of creating a simple, file-based NoSQL database for developers.",
                        "It stores data in JSON documents, making it ideal for small-scale applications, experiments, and educational projects.",
                        "CoconutDB focuses on minimal configuration, developer productivity, and local file persistence without external dependencies."
                    ]}
                    highlights={[
                        {
                            icon: <Flag />,
                            title: "First of Its Kind",
                            desc: "South Asia & Sri Lanka’s first production-ready NoSQL document database.",
                        },
                        {
                            icon: <Wrench />,
                            title: "Developer Friendly",
                            desc: "Minimal setup with a built-in CLI to generate models quickly.",
                        },
                        {
                            icon: <Layers />,
                            title: "Document-Oriented",
                            desc: "Stores structured data as JSON documents on the filesystem.",
                        },
                        {
                            icon: <Globe />,
                            title: "Local & Lightweight",
                            desc: "Designed for local file-based persistence without heavy dependencies.",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default CoconutDB;
