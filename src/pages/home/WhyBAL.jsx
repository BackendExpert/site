import React from 'react'
import HeroHome from "../../assets/HeroHome.jpg"
import jkcss2 from '../../assets/jkcss2.PNG'
import jkcss3 from '../../assets/jkcss3.PNG'
import jkcss4 from '../../assets/jkcss4.PNG'
import LHUB from '../../assets/LHUB.PNG'

const WhyBAL = () => {
    const whybal = [
        {
            number: "01",
            name: "Performance-first DNA",
            desc: `Our core internal benchmark is the "Zero-Overhead" rule. If a feature adds unnecessary latency, it doesn't ship. We optimize at the byte level.`
        },
        {
            number: "02",
            name: "Architectural Integrity",
            desc: `We believe in composable systems. Our tools are built to be swapped, extended, and modularized without breaking the ecosystem's flow.`
        },
        {
            number: "03",
            name: "Engineering over Marketing",
            desc: `No fluff, no vanity metrics. Our growth is driven by developer utility and robust documentation that speaks the language of the engineer.`
        },
    ]
    return (
        <div className='bg-[#050505] py-24 xl:px-32 px-8'>
            <div className="xl:flex">
                <div className="xl:w-1/2">
                    <div className=" xl:mr-4">
                        <h1 className="text-3xl xl:text-7xl text-white">
                            <p className='p-2'>Why</p>
                            <p className="p-2">
                                blackalphalabs ?
                            </p>
                        </h1>

                        <p className="text-white mt-4">
                            BlackAlphaLabs exists to build long-term, developer-focused software products. We don’t chase trends or client-driven features — we focus on clarity, performance, and sustainable engineering.
                        </p>

                        <div className="mt-4 p-4">
                            <img src={HeroHome} alt="" />
                        </div>
                    </div>
                    <div className="mt-8">
                        {
                            whybal.map((data, index) => {
                                return (
                                    <div className="xl:flex mb-16 duration-500" key={index}>
                                        <div className="xl:text-left text-center text-[#474646] text-7xl hover:text-[#00F2FF]">{data.number}</div>

                                        <div className="ml-8">
                                            <h1 className="text-[#F3F0EF] text-4xl mb-16">
                                                {data.name}
                                            </h1>
                                            <p className="text-[#787776]">
                                                {data.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="xl:w-1/2 ml-4 space-y-6">
                    {/* JKCSS 1 */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl mt-16">
                        <img
                            src={jkcss2}
                            alt="JKCSS Project 1"
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                            <h1 className="text-[#00F2FF] text-2xl font-bold">JKCSS</h1>
                            <p className="text-gray-200 mt-2 text-sm">
                                A sleek and modern CSS framework for responsive, high-performance web apps. Minimal effort, maximum style.
                            </p>
                        </div>
                    </div>

                    {/* JKCSS 2 */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl mt-16">
                        <img
                            src={jkcss3}
                            alt="JKCSS Project 2"
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                            <h1 className="text-[#00F2FF] text-2xl font-bold">JKCSS</h1>
                            <p className="text-gray-200 mt-2 text-sm">
                                Modular and reusable components that accelerate frontend development while keeping your design consistent.
                            </p>
                        </div>
                    </div>

                    {/* JKCSS 3 */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl mt-16">
                        <img
                            src={jkcss4}
                            alt="JKCSS Project 3"
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                            <h1 className="text-[#00F2FF] text-2xl font-bold">JKCSS</h1>
                            <p className="text-gray-200 mt-2 text-sm">
                                Advanced utilities, dark mode support, and highly customizable layouts for visually stunning websites.
                            </p>
                        </div>
                    </div>

                    {/* LHUB */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl mt-16">
                        <img
                            src={LHUB}
                            alt="LHUB Project"
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                            <h1 className="text-[#00F2FF] text-2xl font-bold">LHUB</h1>
                            <p className="text-gray-200 mt-2 text-sm">
                                A collaborative hub for learning and innovation, integrating interactive tools and a vibrant developer community.
                            </p>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default WhyBAL