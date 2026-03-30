import { Copy, Search } from 'lucide-react'
import React, { useState } from 'react'
import npm from "../../component/data/npms"
import DefaultInput from '../../component/forms/DefaultInput'

const Npm = () => {

    const [query, setQuery] = useState('')
    const [copiedId, setCopiedId] = useState(null)

    const filteredNpm = npm.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(tag => tag.name.toLowerCase().includes(query.toLowerCase()))
    )

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 1500)
    }

    return (
        <div className='bg-[#1C1B1B] py-24 xl:px-32 px-6 text-white'>

            <div className="md:flex justify-between items-center">

                <div className="uppercase">
                    <h1 className="text-4xl mb-4">Core Registry</h1>
                    <p className="tracking-[0.5rem]">NPM Packages & Modules</p>
                </div>

                <div className='md:mt-0 mt-4'>
                    <DefaultInput
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search packages..."
                        icon={Search}
                    />
                </div>

            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredNpm.length > 0 ? (
                    filteredNpm.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className="border p-8 border-[#313030] duration-500 hover:shadow-xl"
                            >
                                <div className="md:flex justify-between">
                                    <h1 className='text-xl'>{data.name}</h1>
                                    <div>
                                        <h1 className="uppercase tracking-[0.1rem] text-[#00848C]">{data.status}</h1>
                                    </div>
                                </div>

                                <div>
                                    <div className="inline-block bg-[#313030] px-4 py-1 mt-2 text-xs text-[#00848C]">
                                        {data.version}
                                    </div>
                                </div>

                                <div className="mt-4 text-[#787776]">
                                    {data.desc}
                                </div>

                                <div
                                    onClick={() => handleCopy(data.install, data.id)}
                                    className="bg-[#000000] p-4 mt-8 text-xs flex justify-between items-center cursor-pointer rounded"
                                >
                                    <span>{data.install}</span>
                                    <Copy className="cursor-pointer text-[#00848C]" />
                                </div>

                                {copiedId === data.id && (
                                    <div className="text-xs text-[#00F2FF] mt-2">
                                        Copied
                                    </div>
                                )}
                            </div>
                        )
                    })
                ) : (
                    <div className="col-span-full text-center text-gray-400">
                        No npm or modules found
                    </div>
                )}
            </div>

        </div>
    )
}

export default Npm