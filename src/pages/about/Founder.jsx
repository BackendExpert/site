import React from 'react'
import OKCEO from '../../assets/OKCEO.png'
import { MdOutlineTerminal } from "react-icons/md";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { MdGroups3 } from "react-icons/md";
import { MdOutlineNorthEast } from "react-icons/md";

const Founder = () => {
    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>

            <div className='flex flex-col lg:flex-row items-center lg:items-stretch gap-16'>

                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <div className='relative'>
                        <div
                            className='w-80 md:w-[440px] lg:w-[520px] aspect-[3/4] bg-cover bg-center rounded-2xl shadow-2xl relative'
                            style={{
                                backgroundImage: `url(${OKCEO})`
                            }}
                        >
                            <div className='absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#1C1B1B] via-[#1C1B1B]/80 to-transparent'>
                                <h1 className='uppercase tracking-[0.2rem] text-[#00F2FF] text-sm md:text-base font-semibold'>
                                    Jehan Weerasuriya
                                </h1>
                                <p className='text-sm text-gray-300 mt-1'>
                                    Founder & CEO
                                </p>
                            </div>
                        </div>

                        <div className='absolute inset-0 rounded-2xl bg-black/10'></div>
                    </div>
                </div>

                {/* Right - Content */}
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>

                    <h1 className='text-3xl md:text-4xl font-semibold'>
                        The Architect's Vision
                    </h1>

                    <div className='flex items-center mt-5 text-[#00F2FF] gap-3'>
                        <MdOutlineTerminal className='h-6 w-6' />
                        <span className='text-lg md:text-xl'>
                            Lead Software Engineer
                        </span>
                    </div>

                    <p className='mt-8 text-gray-300 leading-relaxed'>
                        Jehan Weerasuriya founded BlackAlphaLabs with a single objective: to solve the architectural bottlenecks that plague modern distributed systems. With nearly a decade of experience in systems engineering and performance optimization, Jehan leads the technical direction of CoconutDB and the broader ecosystem.
                    </p>

                    {/* Feature Blocks */}
                    <div className='mt-10 space-y-8'>

                        {/* Item 1 */}
                        <div className='flex items-start gap-5'>
                            <div className='p-3 bg-[#00E0FE]/20 rounded-lg'>
                                <TbRosetteDiscountCheckFilled size={22} className='text-[#00E0FE]' />
                            </div>

                            <div>
                                <h2 className='text-xl md:text-2xl font-medium'>
                                    Systems Precision
                                </h2>
                                <p className='pt-2 text-gray-300 leading-relaxed'>
                                    Specializing in memory-safe runtime environments and low-latency data structures.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className='flex items-start gap-5'>
                            <div className='p-3 bg-[#00E0FE]/20 rounded-lg'>
                                <MdGroups3 size={22} className='text-[#00E0FE]' />
                            </div>

                            <div>
                                <h2 className='text-xl md:text-2xl font-medium'>
                                    Community Driven
                                </h2>
                                <p className='pt-2 text-gray-300 leading-relaxed'>
                                    Advocate for open-source sustainability and modular software design patterns.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 text-[#00F2FF]">
                        <a href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank'>
                            <div className="flex duration-500 hover:ml-4">
                                <p className="text-xl">Connect on LinkedIn</p>
                                <div className="ml-4">
                                    <MdOutlineNorthEast size={30} />
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Founder