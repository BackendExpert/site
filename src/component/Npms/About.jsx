import React from "react";

const About = ({
    label = "About",
    title1 = "Built in Sri Lanka.",
    title2 = "Designed for the World.",
    description,
    paragraphs = [],
    highlights = [],
}) => {
    return (
        <section className="relative bg-[#0b0b0e] text-white overflow-hidden">

            {/* Top Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

            {/* Accent Glow */}
            <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-red-600/10 blur-[140px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <p className="text-xs tracking-[0.3em] text-rose-300 font-semibold uppercase mb-4">
                        {label}
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        {title1} <br />
                        <span className="bg-gradient-to-r from-rose-400 to-red-600 bg-clip-text text-transparent">
                            {title2}
                        </span>
                    </h2>

                    {description && (
                        <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    )}
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Text */}
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        {paragraphs.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>

                    {/* Highlights */}
                    <div className="grid gap-6">
                        {highlights.map((item, i) => (
                            <Highlight
                                key={i}
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Highlight = ({ icon, title, desc }) => (
    <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-red-500/30 transition">
        <div className="text-rose-400 mt-1">{icon}</div>
        <div>
            <h4 className="font-semibold text-white mb-1">{title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default About;
