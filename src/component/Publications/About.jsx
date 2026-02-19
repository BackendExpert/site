import React from "react";

const About = ({
    label = "About the Research",
    title1 = "Engineering Secure Systems.",
    title2 = "Designing National Frameworks.",
    description,
    paragraphs = [],
    highlights = [],
}) => {
    return (
        <section className="relative bg-[#050b14] text-white overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />
            <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-blue-600/10 blur-[140px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

                <div className="max-w-3xl mb-16">
                    <p className="text-xs tracking-[0.3em] text-blue-300 font-semibold uppercase mb-4">
                        {label}
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        {title1} <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            {title2}
                        </span>
                    </h2>

                    {description && (
                        <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        {paragraphs.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>

                    {highlights.length > 0 && (
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
                    )}

                </div>
            </div>
        </section>
    );
};

const Highlight = ({ icon, title, desc }) => (
    <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/40 transition">
        <div className="text-blue-400 mt-1">{icon}</div>
        <div>
            <h4 className="font-semibold text-white mb-1">{title}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default About;
