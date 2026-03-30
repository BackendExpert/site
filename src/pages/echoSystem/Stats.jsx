import React from 'react'
import { MdOutlineArchitecture } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineSpeed } from "react-icons/md";

const Stats = () => {
    const datastats = [
        {
            icon: TbDeviceMobileCode,
            name: "Developer Experience First",
            desc: "Syntactic sugar that tastes like engineering. Every API is crafted to minimize cognitive load while maximizing output control.",
        },
        {
            icon: MdOutlineArchitecture,
            name: "Minimal by Design",
            desc: "Zero-dependency core philosophies. We believe in providing the foundation, not the baggage. Import only what you execute.",
        },
        {
            icon: MdOutlineSpeed,
            name: "Performance over Complexity",
            desc: `Optimized for low-latency environments and edge execution. Benchmarked against the industry’s most demanding workloads.`,
        }
    ]
    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>
            <div className="grid xl:grid-cols-3 gap-9">
                {
                    datastats.map((data, index) => {
                        const Icon = data.icon;
                        return (
                            <div className="p-8 border-l border-[#313030] duration-500 hover:border-[#00F2FF]" key={index}>
                                <Icon size={40} className='text-[#00F2FF]'/>

                                <div className="">
                                    <h1 className="text-2xl mt-4">{data.name}</h1>

                                    <p className="pt-4 text-[#787776]">
                                        {data.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stats