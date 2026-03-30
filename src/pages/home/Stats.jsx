import React from 'react'

const Stats = () => {
    const statsofBAL = [
        {
            name: "Project Deploy",
            count: "5",
            color: 'text-[#00E0FE]'
        },
        {
            name: "APIs Developed",
            count: "3",
            color: "text-[#FFFFFF]"
        },
        {
            name: "NPMs Developed",
            count: "30",
            color: "text-[#FFFFFF]"
        },
        {
            name: "VsCode Extensions",
            count: "5",
            color: 'text-[#00E0FE]'
        }
    ]
    return (
        <div className='bg-[#050505] py-24 xl:px-32 px-8'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    statsofBAL.map((data, index) => {
                        return (
                            <div className="text-center" key={index}>
                                <h1 className={`text-7xl ${data.color}`}>{data.count}+</h1>
                                <p className="pt-2 uppercase text-[#5F5E5E]">{data.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stats