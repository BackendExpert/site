import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cpu, Rocket, Lightbulb, Sparkles, Wand2, Layers } from 'lucide-react'

const History = () => {
    const historyData = [
        {
            date: "Overview",
            title: "BlackAlphaLabs Vision",
            description:
                "BlackAlphaLabs was founded with a vision of creating a unified ecosystem of developer-first tools and platforms. The company has always focused on producing internally driven products with scalability, performance, and developer experience as the core principles.",
            icon: Lightbulb
        },
        {
            date: "May 2023",
            title: "JKCSS Launch",
            description:
                "The journey began with the first production release of JKCSS, a modern, utility-first CSS framework designed to simplify and accelerate front-end development.",
            icon: Code
        },
        {
            date: "April 2024",
            title: "NPM Ecosystem Expansion",
            description:
                "Building on early success, the lab launched its first NPM packages, providing reusable libraries to streamline workflows and improve developer productivity.",
            icon: Layers
        },
        {
            date: "Nov 2024",
            title: "CoconutDB",
            description:
                "CoconutDB was introduced as a lightweight, high-performance database tailored for modern applications.",
            icon: Database
        },
        {
            date: "Sept 2025",
            title: "CoconutServeJS",
            description:
                "CoconutServeJS was founded, strengthening server-side capabilities within the ecosystem and improving integration across tools.",
            icon: Rocket
        },
        {
            date: "Jan 2026",
            title: "Research-Based Innovation",
            description:
                "Initiated research-driven development focused on advancing next-generation developer tools and experimentation with new paradigms.",
            icon: Cpu
        },
        {
            date: "March 2026",
            title: "JKCSS AI Runtime",
            description:
                "JKCSS evolved with the introduction of an AI runtime layer, enabling smarter styling workflows and adaptive UI generation.",
            icon: Sparkles
        },
        {
            date: "Future",
            title: "AI CSS Framework",
            description:
                "A fully AI-driven CSS framework is under development, aiming to redefine how styles are generated, managed, and optimized.",
            icon: Wand2
        }
    ]

    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>
            <h1 className='text-3xl font-semibold mb-16 text-center'>
                Our History
            </h1>

            <div className='relative'>
                <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-600'></div>
                <div className='md:hidden absolute left-4 top-0 h-full border-l border-gray-600'></div>

                <div className='flex flex-col gap-16'>
                    {historyData.map((item, index) => {
                        const isLeft = index % 2 === 0
                        const Icon = item.icon
                        const { ref, inView } = useInView({
                            triggerOnce: true,
                            threshold: 0.2
                        })

                        return (
                            <div
                                key={index}
                                ref={ref}
                                className='relative flex flex-col md:flex-row md:items-center w-full'
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6 }}
                                    className={`hidden md:block w-1/2 ${isLeft ? 'pr-8 text-right' : ''}`}
                                >
                                    {isLeft && (
                                        <>
                                            <p className='text-sm text-gray-400'>{item.date}</p>
                                            <h2 className='text-xl font-bold text-[#00F2FF] mt-1 flex items-center justify-end gap-2'>
                                                {item.title}
                                                <Icon size={18} />
                                            </h2>
                                            <p className='text-gray-300 mt-2 leading-relaxed'>
                                                {item.description}
                                            </p>
                                        </>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6 }}
                                    className={`hidden md:block w-1/2 ${!isLeft ? 'pl-8 text-left' : ''}`}
                                >
                                    {!isLeft && (
                                        <>
                                            <p className='text-sm text-gray-400'>{item.date}</p>
                                            <h2 className='text-xl font-bold text-[#00F2FF] mt-1 flex items-center gap-2'>
                                                <Icon size={18} />
                                                {item.title}
                                            </h2>
                                            <p className='text-gray-300 mt-2 leading-relaxed'>
                                                {item.description}
                                            </p>
                                        </>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4 }}
                                    className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 mt-2 w-5 h-5 rounded-full border-2 border-[#131313] ${inView ? 'bg-[#00F2FF] shadow-[0_0_12px_#00F2FF]' : 'bg-gray-600'}`}
                                />

                                <div className='md:hidden pl-12'>
                                    <div className='flex items-center gap-2 text-[#00F2FF] font-semibold'>
                                        <Icon size={18} />
                                        {item.title}
                                    </div>
                                    <p className='text-sm text-gray-400'>{item.date}</p>
                                    <p className='text-gray-300 mt-2 leading-relaxed'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default History
