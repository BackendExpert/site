import React from 'react'

const Abstract = ({
    label = "Abstract of the Research",
    title1 = "",
    paragraphs = [],
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
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        {paragraphs.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>

                </div>

                <div className='mt-8'>
                    <a href="">
                        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-blue-500/30">
                            Read More
                        </button>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Abstract