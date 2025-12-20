import React from 'react'
import { Layers, Zap, Terminal } from "lucide-react";
import { Flag, Package, Globe } from "lucide-react";

import About from '../../component/Npms/About';
import Hero from '../../component/Npms/Hero'


const JKCss = () => {
    return (
        <div>
            <div className="">
                <Hero
                    npmname="JKCSS"
                    title1="Utility-First"
                    title2="CSS Framework"
                    subtitle="The first utility-first CSS framework developed in Sri Lanka."
                    shortdesc="JKCSS is a modern, lightweight CSS framework focused on speed, flexibility, and developer control."
                    version="v6.0.0"
                    npmlink="https://www.npmjs.com/package/@jehankandy/jkcss"
                    getstarted="#install"
                    mainfeuters={[
                        { icon: <Layers />, text: "Utility-First Design" },
                        { icon: <Zap />, text: "Fast & Lightweight" },
                        { icon: <Terminal />, text: "npm Ready" },
                    ]}
                    coremodules={[
                        "utilities",
                        "grid / rows / columns",
                        "icons",
                        "js components",
                    ]}
                />
            </div>

            <div className="">
                <About
                    label="About JKCSS"
                    title1="Built in Sri Lanka."
                    title2="Designed for the World."
                    description="JKCSS is the first utility-first CSS framework developed in Sri Lanka."
                    paragraphs={[
                        "JKCSS follows a utility-first philosophy, enabling developers to build consistent interfaces directly in markup.",
                        "It is published as an npm package and integrates seamlessly into modern frontend workflows.",
                        "Each release focuses on performance, clarity, and long-term maintainability."
                    ]}
                    highlights={[
                        {
                            icon: <Flag />,
                            title: "First of Its Kind",
                            desc: "The first utility-first CSS framework developed in Sri Lanka.",
                        },
                        {
                            icon: <Package />,
                            title: "npm Ecosystem",
                            desc: "Distributed and versioned through npm for modern workflows.",
                        },
                        {
                            icon: <Layers />,
                            title: "Utility-First Core",
                            desc: "Low-level utility classes for scalable UI systems.",
                        },
                        {
                            icon: <Globe />,
                            title: "Global Ready",
                            desc: "Designed for international teams and production systems.",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default JKCss