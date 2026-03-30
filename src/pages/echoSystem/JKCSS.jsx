import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import DefultButton from '../../component/buttons/DefultButton';
import SecButton from '../../component/buttons/SecButton';

const JKCSS = () => {
    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="relative">

                    <h1 className="uppercase tracking-[0.2rem] text-[#00F2FF]">
                        module // UI_ENGINE
                    </h1>

                    <h2 className="text-5xl mt-6 font-semibold">
                        JKCSS
                    </h2>

                    <p className="text-xl mt-4 text-gray-300 leading-relaxed">
                        Utility-first CSS framework built for speed and clarity.
                    </p>

                    <p className="mt-5 text-gray-400 leading-relaxed border-l border-[#002022] pl-4">
                        A modern framework by BlackAlphaLabs designed for predictable layouts,
                        clean semantics, and long-term maintainability.
                    </p>

                    <div className="mt-5 space-y-2">
                        <p className="text-[#00BCD5] font-medium">
                            South Asia’s first CSS framework — built in Sri Lanka 🇱🇰
                        </p>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            JKCSS represents a new generation of CSS tooling from South Asia, focused on simplicity,
                            performance, and developer-friendly design systems. It is engineered to support scalable
                            UI development while maintaining clean and predictable styling patterns.
                        </p>
                    </div>

                    <div className="mt-10 space-y-5">
                        <div className="flex items-start group">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1 group-hover:scale-110 transition' />
                            <p className="pl-4 text-gray-300 group-hover:text-white transition">
                                Human-readable utilities for clean structure.
                            </p>
                        </div>

                        <div className="flex items-start group">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1 group-hover:scale-110 transition' />
                            <p className="pl-4 text-gray-300 group-hover:text-white transition">
                                Production-ready and scalable architecture.
                            </p>
                        </div>

                        <div className="flex items-start group">
                            <FaCheckCircle size={20} className='text-[#00F2FF] mt-1 group-hover:scale-110 transition' />
                            <p className="pl-4 text-gray-300 group-hover:text-white transition">
                                Predictable layouts with minimal conflicts.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5 mt-10">
                        <a href="" className="hover:scale-105 transition">
                            <DefultButton label='Read Docs' />
                        </a>
                        <a href="" className="hover:scale-105 transition">
                            <SecButton label='View More' />
                        </a>
                    </div>

                    {/* subtle glow */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00F2FF] opacity-10 blur-3xl rounded-full"></div>
                </div>

                {/* RIGHT SIDE - APPLE STYLE WINDOW */}
                <div className="rounded-xl border border-[#002022] bg-[#0f1111] shadow-2xl overflow-hidden backdrop-blur-xl">

                    {/* Window Header */}
                    <div className="flex items-center gap-2 px-5 py-3 bg-[#111616] border-b border-[#002022]">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>

                        <div className="ml-4 text-xs text-gray-500">
                            jkcss.module.css
                        </div>
                    </div>

                    {/* Code Block */}
                    <div className="p-6 overflow-x-auto text-sm text-gray-300 leading-relaxed">
                        <pre className="font-mono">
                            {`.btn {
  padding: 12px 20px;
  background: #00F2FF;
  color: #000;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
}

.btn:hover {
  opacity: 0.85;
}`}
                        </pre>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default JKCSS