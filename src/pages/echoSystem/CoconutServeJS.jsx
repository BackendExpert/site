import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import DefultButton from '../../component/buttons/DefultButton';
import SecButton from '../../component/buttons/SecButton';
import { ImCloudCheck } from "react-icons/im";
import { FaMicrochip } from "react-icons/fa6";

const CoconutServeJS = () => {
    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

                {/* LEFT CONTENT */}
                <div>

                    <h1 className="uppercase tracking-[0.2rem] text-[#00F2FF]">
                        backend // RUNTIME_ENGINE
                    </h1>

                    <h2 className="text-5xl mt-6 font-semibold">
                        CoconutServeJS
                    </h2>

                    <p className="text-xl mt-4 text-gray-300">
                        Research-level backend security runtime engine
                    </p>

                    <p className="mt-5 text-gray-400 leading-relaxed border-l border-[#002022] pl-4">
                        CoconutServeJS is a high-performance backend runtime designed for secure,
                        scalable, and predictable server-side execution. Built with a focus on
                        controlled environments, it enables structured request handling,
                        enforced security layers, and maintainable backend architecture.
                    </p>

                    <div className="mt-5 space-y-2">
                        <p className="text-[#00BCD5] font-medium">
                            South Asia’s first backend runtime engine — built in Sri Lanka 🇱🇰
                        </p>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            CoconutServeJS is part of the BlackAlphaLabs ecosystem, designed to bring structured,
                            secure, and predictable execution to server-side environments. It focuses on controlled
                            runtime behavior, modular architecture, and production-oriented backend design.
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div className="mt-10 space-y-5">
                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4 text-gray-300">
                                Secure runtime execution with controlled request handling.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4 text-gray-300">
                                Designed for backend systems requiring strict reliability and isolation.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4 text-gray-300">
                                Modular architecture optimized for scalability and long-term maintenance.
                            </p>
                        </div>
                    </div>

                    {/* HIGHLIGHTS */}
                    <div className="mt-10 space-y-6 text-gray-400">
                        <div>
                            <h3 className="text-white text-lg mb-2">Why CoconutServeJS Exists</h3>
                            <p>
                                Built to bring structure and security into backend runtime environments,
                                CoconutServeJS focuses on predictable execution, safe request flows,
                                and developer-controlled system behavior.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white text-lg mb-2">Built by BlackAlphaLabs</h3>
                            <p>
                                Designed and maintained by BlackAlphaLabs as part of its ecosystem of
                                developer tools focused on reliability, scalability, and engineering excellence.
                            </p>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-5 mt-10">
                        <DefultButton label='Read Docs' />
                        <SecButton label='GitHub' />
                    </div>

                </div>


                <div className="flex items-center justify-center">



                    <div className="w-105 h-105 bg-[#00BCD5] flex items-center justify-center rounded-xl">

                        <div className="w-100 h-100 bg-[#1C1B1B] flex flex-col items-center justify-center rounded-lg gap-3">

                            <FaMicrochip size={80} className='text-[#00BCD5]' />

                            <p className="text-xl">CoconutServe</p>

                            <p className="text-gray-400 text-sm">
                                v0.1.1-alpha
                            </p>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default CoconutServeJS