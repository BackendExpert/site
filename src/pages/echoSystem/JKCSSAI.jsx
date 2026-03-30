import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import DefultButton from '../../component/buttons/DefultButton';
import SecButton from '../../component/buttons/SecButton';


const JKCSSAI = () => {
    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="">
                    <div className="w-105 h-105 bg-[#00BCD5] flex items-center justify-center rounded-xl">

                        <div className="w-100 h-100 bg-[#1C1B1B] flex flex-col items-center justify-center rounded-lg gap-3">

                            <FaMicrochip size={80} className='text-[#00BCD5]' />

                            <p className="text-xl">jkcss-ai-runtime</p>

                            <p className="text-gray-400 text-sm">
                                v0.1.0-alpha
                            </p>

                        </div>

                    </div>
                </div>


                <div>

                    <h1 className="uppercase tracking-[0.2rem] text-[#00F2FF]">
                        module // RUNTIME_ENGINE
                    </h1>

                    <h2 className="text-5xl mt-6">JKCSS AI Runtime</h2>

                    <p className="text-xl mt-4 text-gray-300">
                        Write styles using natural language instead of CSS or utility classes.
                    </p>

                    <p className="mt-4 text-gray-400">
                        A runtime engine that parses human-like styling phrases and automatically applies
                        design, layout, and effects without manual CSS.
                    </p>
                    <div className="mt-6 inline-block px-4 py-2 border border-[#00BCD5] text-[#00BCD5] rounded-full text-sm">
                        South Asia’s first AI CSS framework — built in Sri Lanka 🇱🇰
                    </div>

                    <div className="mt-8 space-y-4">

                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4">AI-powered style parsing from natural language inputs.</p>
                        </div>

                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4">Zero CSS files required — runtime handles styling automatically.</p>
                        </div>

                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4">Auto DOM detection with real-time style application.</p>
                        </div>

                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4">Optimized for React and dynamic component rendering.</p>
                        </div>

                    </div>

                    <div className="flex gap-5 mt-10">
                        <a href="">
                            <DefultButton label='Read Docs' />
                        </a>
                        <a href="">
                            <SecButton label='NPM' />
                        </a>
                    </div>

                </div>

                {/* RIGHT SIDE - APPLE STYLE WINDOW */}


            </div>

        </div>
    )
}

export default JKCSSAI