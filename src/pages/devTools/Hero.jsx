import React from 'react'
import { GoDotFill } from 'react-icons/go'
import DefultButton from '../../component/buttons/DefultButton'
import SecButton from '../../component/buttons/SecButton'
import devtools from '../../assets/devtools.png'

const Hero = () => {
    return (
        <div className='xl:py-48 md:pt-40 py-24 bg-[#1C1B1B] min-h-screen text-white px-4 xl:px-40'>

            {/* FIX: removed "hidden" so it shows on all screens */}
            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center">

                {/* LEFT SIDE */}
                <div className="w-full xl:w-1/2">

                    <div className="text-xs inline-block bg-[#ffffff10] backdrop-blur-md px-5 py-2 rounded-lg text-white">
                        <div className="flex items-center">
                            <GoDotFill className='fill-[#00E0FE]' />
                            <span className='ml-2 uppercase tracking-[0.1rem] text-[#00E0FE]'>
                                system v4 0.2 stable
                            </span>
                        </div>
                    </div>

                    <h1 className='text-5xl sm:text-6xl xl:text-7xl leading-tight mt-4'>
                        <p className='py-1'>Developer</p>
                        <p className='py-1'>
                            <span className='text-[#00E0FE]'>Primitives</span> &
                        </p>
                        <p className='py-1'>Tooling</p>
                    </h1>

                    <div className="pt-8 text-[#929090] text-sm sm:text-base">
                        <p>
                            High-performance engineering blocks for the next generation
                            of decentralized infrastructure. Built by engineers, for engineers.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row pt-8 xl:pt-16">
                        <div className="sm:pr-4 pb-4 sm:pb-0">
                            <a
                                href="https://www.npmjs.com/~jehankandy"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <DefultButton label='Explore Registry' />
                            </a>
                        </div>

                        <div className="sm:pl-4">
                            <a
                                href="https://marketplace.visualstudio.com/publishers/JehanKandy"
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                <SecButton label='Explore VS Code' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 mt-10 xl:mt-0 flex flex-col items-center text-center">

                    <div
                        className="relative w-full max-w-md h-100 rounded-xl mb-4 border-20 border-[#313030] bg-cover bg-center overflow-visible"
                        style={{ backgroundImage: `url(${devtools})` }}
                    >
                        <h1 className="absolute md:-bottom-12 md:-left-12 -bottom-12 right-10 px-6 py-3 bg-[#313030] uppercase tracking-[0.3rem] text-white text-lg font-semibold rounded-lg shadow-lg">
                            <p className="text-4xl mb-2 text-[#00F2FF]">30+</p>
                            <p className="">NPM</p>
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero