import React from 'react'
import Server from '../../assets/Server2.png'
import { FaCheckCircle } from "react-icons/fa";
import DefultButton from '../../component/buttons/DefultButton';
import SecButton from '../../component/buttons/SecButton';

const CoconutDB = () => {
    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>
            <div className='flex flex-col lg:flex-row items-center lg:items-stretch gap-16'>

                {/* LEFT IMAGE */}
                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <div className='relative'>
                        <div
                            className='w-80 md:w-[440px] lg:w-[520px] aspect-[3/4] bg-cover bg-center rounded-2xl shadow-2xl relative'
                            style={{
                                backgroundImage: `url(${Server})`
                            }}
                        >
                            <div className='absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#1C1B1B] via-[#1C1B1B]/80 to-transparent'>
                                <h1 className='text-2xl uppercase tracking-[0.2rem] text-[#00F2FF] font-semibold'>
                                    CoconutDB
                                </h1>
                            </div>
                        </div>

                        <div className='absolute inset-0 rounded-2xl bg-black/10'></div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-1/2">

                    <h1 className="uppercase tracking-[0.2rem] text-[#00F2FF]">
                        Database Systems // NoSQL_ENGINE
                    </h1>

                    <h2 className="text-5xl mt-6 font-semibold">
                        CoconutDB
                    </h2>

                    <p className="text-xl mt-4 text-gray-300">
                        Document-oriented NoSQL database built for modern applications
                    </p>

                    <p className="mt-5 text-gray-400 leading-relaxed border-l border-[#002022] pl-4">
                        CoconutDB is a high-performance, document-oriented NoSQL database developed in Sri Lanka by BlackAlphaLabs.
                        It is designed for scalability, flexibility, and predictable performance in real-world systems.
                    </p>

                    <div className="mt-6 inline-block px-4 py-2 border border-[#00BCD5] text-[#00BCD5] rounded-full text-sm">
                        South Asia’s first NoSQL document-oriented — built in Sri Lanka 🇱🇰
                    </div>

                    {/* FEATURES */}
                    <div className="mt-10 space-y-5">
                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4 text-gray-300">
                                Document-centric storage using flexible JSON-like models.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4 text-gray-300">
                                Built for production with consistency and durability.
                            </p>
                        </div>

                        <div className="flex items-start">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1' />
                            <p className="pl-4 text-gray-300">
                                Predictable performance with optimized indexing and queries.
                            </p>
                        </div>
                    </div>

                    {/* HIGHLIGHTS */}
                    <div className="mt-10 space-y-6 text-gray-400">
                        <div>
                            <h3 className="text-white text-lg mb-2">Why CoconutDB Exists</h3>
                            <p>
                                CoconutDB balances flexibility and control, offering schema-like validation,
                                scalable architecture, and developer-friendly query patterns for large systems.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white text-lg mb-2">Built by BlackAlphaLabs</h3>
                            <p>
                                Designed and maintained by BlackAlphaLabs, focused on creating reliable,
                                scalable, and production-ready infrastructure tools.
                            </p>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-5 mt-10">
                        <a href="">
                            <DefultButton label='Read Docs' />
                        </a>
                        <a href="">
                            <SecButton label='GitHub' />
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CoconutDB