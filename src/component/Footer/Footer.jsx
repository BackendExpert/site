import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#1C1B1B] py-4 relative overflow-hidden'>

            {/* subtle glow effect */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#00F2FF]/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00F2FF]/5 blur-3xl rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 xl:px-32 px-6 relative z-10">

                {/* Brand Section */}
                <div>
                    <h1 className="text-[#00F2FF] text-2xl font-semibold tracking-wide">
                        BlackAlphaLabs
                    </h1>

                    <p className="pt-4 text-[#A1A1A1] text-sm leading-6">
                        A product-driven innovation lab focused on building its own ecosystem:
                        JKCSS, CoconutDB, CoconutServeJS, APIs, NPM packages, and VS Code extensions.
                        All products are independently designed, maintained, and optimized for developers worldwide.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h1 className="text-[#00F2FF] text-xl font-medium mb-4">Quick Links</h1>

                    <ul className="space-y-2 text-[#CFCFCF]">
                        {[
                            { name: "Home", link: "/" },
                            { name: "About Us", link: "/about" },
                            { name: "EcoSystem", link: "/eco-system" },
                            { name: "Publications", link: "/publications" },
                            { name: "DevTools", link: "/devtools" },
                            { name: "APIs", link: "/apis" }
                        ].map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.link}
                                    className="relative inline-block group hover:text-[#00F2FF] transition duration-300"
                                >
                                    {item.name}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00F2FF] transition-all duration-500 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* External Links */}
                <div>
                    <h1 className="text-[#00F2FF] text-xl font-medium mb-4">View More</h1>

                    <ul className="space-y-2 text-[#CFCFCF]">
                        {[
                            { name: "LinkedIn", link: "https://www.linkedin.com/in/jehanweerasuriya/" },
                            { name: "Google Scholar", link: "https://scholar.google.com/citations?hl=en&user=t4_aNDoAAAAJ" },
                            { name: "ResearchGate", link: "https://www.researchgate.net/profile/Jehan-Weerasuriya-2/" },
                            { name: "GitHub", link: "https://github.com/BackendExpert" }
                        ].map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block group hover:text-[#00F2FF] transition duration-300"
                                >
                                    {item.name}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00F2FF] transition-all duration-500 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Map */}
                <div className="w-full">
                    <h1 className="text-[#00F2FF] text-xl font-medium mb-4">Location</h1>

                    <div className="rounded-xl overflow-hidden border border-[#2A2A2A] shadow-xl hover:shadow-[0_10px_40px_rgba(0,242,255,0.15)] transition duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023603.398518402!2d79.3868283449436!3d7.858350394202677!2m3!1f0!2f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1774691018786!5m2!1sen!2slk"
                            width="100%"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="md:flex justify-between xl:px-32 px-6 border-t border-[#2A2A2A] pt-6 text-center text-sm text-[#888] relative z-10">
                <div>
                    <span className='text-xl'> &copy;</span> {new Date().getFullYear()} <span className='uppercase'>blackalphalabs | all rights reserved</span>
                </div>
                <div className="mt-2 md:mt-0 flex items-center justify-center md:justify-end gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse"></span>
                    <span>Built for developers</span>
                </div>
            </div>

        </div>
    )
}

export default Footer