import React from 'react'
import DefultButton from '../../component/buttons/DefultButton'
import SecButton from '../../component/buttons/SecButton'
import HeroHome from '../../assets/HeroHome.jpg'
import { GoDotFill } from "react-icons/go";
import SiteLogoBlue from '../../assets/SiteLogoBlue.png'


const Hero = () => {
    return (
        <div className='xl:py-48 md:pt-40 py-24 bg-[#050505] min-h-screen text-white px-4 xl:px-40'>
            <div className="xl:flex hidden flex-col xl:flex-row justify-between items-start xl:items-center">
                <div className="w-full xl:w-1/2">
                    <div className="text-xs inline-block bg-[#ffffff10] backdrop-blur-md  px-5 py-2 rounded-lg text-white">
                        <div className="flex">
                            <span className='mt-[0.2rem]'>
                                <GoDotFill className='fill-[#00E0FE]' />
                            </span>
                            <span className='ml-2 uppercase tracking-[0.1rem] text-[#00E0FE]'>system v4 0.2 stable</span>
                        </div>
                    </div>
                    <h1 className='text-5xl sm:text-6xl xl:text-7xl leading-tight mt-2'>
                        <p className='py-1'>Building the </p>
                        <p className='py-1'><span style={{ fontStyle: 'italic', color: '#00E0FE' }}>Future</span> of </p>
                        <p className='py-1'>Software </p>
                        <p className='py-1'>Innovations </p>
                    </h1>

                    <div className="pt-8 text-[#929090] text-sm sm:text-base xl:text-base">
                        <p>
                            BlackAlphaLabs is a Software Innovation Company focused exclusively on its own ecosystem: South Asian 1st CSS Framework, NoSQL Document-Oriented Database, Research Grade Backend Security Framework, modern APIs, NPM packages, and VS Code extensions.
                        </p>

                        <p className="pt-4">
                            Every project is independently designed, architected, and maintained with a long-term vision for performance, developer experience, and scalability. We do not engage in client services or outsourcing.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row pt-8 xl:pt-16">
                        <div className="pr-0 sm:pr-4 pb-4 sm:pb-0">
                            <a href="/eco-system">
                                <DefultButton label='Explore Ecosystem' />
                            </a>
                        </div>
                        <div className="pl-0 sm:pl-4">
                            <a href="/about">
                                <SecButton label='Raad About Us' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full xl:w-1/2 mt-8 xl:mt-0 flex flex-col items-center text-center">
                    <img src={SiteLogoBlue} alt="Site Logo" className="rounded-xl mb-4" />
                    <h1 className="uppercase tracking-[0.5rem] text-white">BlackAlphaLabs</h1>
                </div>
            </div>

            <div className="xl:hidden flex flex-col items-center text-center px-4">
                <div className="w-full flex flex-col items-center text-center transform transition-transform duration-500 hover:scale-105">
                    <img
                        src={SiteLogoBlue}
                        alt="Site Logo"
                        className="rounded-xl mb-4"
                    />
                    <h1 className="uppercase tracking-[0.5rem] text-white text-lg sm:text-xl xl:text-2xl">
                        BlackAlphaLabs
                    </h1>
                </div>


                <div className="text-center mt-4 px-2">
                    <h1 className="text-2xl sm:text-3xl font-semibold leading-snug">
                        Building the <span style={{ fontStyle: 'italic', color: '#00E0FE' }}>Future</span> of Software Innovation & Developer Tools
                    </h1>
                </div>


                <div className="pt-6 text-[#929090] text-sm sm:text-base xl:text-base px-2 space-y-4">
                    <p>
                        BlackAlphaLabs is a Software Innovation Company focused exclusively on its own ecosystem: JKCSS, CoconutDB, CoconutServeJS, modern APIs, NPM packages, and VS Code extensions.
                    </p>
                    <p>
                        Every project is independently designed, architected, and maintained with a long-term vision for performance, developer experience, and scalability. We do not engage in client services or outsourcing.
                    </p>
                </div>


                <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4 w-full px-4">
                    <div className="flex-1">
                        <DefultButton label="Get Started" />
                    </div>
                    <div className="flex-1">
                        <SecButton label="Learn More" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero