import React from 'react'
import { MdOutlineArchitecture } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

const Vison = () => {
    const aboutvision = [
        {
            icon: FaBolt,
            name: "Mission",
            desc: "To accelerate the global transition to high-performance, developer-first infrastructure by creating tools that prioritize speed without compromising on safety.",
            color: "border-[#00F2FF]",
            iconColor: "text-[#00F2FF]"
        },
        {
            icon: FaEye,
            name: "Vision",
            desc: "A future where infrastructure is invisible, allowing engineers to focus solely on creative logic while our systems handle the complexity of the machine.",
            color: "border-[#0580D3]",
            iconColor: "text-[#0580D3]"
        },
        {
            icon: MdOutlineArchitecture,
            name: "Philosophy",
            desc: `We believe in "Engineering with Intent." Every line of code should serve a purpose, and every interface should provide clarity, not clutter.`,
            color: "border-[#787776]",
            iconColor: "text-[#787776]"
        }
    ]
    return (
        <div className='bg-[#131313] py-24 xl:px-32 px-6 text-white'>
            <div className="grid xl:grid-cols-3 gap-9">
                {
                    aboutvision.map((data, index) => {
                        const Icon = data.icon;
                        return (
                            <div className={`bg-[#1C1B1B] p-8 border-l ${data.color}`} key={index}>
                                <div className="">
                                    <Icon size={40} className={`${data.iconColor}`} />
                                </div>
                                <div className="mt-8">
                                    <h1 className="text-2xl">{data.name}</h1>
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

export default Vison