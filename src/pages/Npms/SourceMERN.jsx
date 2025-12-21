import React from 'react'
import { Shield, Zap, Terminal, Lock } from "lucide-react";
import { Package, Layers, Globe } from "lucide-react";

import About from '../../component/Npms/About';
import Hero from '../../component/Npms/Hero';

const SourceMERN = () => {
    return (
        <div>
            {/* Hero Section */}
            <div>
                <Hero
                    npmname="Secure-MERN"
                    title1="Secure"
                    title2="MERN Stack"
                    subtitle="A lightweight yet powerful security package for MERN applications."
                    shortdesc="Secure-MERN is an npm package designed to add enterprise-grade security features to MERN stack applications with minimal configuration."
                    version="v4.0.0"
                    npmlink="#"
                    getstarted="#install"
                    mainfeuters={[
                        { icon: <Shield />, text: "JWT Authentication & RBAC" },
                        { icon: <Lock />, text: "Built-in Security Middleware" },
                        { icon: <Zap />, text: "Plug & Play for MERN" },
                    ]}
                    coremodules={[
                        "jwt authentication",
                        "role & permission system",
                        "security middleware",
                        "rate limiting & helmet",
                    ]}
                />
            </div>

            {/* About Section */}
            <div>
                <About
                    label="About Secure-MERN"
                    title1="Enterprise Security."
                    title2="Simplified for Developers."
                    description="Secure-MERN helps developers implement strong security practices in MERN stack applications without complex setup."
                    paragraphs={[
                        "The package includes preconfigured JWT authentication, role-based access control, and centralized Express middleware.",
                        "Built-in protections like sanitization, validation, Helmet, and rate limiting help secure applications by default.",
                        "Secure-MERN scales from small projects to enterprise-grade systems while remaining easy to integrate."
                    ]}
                    highlights={[
                        {
                            icon: <Layers />,
                            title: "RBAC Ready",
                            desc: "Fine-grained role and permission management out of the box.",
                        },
                        {
                            icon: <Package />,
                            title: "Developer Friendly",
                            desc: "Minimal configuration with plug-and-play setup.",
                        },
                        {
                            icon: <Globe />,
                            title: "Production Ready",
                            desc: "Designed for real-world MERN applications and scalable systems.",
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default SourceMERN;
