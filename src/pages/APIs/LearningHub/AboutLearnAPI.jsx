import React from "react";
import { Database, Globe, Zap, Key } from "lucide-react";

const AboutLearnAPI = () => {
    return (
        <section className="relative bg-[#0b1220] text-white overflow-hidden py-24 px-6 lg:px-12">

            {/* Background Accent Glows */}
            <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[200px]" />

            {/* Header */}
            <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
                <p className="text-xs sm:text-sm tracking-[0.3em] text-blue-300 font-semibold uppercase mb-4">
                    About LearningHUB API
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                        Modern Educational API
                    </span>
                </h2>
                <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                    LearningHUB API by BlackAlphaLabs delivers fast, secure, and scalable educational data for apps, web platforms, and desktop tools. Designed to save developers time while providing reliable course, content, and user resources.
                </p>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Left: Core Features */}
                <div className="space-y-8">
                    <FeatureCard
                        title="Core Capabilities"
                        features={[
                            { icon: <Database className="text-blue-400" />, text: "RESTful Endpoints for easy integration" },
                            { icon: <Zap className="text-blue-400" />, text: "High performance & scalable" },
                            { icon: <Globe className="text-blue-400" />, text: "Supports mobile, web & Electron apps" },
                            { icon: <Key className="text-blue-400" />, text: "Secured with API key management" },
                        ]}
                    />

                    <FeatureCard
                        title="Alpha Version"
                        features={[
                            { icon: <Zap className="text-blue-400" />, text: "Endpoints currently in alpha" },
                            { icon: <Database className="text-blue-400" />, text: "Public access not yet available" },
                            { icon: <Globe className="text-blue-400" />, text: "Designed for internal testing & demos" },
                        ]}
                    />
                </div>

                {/* Right: Future Plans & Usage */}
                <div className="space-y-8">
                    <FeatureCard
                        title="Usage"
                        features={[
                            { icon: <Database className="text-blue-400" />, text: "Connect via RapidAPI for development" },
                            { icon: <Key className="text-blue-400" />, text: "API keys required once public" },
                            { icon: <Zap className="text-blue-400" />, text: "Fast JSON responses for courses, content & users" },
                        ]}
                    />

                    <FeatureCard
                        title="Future Updates"
                        features={[
                            { icon: <Globe className="text-blue-400" />, text: "Full public release with documentation" },
                            { icon: <Database className="text-blue-400" />, text: "Advanced search & filtering" },
                            { icon: <Key className="text-blue-400" />, text: "Flexible plans & premium features" },
                            { icon: <Zap className="text-blue-400" />, text: "Expanded data coverage & endpoints" },
                        ]}
                    />
                </div>

            </div>
        </section>
    );
};

const FeatureCard = ({ title, features }) => (
    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
        <ul className="space-y-3">
            {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                    {f.icon}
                    <span className="text-gray-300 text-sm">{f.text}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default AboutLearnAPI;
