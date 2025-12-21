import React from 'react'
import { Layers, Zap, Terminal, Component } from "lucide-react";
import { Flag, Package, Globe, Code } from "lucide-react";

import About from '../../component/Npms/About';
import Hero from '../../component/Npms/Hero';

const ReactJKCSSNPM = () => {
    return (
        <div>
            {/* Hero Section */}
            <div>
                <Hero
                    npmname="React-JKCSS"
                    title1="React"
                    title2="UI Components"
                    subtitle="Dynamic front-end development with React-powered JKCSS components."
                    shortdesc="React-JKCSS is a React-based component framework built on top of JKCSS, enabling dynamic, scalable, and modern front-end development."
                    version="v1.0.0"
                    npmlink="#"
                    getstarted="#install"
                    mainfeuters={[
                        { icon: <Component />, text: "React Component Library" },
                        { icon: <Zap />, text: "Dynamic UI Development" },
                        { icon: <Terminal />, text: "Developer Friendly" },
                    ]}
                    coremodules={[
                        "react components",
                        "jkcss utilities",
                        "dynamic ui blocks",
                        "reusable layouts",
                    ]}
                />
            </div>

            {/* About Section */}
            <div>
                <About
                    label="About React-JKCSS"
                    title1="Built with React."
                    title2="Powered by JKCSS."
                    description="React-JKCSS is the first Sri Lankan React-supported front-end development CSS framework."
                    paragraphs={[
                        "React-JKCSS is developed in parallel with JKCSS, ensuring full compatibility with the core utility-first framework.",
                        "It provides prebuilt and reusable React components styled using JKCSS utilities.",
                        "The framework focuses on dynamic front-end development, scalability, and clean component architecture."
                    ]}
                    highlights={[
                        {
                            icon: <Flag />,
                            title: "Sri Lankan First",
                            desc: "The first React-supported CSS framework developed in Sri Lanka.",
                        },
                        {
                            icon: <Code />,
                            title: "React-Driven",
                            desc: "Built entirely with reusable React components for modern UIs.",
                        },
                        {
                            icon: <Layers />,
                            title: "JKCSS Core",
                            desc: "Powered by the JKCSS utility-first design system.",
                        },
                        {
                            icon: <Globe />,
                            title: "Production Ready",
                            desc: "Designed for scalable, real-world front-end applications.",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default ReactJKCSSNPM;
