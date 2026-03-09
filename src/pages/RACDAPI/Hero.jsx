import React from 'react'

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center bg-[url('https://wallpapercave.com/wp/wp15207751.webp')] bg-cover bg-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-8 md:px-20 md:py-0 py-40">

                <div className="max-w-2xl text-white">

                    {/* Badge */}
                    <span className="inline-block mb-6 px-4 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur border border-white/20">
                        Research Prototype API
                    </span>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        RACD <span className="text-indigo-400">API</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-xl text-gray-300">
                        Regional Administrative Citizen Data API
                    </p>

                    {/* Description */}
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                        A research-driven sandbox REST API that simulates structured
                        citizen and household data access. Designed for developers
                        and researchers to experiment with administrative data
                        systems using privacy-safe simulated datasets.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href="https://rapidapi.com/jehankandy/api/racd-api1" target='_blank'
                            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
                        >
                            Explore API
                        </a>

                        <a
                            href="#"
                            className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition font-semibold"
                        >
                            View Documentation
                        </a>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero