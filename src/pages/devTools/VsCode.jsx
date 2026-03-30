import React from 'react'
import vscodes from '../../component/data/vscode'
import { FaCircleCheck } from "react-icons/fa6";
import DefultButton from '../../component/buttons/DefultButton';

const VsCode = () => {
    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>
            <h1 className="uppercase text-white text-4xl tracking-[0.4rem]">
                IDE Extensions
            </h1>

            <div className="mt-8">
                <div className="grid xl:grid-cols-2 gap-4">
                    {vscodes.map((data, index) => {
                        const Icon = data.icon;

                        return (
                            <div
                                key={index}
                                className="relative p-8 border border-[#313030] rounded-xl overflow-hidden"
                                style={{
                                    backgroundImage: `
                                        linear-gradient(135deg, rgba(0,128,140,0.20), rgba(0,0,0,0.85)),
                                        url(${data.image})
                                    `,
                                    backgroundPosition: "right bottom",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "340px",
                                }}
                            >
                                {/* Overlay for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="bg-[#313030]/70 p-3 border border-[#006877] inline-block backdrop-blur-sm rounded">
                                        <Icon size={30} />
                                    </div>

                                    <div className="mt-4">
                                        <h1 className="text-2xl font-semibold">{data.name}</h1>

                                        <div className="inline-block bg-[#313030] px-4 py-1 mt-2 text-xs text-[#00E5FF] rounded">
                                            {data.version}
                                        </div>

                                        <p className="pt-4 text-[#B3B3B3] leading-relaxed">
                                            {data.desc}
                                        </p>
                                    </div>

                                    {/* Datapoints */}
                                    <div className="p-8">
                                        {data.datapoint.map((points, pindex) => (
                                            <div className="flex pb-4 items-center" key={pindex}>
                                                <FaCircleCheck size={20} className='fill-[#00E0FE]' />
                                                <p className="pl-2">{points.name}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div>
                                        {data.tags.map((tag, tindex) => (
                                            <div
                                                className="px-4 py-1 m-2 rounded inline-block bg-[#005A60] text-[#00E5FF]"
                                                key={tindex}
                                            >
                                                {tag.name}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <div className="mt-4">
                                        <a href={data.link} target="_blank" rel="noreferrer">
                                            <DefultButton label="View Extensions" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default VsCode